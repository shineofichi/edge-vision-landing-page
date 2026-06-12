import { getAlternateLinks, getCanonicalUrl, locales, pageKeys } from '../lib/i18n';

export const prerender = true;

const buildUrlEntry = (locale, pageKey) => {
  const url = getCanonicalUrl(locale, pageKey);
  const alternates = getAlternateLinks(pageKey)
    .map(
      (alternate) =>
        `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`,
    )
    .join('\n');

  return `  <url>
    <loc>${url}</loc>
${alternates}
  </url>`;
};

export function GET() {
  const urls = locales.flatMap((locale) =>
    pageKeys.map((pageKey) => buildUrlEntry(locale, pageKey)),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
