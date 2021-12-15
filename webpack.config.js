const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: "./dist",
        hot: true,
        open: true,
        compress: true,
        https: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "inline-source-map",
    plugins: [],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};