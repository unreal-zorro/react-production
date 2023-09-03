import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = buildSvgLoader();

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });

  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(isDev);

  // Если не исп. typescript, то нужен babel
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // };

  const fileLoader = buildFileLoader();

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader
  ];
}
