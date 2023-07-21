// @ts-check

/** @type {import("next").NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({ test: /\.anyextension$/, type: "asset/source" });
    return config;
  },
};
