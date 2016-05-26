var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/'),
    devtool: debug ? "inline-sourcemap" : null,
    entry: ["./js/client.js"],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'src/'),
        filename: "client.min.js"
    },
    devServer:{
        contentBase: 'src'
    },
    plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({mangle:false, sourcemap:false})
    ]

};