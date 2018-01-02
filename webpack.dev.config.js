const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
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
        new webpack.NamedModulesPlugin()
    ]
})