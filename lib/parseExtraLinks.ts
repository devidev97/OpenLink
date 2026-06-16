import type { Tool } from './types';

export function parseExtraLinks(raw: string | undefined): Tool[] {
  if (!raw) return [];

  try {
    const trimmed = raw.trim();
    const unquoted =
      (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
      (trimmed.startsWith("'") && trimmed.endsWith("'"))
        ? trimmed.slice(1, -1)
        : trimmed;
    const parsed = JSON.parse(unquoted);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => {
        if (!item || typeof item !== 'object') return null;
        const title = (item as Record<string, unknown>).title;
        const href = (item as Record<string, unknown>).href;
        const imageSrcRaw = (item as Record<string, unknown>).imageSrc;
        const imageVariant = (item as Record<string, unknown>).imageVariant;
        if (typeof title !== 'string' || typeof href !== 'string') return null;

        const imageSrc =
          typeof imageSrcRaw === 'string' && imageSrcRaw.trim().length > 0
            ? imageSrcRaw
            : '/logo-link.svg';

        return {
          title,
          href,
          imageSrc,
          ...(typeof imageVariant === 'string' ? { imageVariant } : {}),
        } satisfies Tool;
      })
      .filter(Boolean) as Tool[];
  } catch {
    return [];
  }
}
