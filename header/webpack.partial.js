const webpack = require('webpack');

module.exports = {
    output: {
      jsonpFunction: 'webpackHeader'
    },
    plugins: [
        new webpack.DefinePlugin({
            "VERSION": JSON.stringify("4700")
        })
    ]
}
