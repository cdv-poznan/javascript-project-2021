const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAsstesPlugin = require('optimize-css-assets-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const configure = (env, args) => {
  const PRODUCTION = args.mode === 'production';

  return {
    mode: args.mode || 'development',
    entry: {
      main: ['./src/index.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
            { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|eot|woff|woff2|ttf)$/,
          use: {
            loader: 'file-loader',
            options: { name: '[path][name].[ext]' },
          },
        },
        {
          test: /\.(html)$/,
          use: ['html-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
        scriptLoading: 'defer',
        meta: {
          description: 'Solar based compass',
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
          author: 'Marcin Rochowski',
        },
        minify: 'auto',
      }),
      new CleanWebpackPlugin(),
      new ESLintWebpackPlugin({
        failOnError: false,
        failOnWarning: false,
        formatter: 'codeframe',
      }),
      new StylelintWebpackPlugin({
        files: './src/*.scss',
        failOnError: false,
        failOnWarning: false,
        formatter: 'string',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new OptimizeCssAsstesPlugin({
        assetNameRegExp: /\.css$/,
      }),
      new BrowserSyncPlugin(
        {
          host: 'localhost',
          port: 4200,
          proxy: 'http://localhost:4200',
        },
        {
          reload: true,
        },
      ),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [autoprefixer()],
        },
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 4200,
      watchContentBase: true,
    },
    performance: {
      hints: false,
    },
    devtool: PRODUCTION ? 'source-map' : 'eval-source-map',
  };
};

module.exports = configure;
