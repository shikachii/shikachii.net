const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  entry: {
    app: './src/main.jsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', ".json", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        }],
      }
    ]
  }
};

module.exports = config;