const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals');
const NodeTargetPlugin = require('webpack/lib/node/NodeTargetPlugin')


var config = {
    entry: {
        main: './src/main/app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl'],
        mainFields: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
        alias: {
          'lib': path.join(__dirname, 'lib'),
          'browser': path.join(__dirname, 'browser')
        }
    },
    plugins: [
        new NodeTargetPlugin()
    ],
    output: {
        path: path.join(__dirname, 'compiled'),
        filename: 'app.js',
        sourceMapFilename: 'app.map',
        libraryTarget: 'commonjs2',
        publicPath: 'http://localhost:8080/assets/'
    },
    module: {
        rules: [
            { test: /\.js?$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.styl$/, exclude: /(node_modules|bower_components)/, 
                use: ['style-loader','css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[path]','stylus-loader?sourceMap']},
            { test: /\.json$/, use: 'json-loader' }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development'
}

module.exports = config