import type webpack from 'webpack';

export function buildSvgLoader (): webpack.RuleSetRule {
  return {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: ['@svgr/webpack']
  };
}
