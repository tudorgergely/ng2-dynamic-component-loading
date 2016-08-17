var ENV = process.env.npm_lifecycle_event;
var isDev = ENV === 'dev';
var isProd = ENV === 'prod';

if (isDev) {
    module.exports = require('./config/webpack.dev');
}

if (isProd) {
    module.exports = require('./config/webpack.prod');
}