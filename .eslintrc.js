const resolve = require('path').resolve;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  // required to lint *.vue files
  plugins: ['html', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { trailingComma: 'es5', singleQuote: true }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'no-param-reassign': 0,
  },
  globals: {},
  settings: {
    'import/core-modules': [
      'vuex',
      'vue',
      'vue-server-renderer',
      'vuex-router-sync',
      'webpack-node-externals',
    ],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue'],
            alias: {
              '~': __dirname,
              '@': __dirname,
            },
          },
        },
      },
    },
  },
};
