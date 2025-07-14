// webpack.config.js
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
    entry: './js/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Development' }),
        new ForkTsCheckerWebpackPlugin({ async: false })
        // no CleanWebpackPlugin: use output.clean instead
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true // ← built‑in since webpack 5
    }
};
//# sourceMappingURL=webpack.config.js.map