const path = require("path");

module.exports = {
    entry: './index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,            // for all .js files
                exclude: /node_modules/,  // ignore node_modules
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    mode: "development"
};
