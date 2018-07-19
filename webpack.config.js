const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsLintWebpackPlugin = require('tslint-webpack-plugin');

module.exports = {
	entry: './app/ts/index.ts',
	mode: 'development',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|ttf|eot|otf)$/,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './app/index.html' }),
		new TsLintWebpackPlugin({ files: ['./app/ts/**/*.ts'] })
	]
};