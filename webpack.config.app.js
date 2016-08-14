var webpack = require('webpack');
// Webpack Plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var root = __dirname;


module.exports = {
	entry: { 'app': './src/main.ts' },
	output: {
		path: root + '/dist',
		filename: 'js/[name].[hash].js',
		chunkFilename: '[id].[hash].chunk.js'
	},
	resolve: {
		root: root,
		extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
		alias: {
			'app': 'src/app',
			'common': 'src/common'
		}
	},
	module: {
		preLoaders: [{ test: /\.ts$/, loader: 'tslint' }],
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts', 'angular2-template-loader'],
				exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
			},
			{ test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=fonts/[name].[hash].[ext]?' },
			{ test: /\.json$/, loader: 'json' },
			{
				test: /\.css$/,
				exclude: root + '/src/app',
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
			},
			{ test: /\.css$/, include: root + '/src/app', loader: 'raw!postcss' },
			{ test: /\.html$/, loader: 'raw' }
		],
		postLoaders: [],
		noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/public/index.html',
			chunksSortMode: 'dependency'
		}),
		new ExtractTextPlugin('css/[name].[hash].css', { disable: false }),
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: require('./src/public/js/vendor-manifest.json')
		}),
		new webpack.NoErrorsPlugin(),

		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{
			from: root + '/src/public'
		}])
	]
}
