const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HWP({
            title:'TODO List',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|JPE?G|gif|bmp|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource',
            },
        ],
    },
}