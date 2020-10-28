const config = require('./webpack.config.js');
let { merge } = require('webpack-merge');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'source-map'
})