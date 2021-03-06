/**
 * Created by a1 on 17/3/15.
 */
module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
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
                // loader:"style-loader!css-loader"//添加对样式表的处理 或者下面v2的写法

                // use: [
                //     "style-loader",
                //     "css-loader"
                // ]

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
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        // port: '3002',//监听端口
        // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}