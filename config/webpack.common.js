var webpack = require('webpack');
var ENV = process.env.npm_lifecycle_event;

module.exports = {
    entry: {
        'app': './src/bootstrap.ts',
        'polyfills': './src/polyfills.ts'
    },
    output: {
        path: './public',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify(ENV)
            }
        })
    ]
};