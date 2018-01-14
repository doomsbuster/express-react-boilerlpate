const path = require('path')
const webpack = require('webpack')
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
    })
  ]
}
