const { default: babelJest } = require('babel-jest'); // eslint-disable-line import/no-extraneous-dependencies

const babelConfig = {
  presets: [
    '@babel/preset-typescript',
    [
      'next/babel',
      {
        'preset-env': {
          modules: 'commonjs'
        }
      }
    ],
  ]
};

module.exports = babelJest.createTransformer(babelConfig);
