/** Prefixes a site-root path with Astro's configured base.
 *
 * BASE_URL is '/' when the site is served from a domain root, so `withBase`
 * is a no-op there and only rewrites when the site lives under a subpath
 * (a project Pages URL, a preview deploy). Use it for every internal href
 * and asset path written by hand — Astro only rewrites the ones it emits.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) return path;
  return `${base}${path}`;
}
