const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const webpack = require('webpack')

const config = {
  name: 'server',
  entry: [path.join(CURRENT_WORKING_DIR, './server/server.js')],
  target: 'node',
  output: {
    filename: 'server.generated.js',
    publicPath: '/dist/',
    path: path.join(CURRENT_WORKING_DIR, 'dist'),
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
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
  }
}

module.exports = config
