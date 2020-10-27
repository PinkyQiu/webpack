const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.DefinePlugin({
            DEV: JSON.stringify('production');
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']  // minicss会生成main.css，html通过link标签引入
            }
        ]
    }
}