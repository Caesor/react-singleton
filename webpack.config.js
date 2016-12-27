var webpack = require('webpack'),
    path = require('path')

var config = {
    entry: './src/index.js',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: [__dirname]
        }]
    },
    output: {
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
}

if(process.env.NODE_ENV === 'production'){
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    )
}

module.exports = config
