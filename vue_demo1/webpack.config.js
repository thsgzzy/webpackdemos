/**
 * Created by a1 on 17/3/27.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项

    //js入口文件
    entry: './src/main.js',

    //生成文件
    output: {
        path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
        filename: 'build.js',//打包后输出文件的文件名
        publicPath: '/dist/' //指定资源文件引用的目录
    },

    //进行字符串的处理
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        //vue别名
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,//不跳转
        //启动时和每次保存之后，那些显示的 webpack 包(bundle)信息的消息将被隐藏。错误和警告仍然会显示。
        noInfo: true
    }
}