const Config = { CURRENT_ENV: 'lo3ca3l' };
const mergedConfig = {
    Config,
};
const isProd = process.env.NODE_ENV === 'production' // 프로덕션 모드인지

module.exports = {
  ... mergedConfig,
  assetPrefix: isProd
    ? 'nsFlix.co.kr'
    : '',
}