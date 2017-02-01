var path = require('path'),
	webpack = require('webpack'),
	debug = process.env.NODE_ENV !== "prodution";

const config = {
	context: __dirname + "/app_src",
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/main.js",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties']
				}
			}
		]
	},
	output: {
		path: __dirname + "/app_src/js",
		filename: "bundle.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
	] 
};

module.exports = config;