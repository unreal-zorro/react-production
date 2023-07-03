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

  if (config.resolve) {
    if (config.resolve.modules) {
      config.resolve.modules.push(paths.src);
    }
    if (config.resolve.extensions) {
      config.resolve.extensions.push('.ts', '.tsx');
    }
  }

  if (config.module) {
    if (config.module.rules) {
      config.module.rules = [...config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line
        if (/svg/.test(rule.test as string)) {
          return {
            ...rule,
            exclude: /\.svg$/i
          };
        }
        return rule;
      })];
      if (config.module.rules) {
        config.module.rules.push(buildSvgLoader());
        config.module.rules.push(buildCssLoader(true));
      }
    }
  }

  if (config.plugins) {
    config.plugins.push(new webpack.DefinePlugin({
      __IS_DEV__: true
    }));
  }

  return config;
};
