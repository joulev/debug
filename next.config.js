// Source: https://github.com/vercel/next.js/discussions/36981#discussioncomment-4319460
function patchNextjsWebpackImageLoaderForInline(config) {
  // workaround for Next.js overriding webpack `config.module.generator` for all of "asset" module types
  // although it works for "asset/resource" and "asset/source" types, it breaks asset/inline
  // https://github.com/vercel/next.js/discussions/36981#discussioncomment-3167331
  config.module.generator["asset/resource"] = config.module.generator["asset"];
  config.module.generator["asset/source"] = config.module.generator["asset"];
  delete config.module.generator["asset"];

  // find the Next.js image loader rule configured by Next.js automatically
  // disable it for imports with a query parameter ?inline
  const imageRule = config.module.rules.find(
    (rule) => rule.loader === "next-image-loader"
  );
  imageRule.resourceQuery = { not: /inline/ };

  // add a custom rule for importing bitmap files with a query parameter ?inline
  // to use the webpack asset/inline module
  config.module.rules.push({
    test: /\.(jpe?g|gif|png)$/i,
    resourceQuery: /inline/,
    type: "asset/inline",
  });
}

/** @type {import("next").NextConfig} */
module.exports = {
  webpack: (config) => {
    patchNextjsWebpackImageLoaderForInline(config);
    return config;
  },
};
