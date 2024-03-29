import type { StorybookConfig } from '@storybook/react-webpack5';
// import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    'storybook-addon-themes'
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
  // docs: {
  //   autodocs: 'tag'
  // },
  // webpackFinal: async (config) => {
  //   if (config?.resolve) {
  //     config.resolve.alias = {
  //       ...config.resolve.alias,
  //       '@': path.resolve(__dirname, '../../src')
  //     };
  //   }
  //   return config;
  // }
};
export default config;
