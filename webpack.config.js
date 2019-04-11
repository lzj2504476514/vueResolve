const path = require('path');
const webpackPath=require('webpack');
const htmlwp=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');

module.exports={
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        // 打包后的文件存放的路径
       // path: path.resolve(__dirname,'/dist'),
        path: path.resolve('dist'),
        // 打包后的js文件放到dist/js文件下。需要通过占位符才能打包为多个js文件，否则会依次覆盖文件
        filename: 'build.js',
        // 打包后的路径前面加上动态地址
       // publicPath: 'http://cdn.com/'
    },
    module:{
        rules:[
            {
                test: /\.css$/,// 匹配特定文件的正则表达式或正则表达式数组
                use: [ // 应用于模块的 loader 使用列表
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,// 匹配特定文件的正则表达式或正则表达式数组
                use: [ // 应用于模块的 loader 使用列表
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,// 匹配特定文件的正则表达式或正则表达式数组
                use: [ // 应用于模块的 loader 使用列表
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif|ttf)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:20000
                        }
                    }
                ]
            },
            {
                test: /\.js$/,               // 匹配js文件
                exclude: path.resolve(__dirname, 'node_modules'),    //匹配时忽略这个目录，提高打包速度
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlwp({
            title:'首页',
            filename: 'index.html',
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}