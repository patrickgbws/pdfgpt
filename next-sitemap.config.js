/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://chatpdfai.pro",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
