var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            'main'
        ]
    },
    output: {
        path: path.join(__dirname, 'static/build/'),
        filename: '[name].js',
        publicPath: 'http://codeforseoul.github.io/jonmat/static/'
    },
    plugins: [
        new BundleTracker(),
        new webpack.DefinePlugin({
            __CONFIG__: JSON.stringify('product')
        })
    ],
    resolve: {
        extensions: ['', 'styl', '.jsx',  '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
            exclude: 'node_modules'
        }, {
            test: /\.json$/,
            loaders: ['json'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.styl$/,
            loaders: ['style', 'css', 'stylus?paths[]=frontend&paths[]=node_modules&paths[]=node_modules/jeet/stylus'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|svg)$/,
            loaders: ['file'],
            include: path.join(__dirname, 'src')
        }]
    }
};
