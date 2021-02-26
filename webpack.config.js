const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        utilities: './src/utilities.ts',
        meta: './src/meta.ts'
    },
    output: {
		path: path.join(__dirname, "dist"),
        filename: 'TsLibrary.[name].js',
        library: ['TsLibrary', '[name]'],
        libraryTarget: 'umd',
        globalObject: 'this'
    },
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
    plugins:[
        new CleanWebpackPlugin()
    ]
}

