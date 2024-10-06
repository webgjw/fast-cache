const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // 项目入口文件
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'release'), // 打包后的目录
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 正则表达式，匹配.js文件
                exclude: /node_modules/, // 排除node_modules目录
                use: {
                    loader: 'babel-loader', // 使用babel-loader
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', // 使用环境适配插件
                                {
                                    targets: "> 0.25%, not dead", // 目标浏览器环境
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
};