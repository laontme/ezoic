import HtmlPlugin from 'html-webpack-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { VueLoaderPlugin as VuePlugin } from 'vue-loader';
import { VuetifyLoaderPlugin as VuetifyPlugin } from 'vuetify-loader';
import { CleanWebpackPlugin as CleanPlugin } from 'clean-webpack-plugin';

import path from 'path';

import { paths } from './paths.js';

export default {
  entry: [path.resolve(paths.src, 'index.js')],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: paths.dist,
  },
  plugins: [
    new CleanPlugin(),
    new HtmlPlugin({
      template: path.resolve(paths.src, 'index.html'),
    }),
    new PrettierPlugin(),
    new ESLintPlugin({
      files: ['src'],
      extensions: ['js', 'vue'],
      failOnError: true,
      failOnWarning: true,
    }),
    new VuePlugin(),
    new VuetifyPlugin(),
  ],
  resolve: {
    modules: [paths.src, 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': paths.src,
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
};
