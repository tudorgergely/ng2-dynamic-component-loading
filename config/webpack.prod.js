var commonConfig = require('./webpack.common');
var webpack = require('webpack');

config = commonConfig;

config.devServer = {
    contentBase: './public',
    port: 9899,
    inline: true,
    progress: true,
    compress: true
};

config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false
        }
    })
);

module.exports = config;