/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import fs from 'fs'
import { dependencies as externals } from '../../src/package.json';

const data = fs.readFileSync('.env', { encoding: 'utf8' });
const buffer = Buffer.from(data);
const flags = Object.keys(dotenv.parse(buffer));

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, '../../src'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      ...flags
    }),
  ],
};
