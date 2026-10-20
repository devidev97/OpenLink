import { loadEnv, defineConfig } from "vite";

const securityHeaders = {
  "X-Frame-Options": "DENY",
  "Content-Security-Policy": "frame-ancestors 'none'",
};

const DEFAULT_IMAGE = "/logo-link.svg";

function numberedValues(env, name) {
  const values = new Map();
  const pattern = new RegExp(`^${name}(\\d+)$`, "i");
  for (const [key, value] of Object.entries(env)) {
    const match = pattern.exec(key);
    if (!match) continue;
    const text = String(value ?? "").trim();
    if (text) values.set(Number(match[1]), text);
  }
  return values;
}

function publicImage(value) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return DEFAULT_IMAGE;
  if (value.includes("..") || value.includes("\\") || value.includes("?") || value.includes("#")) {
    return DEFAULT_IMAGE;
  }
  return value;
}

export function collectLinks(env) {
  const titles = numberedValues(env, "title");
  const images = numberedValues(env, "image");

  return Object.entries(env)
    .map(([key, value]) => {
      const match = /^link(\d+)$/i.exec(key);
      if (!match) return null;

      const raw = String(value ?? "").trim();
      let url;
      try {
        url = new URL(raw);
      } catch {
        return null;
      }
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;

      const order = Number(match[1]);
      const label = titles.get(order) || url.hostname.replace(/^www\./i, "");
      return {
        order,
        href: url.href,
        label,
        image: publicImage(images.get(order)),
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
}

function linksModule(links) {
  const body = `export default ${JSON.stringify(links)};`;
  return {
    name: "env-links",
    resolveId(id) {
      if (id === "virtual:links") return "\0virtual:links";
    },
    load(id) {
      if (id === "\0virtual:links") return body;
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const links = collectLinks(env);

  return {
    plugins: [linksModule(links)],
    server: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      headers: securityHeaders,
    },
    preview: {
      host: "0.0.0.0",
      port: 4173,
      strictPort: true,
      headers: securityHeaders,
    },
  };
});
