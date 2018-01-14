const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  devtool: 'sourcemap',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, 'ui/styles'),
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new webpack.NamedModulesPlugin()
  ]
})
