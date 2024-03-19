const nodeExternals = require("webpack-node-externals");
const path = require('path');

module.exports = {
    mode: "development",
    target: "node",
    externals: [nodeExternals()],
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配以 .js 结尾的文件
                exclude: /node_modules/, //排除 node_modules 資料夾
                use: 'babel-loader'
            }
        ]
    }
};