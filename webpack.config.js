// combined boilerplate from the following two:
// https://github.com/chibat/chrome-extension-typescript-starter/blob/master/webpack/webpack.common.js
// https://github.com/sivertschou/react-typescript-chrome-extension-boilerplate/blob/master/webpack.config.js

const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = path.join(__dirname, "src");

module.exports = {
    entry: {
      popup: path.join(srcDir, 'popup.tsx'),
      options: path.join(srcDir, 'options.tsx'),
      background: path.join(srcDir, 'background.ts'),
      content_script: path.join(srcDir, 'content_script.tsx'),
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks: "initial",
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
    },
    plugins: [
      new CopyPlugin({
        patterns: [{ from: "public", to: "." }],
      }),
    ],
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: "./dist",
    },
};
