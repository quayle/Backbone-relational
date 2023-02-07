const path = require('path');

module.exports = [
  {
      target: 'web',
      entry: './src/index.js',
      mode: 'development',
      devtool: false,
      output: {
          libraryTarget: 'umd',
          filename: 'backbone-relational.js',
          path: path.resolve(__dirname, 'dist'),
      },
      externals: {
          'underscore': {
              commonjs: 'underscore',
              commonjs2: 'underscore',
              amd: 'underscore',
              root:'_'
          },
          'backbone': {
              commonjs: 'backbone',
              commonjs2: 'backbone',
              amd: 'backbone',
              root:'Backbone'
          },
      },
  },
  {
      target: 'web',
      entry: './src/index.js',
      mode: 'production',
      output: {
          filename: 'backbone-relational.min.js',
          path: path.resolve(__dirname, 'dist'),
      },
      externals: {
          'underscore': {
              commonjs: 'underscore',
              commonjs2: 'underscore',
              amd: 'underscore',
              root:'_'
          },
          'backbone': {
              commonjs: 'backbone',
              commonjs2: 'backbone',
              amd: 'backbone',
              root:'Backbone'
          },
      },
  }
];
