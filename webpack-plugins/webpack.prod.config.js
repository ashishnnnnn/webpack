const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        index: './index.js',
        explore: './explore.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebPackPlugin({
            template: "./index.html",
            chunks: ["index"],
            filename: "index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./explore.html",
            chunks: ["explore"],
            filename: "explore.html",
            inject: 'body',
            minify: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./asset"),
                    to: path.resolve(__dirname, "dist", "./asset")
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(webp|png)$/,
                type: "asset/resource"
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
};
