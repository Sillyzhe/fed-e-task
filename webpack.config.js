const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'none',
    stats: 'none',
    devtool: 'source-map',
    entry:{
        app:'./part01/code/'
    },
    output: {
        path: path.join(__dirname, 'part01/code')
    },
    devServer: {
        publicPath: 'part01/code/index.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'part01/code/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
}