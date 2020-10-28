const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Happypack = require('happypack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new Happypack({
            id: 'js',
            use: [
                {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }]
        })
    ],
    module: {
        noParse: /jquery/,
        rules:[
            {
                test: /\.js$/,
                use: 'happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']  // minicss会生成main.css，html通过link标签引入
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    }
}