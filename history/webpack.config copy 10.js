const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.html',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
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
    },
    resolve: {
        modules: [path.resolve('node_modules')],
        extentions: ['js','css', 'json'],   // 拓展名，没有后缀优先找js，没找到就找css...
        alias: {
            'bootstrap': 'bootstrap/dist/css/bootstrap.css'
        }
    }
}