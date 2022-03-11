const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.optimization = { usedExports: true };

  //   // Important: return the modified config
  //   return config;
  // },
};
