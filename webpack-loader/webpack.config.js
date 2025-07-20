const path = require("path");

module.exports = {
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
    module: {
        rules: [
            {
                test: /\.(webp|png)$/,
                type: "asset/resource"
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    mode: "development"
};
