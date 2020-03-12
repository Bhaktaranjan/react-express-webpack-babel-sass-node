const HtmlwebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const htmlPlugin = new HtmlwebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'application.js'
    },
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};