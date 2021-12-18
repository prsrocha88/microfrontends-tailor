const webpack = require('webpack');

module.exports = {
    output: {
      jsonpFunction: 'webpackContent'
    },
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4711")
        })
    ]
}
