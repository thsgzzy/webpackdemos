var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

//一些常用路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        //开启 React 代码的模块热替换(HMR)
        'webpack-dev-server/client?http://localhost:8080',
        // 为 webpack-dev-server 的环境打包代码，然后连接到指定服务器域名与端口
        'webpack/hot/only-dev-server',
        //为热替换(HMR)打包好代码.only- 意味着只有成功更新运行代码才会执行热替换(HMR)
        path.resolve(APP_PATH, 'app.jsx')
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        // hot: true,
        inline: true,
        port: 4000
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
    plugins: [
        new HtmlwebpackPlugin({
            title: "My first react",
            template: './index.html'
        })
    ]
}