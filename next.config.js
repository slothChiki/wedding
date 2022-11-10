// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// };
//
// module.exports = nextConfig;
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.css$/,
//       exclude: /node_modules/,
//       loader: ['style-loader', 'css-loader'],
//     });
//     return config;
//   },
// };
const _ = require('lodash');
const { Config } = require('./src/config/next/config');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    poweredByHeader: false,
    env: {},
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    experimental: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    // webpack5: true,
    // webpack: (config) => {
    //     config.resolve.fallback = { fs: false };

    //     return config;
    // },
};

const newConfig = _.merge(nextConfig, Config);
module.exports = {
    ...newConfig,
};
