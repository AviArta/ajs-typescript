import { resolve as _resolve } from 'node:path';
 
import HtmlWebPackPlugin from 'html-webpack-plugin';

export const entry = './src/index.ts';
export const resolve = {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
};
export const output = {
    // eslint-disable-next-line no-undef
    path: _resolve(__dirname, 'dist'),
};
export const module = {
    rules: [
        {
            test: /\.(?:js|ts)$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader',
            },
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                },
            ],
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        }
    ],
};
export const plugins = [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
    })
];
