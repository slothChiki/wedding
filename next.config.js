/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
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
