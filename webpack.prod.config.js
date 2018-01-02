const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    devtool: 'sourcemap',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            compress: {
                unused: true,
                dead_code:true,
                warnings: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true,
                sequences: true,
                booleans: true
            }
        }),
        new CleanWebpackPlugin(['styles','images','*.*'], {
            verbose: true,
            root: path.resolve(__dirname, 'public')
        })
    ]
})
