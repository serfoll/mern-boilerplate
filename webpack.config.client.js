const CURRENT_WORKING_DIR = process.cwd()
const path = require('path')
const webpack = require('webpack')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const config = {
  name: 'browser',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(CURRENT_WORKING_DIR, 'client/main.js')
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
        loader: 'file-loader',
        options: {
          name(file) {
            return '[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  resolve: {
    extensions: ['.jsx', '.ts', '.js']
  }
}

module.exports = config
