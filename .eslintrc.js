module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    'super-plugin'
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 0 - off, 1 - warning, 2 - rule on; 2 - number of spaces
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2, { SwitchCase: 1 }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'import/no-unresolved': 'off',
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false
      },
      multilineDetection: 'brackets'
    }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttributes: [
        'as',
        'role',
        'data-testid',
        'to',
        'target',
        'justify',
        'align',
        'border',
        'direction',
        'gap'
      ]
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 125
    }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies,
    'no-param-reassign': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/display-name': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    'n/no-callback-literal': 'off',
    'arrow-body-style': 'off',
    'super-plugin/path-checker': 2
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/indent': ['off']
      }
    },
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off'
      }
    }
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  }
};
