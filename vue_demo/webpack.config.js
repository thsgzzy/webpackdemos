/**
 * Created by a1 on 17/3/30.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        path: path.resolve(APP_PATH, 'main.js')
    },
    output: {
        path: BUILD_PATH,
        filename: 'build.js',
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    plugins: [
        /**
         * 这个插件用来简化创建服务于 webpack bundle 的 HTML 文件,
         * 会自动在 dist 目录中生成一个名为 index.html文件
         */
        // new HtmlwebpackPlugin() //Generates default index.html
        new HtmlwebpackPlugin({
            template: './src/index.html' //generate a index.html
        })
    ]
}
