/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://jang-inspiration.com`,
  generateRobotsTxt: true,
  priority: 1.0,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/get-tweet-ast/*', '/api/search-notion']
      }
    ]
  }
}
