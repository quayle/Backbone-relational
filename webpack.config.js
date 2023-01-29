const path = require('path');

module.exports = [
  {
      target: 'web',
      entry: './src/index.js',
      mode: 'development',
      devtool: false,
      output: {
          filename: 'backbone-relational.js',
          path: path.resolve(__dirname, 'dist'),
      },
      externals: {
          'underscore': '_',
          'backbone': 'Backbone',
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
          'underscore': '_',
          'backbone': 'Backbone',
      },
  }
];
