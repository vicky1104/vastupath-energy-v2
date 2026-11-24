/** Prefixes public-folder paths with the base path (needed when hosted on GitHub Pages under /repo-name). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${BASE_PATH}${p}`;
