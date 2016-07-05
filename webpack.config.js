module.exports = {
    entry: './src/index.js',
    output: {
        path: './public/javascripts/lib',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

