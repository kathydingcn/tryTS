const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/index.ts'),
    devtool: 'source-map',
    output:{
        filename:'output.js',
        path: path.join(__dirname, './dist')
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
        ]
    },
    resolve:{
        extensions:['.tsx','.js','.ts']
    },
    plugins:[
        new HtmlPlugin(),
    ]

   
}