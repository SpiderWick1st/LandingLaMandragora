import type { APIRoute } from 'astro';

const FALLBACK_SITE = 'https://www.lamandragora.com.pe';

const pageModules = import.meta.glob('./**/*.astro');

function toRoute(file: string): string | null {
  const route = file
    .replace(/^\.\//, '')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '');

  if (route === 'index') return '/';
  if (route === '404' || route.includes('[')) return null;

  return `/${route}`;
}

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL(FALLBACK_SITE)).href.replace(/\/$/, '');
  const lastmod = new Date().toISOString();

  const routes = Object.keys(pageModules)
    .map(toRoute)
    .filter((route): route is string => route !== null)
    .sort();

  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${base}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
