const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  mode: process.env.NODE_ENV || 'development',
  stats: {
    children: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@layout': path.resolve(__dirname, 'src/layout'),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { esModule: false },
          },
          'css-hot-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css', ignoreOrder: true }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/dist/',
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
};
