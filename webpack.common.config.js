const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './ui/main.js',
    vendor: ['react', 'react-dom'],
    redux: ['redux', 'react-redux', 'react-router-dom', 'redux-thunk', 'redux-logger']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public|spec)/,
        use: {
          loader: 'babel-loader'
        }
      },
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
                localIndentName: '[name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|svg|svgz?|gif|woff|woff2)$/gi,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'ui/images'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'redux'],
      filename: '[name].js'
    }),
    new HtmlWebpackPlugin({
      template: 'ui/index.ejs',
      title: 'Express React Boilerplate'
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css'
    })
  ]
}
