import type { Configuration, RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildFileLoader } from '../build/loaders/buildFileLoader';
import webpack from 'webpack';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  };

  if (config.resolve) {
    config.resolve.modules?.push(paths.src);
    config.resolve.extensions?.push('.ts', '.tsx');
    config.resolve.alias = {
      ...config?.resolve?.alias,
      '@': paths.src
    };
  }

  if (config.module) {
    config.module.rules = config?.module?.rules?.map(
      (rule: RuleSetRule | '...') => {
        // eslint-disable-next-line
        if (/svg/.test((rule as RuleSetRule).test as string)) {
          return {
            ...(rule as RuleSetRule),
            exclude: /\.svg$/i
          };
        }
        return rule;
      }
    );

    config.module.rules?.push(buildSvgLoader());
    config.module.rules?.push(buildCssLoader(true));
    config.module.rules?.push(buildFileLoader());
  }

  config?.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook')
    })
  );

  return config;
};
