const path = require('path');

module.exports = {
    entry: './index.js',
    resolve: {
        alias: {
            'react-singleton': path.resolve('../', 'index.js')
        }
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /node_modules/,
            include: __dirname
        }]
    }
}
