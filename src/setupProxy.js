const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('Loading proxy setup...');

  app.use(
    '/speedapi',
    createProxyMiddleware({
      target: 'https://coachai.cs.nycu.edu.tw:55001',
      changeOrigin: true,
      pathRewrite: {
        '^/speedapi': '/api'
      },
      logLevel: 'debug'
    })
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://coachai.cs.nycu.edu.tw:55000',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};