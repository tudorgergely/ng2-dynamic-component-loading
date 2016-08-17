var commonConfig = require('./webpack.common');
config = commonConfig;
config.devServer = {
    contentBase: './public',
    port: 9898,
    inline: true,
    progress: true,
    historyApiFallback: false
};
config.devtool = 'eval-source-map';
module.exports = config;