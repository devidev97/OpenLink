import links from "virtual:links";

const menu = document.querySelector("#menu");
const empty = document.querySelector("#empty");

if (!links.length) {
  empty.hidden = false;
}

for (const link of links) {
  const anchor = document.createElement("a");
  anchor.className = "access";
  anchor.href = link.href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.title = link.href;

  const logo = document.createElement("img");
  logo.className = "access__logo";
  logo.src = link.image;
  logo.alt = "";
  logo.addEventListener("error", () => {
    if (!logo.src.endsWith("/logo-link.svg")) logo.src = "/logo-link.svg";
  });

  const label = document.createElement("span");
  label.className = "access__label";
  label.textContent = link.label;

  anchor.append(logo, label);
  menu.append(anchor);
}
