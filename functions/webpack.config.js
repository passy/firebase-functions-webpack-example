'use strict';

const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'lib/index.js',
        libraryTarget: 'this',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.purs$/,
                loader: 'purs-loader',
                options: {
                    pscPackage: true,
                    psc: 'psa',
                    bundle: true,
                },
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.purs' ],
    },
    externals: [nodeExternals()]
};
