/**
 * Created by a1 on 17/3/21.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    //页面入口文件配置
    entry: [
        path.resolve(__dirname, './app/index.js')
    ],
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //插件项
    plugins: []
}