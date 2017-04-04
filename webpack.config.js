module.exports = {
    entry: './app/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }, ]
    },

    resolve: {
        //  第一项空字符串必不可少，否则报模块错误
        // extensions: ['', '.es6'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}