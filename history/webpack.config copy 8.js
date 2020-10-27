const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        home: './src/home.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('make in 2020')
    ],
    module: {
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
    
}