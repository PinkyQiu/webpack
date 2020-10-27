const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        home: './src/home.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map',
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
        })
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