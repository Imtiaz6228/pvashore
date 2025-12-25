/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourwebsite.com', // replace with your real URL
  generateRobotsTxt: true,            // (optional) generate robots.txt
  sitemapSize: 5000,                  // optional
  changefreq: 'daily',                // optional
  priority: 0.7,                      // optional
  // You can also exclude pages if needed
  // exclude: ['/admin/*', '/secret-page']
};

