import type { APIRoute } from 'astro';

const FALLBACK_SITE = 'https://www.lamandragora.com.pe';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL(FALLBACK_SITE)).href.replace(/\/$/, '');

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
