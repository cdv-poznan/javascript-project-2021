const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const configure = (env, args) => {
  const PRODUCTION = args.mode === 'production';

  return {
    mode: args.mode || 'development',
    entry: {
      main: ['./src/main', './src/style.scss'],
    },
    output: {
      path: resolve(__dirname, './dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.sc?ss$/,
          use: [
            env.WEBPACK_SERVE
              ? {
                  loader: 'style-loader',
                }
              : MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
        scriptLoading: 'defer',
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        minify: 'auto',
      }),
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
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/assets',
            to: 'assets',
          },
        ],
        options: {
          concurrency: 100,
        },
      }),
    ],
    devServer: {
      port: 4200,
    },
    performance: {
      hints: false,
    },
    devtool: PRODUCTION ? 'source-map' : 'eval-source-map',
  };
};

module.exports = configure;
