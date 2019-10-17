/* eslint-disable */
const path = require('path');
const Fiber = require('fibers');

const htmlWebpackPlugin = require("html-webpack-plugin");
const htmlBeatifyWebpackPlugin = require("html-beautify-webpack-plugin");
const DynCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const galleryConfig = {
    mode: "development",
    entry: "./src/index.tsx",
    plugins: [
        new htmlWebpackPlugin({
            templateParameters: {
                'title': 'Webpack App'
            },
            template: './src/index.ejs'
        }),
        new htmlBeatifyWebpackPlugin(),
        new DynCdnWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(s?)css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            fiber: Fiber
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?.*$|$)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './style/fonts'
                    }
                }]
            },
            {
                test: /\.(svg|jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './style/images'
                    }
                }]
            }
        ]
    }
}

module.exports = galleryConfig;