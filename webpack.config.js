/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  }
};

module.exports = config;