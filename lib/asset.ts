/** Prefixes public-folder paths with the base path (needed on GitHub Pages under /repo-name). Remote URLs pass through. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => (/^https?:\/\//.test(p) ? p : `${BASE_PATH}${p}`);
