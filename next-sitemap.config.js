/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artgonmedia.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/mentions-legales', '/confidentialite'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.artgonmedia.com'}/sitemap.xml`,
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/services/creation-site-web-nador'),
    await config.transform(config, '/services/application-mobile-flutter'),
    await config.transform(config, '/services/referencement-seo-nador'),
    await config.transform(config, '/services/marketing-digital-ads'),
    await config.transform(config, '/services/automatisation-ia'),
    await config.transform(config, '/services/maintenance-support'),
  ],
}
