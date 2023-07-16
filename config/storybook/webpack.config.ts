import type { Configuration, RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import webpack from 'webpack';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };

  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module) {
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule | '...') => {
      // eslint-disable-next-line
        if (/svg/.test((rule as RuleSetRule).test as string)) {
        return {
          ...(rule as RuleSetRule),
          exclude: /\.svg$/i
        };
      }
      return rule;
    });
  }

  config?.module?.rules?.push(buildSvgLoader());
  config?.module?.rules?.push(buildCssLoader(true));

  config?.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('')
  }));

  return config;
};
