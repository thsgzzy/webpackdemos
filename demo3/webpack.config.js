var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new一个这个插件的实例，并传入相关的参数
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],

    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        // port: '3002',//监听端口
        // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}