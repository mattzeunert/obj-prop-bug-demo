var webpack = require('webpack');

module.exports = {
  entry: {
    main: ['./js/app.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
};
