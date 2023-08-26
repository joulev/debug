const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

const nextConfig = {};

module.exports = withVercelToolbar(nextConfig);
