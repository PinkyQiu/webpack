const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './dist',
        compress: true
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']  // minicss会生成main.css，html通过link标签引入
            }
        ],
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        enforce: 'pre'
                    }
                }
            }
        ]
    }
}