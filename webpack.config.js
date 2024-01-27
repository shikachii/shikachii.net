const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    app: './src/main.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'asset/[hash][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        // loader: 'babel-loader',
        loader: 'ts-loader',
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
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'shikachii.net',
      template: './src/index.html',
      inject: 'body',
      scriptLoading: 'defer',
    }),
  ],
};

module.exports = config;