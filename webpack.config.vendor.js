var webpack = require('webpack');
// Webpack Plugins
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = __dirname;
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
	entry: {
		vendor: [
			// polyfill
			'./node_modules/es6-shim',
			'./node_modules/zone.js/dist/zone',
			'./node_modules/reflect-metadata',
			'./node_modules/ts-helpers',
			'./node_modules/bootstrap',
			// Angular 2
			'./node_modules/rxjs',
			'./node_modules/@angular/platform-browser',
			'./node_modules/@angular/platform-browser-dynamic',
			'./node_modules/@angular/core',
			'./node_modules/@angular/common',
			'./node_modules/@angular/http',
			'./node_modules/@angular/router'
		]
	},
	output: {
		path: root + '/src',
		filename: 'public/js/[name].js',
		library: '[name]'
	},
	resolve: {
		extensions: ['', '.js', '.ts']
	},
	module: {
		preLoaders: [{ test: /\.ts$/, loader: 'tslint' }],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },
      {
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file?name=fonts/[name].[hash].[ext]?'
			},
      {
				test: /\.json$/,
				loader: 'json'
			},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      {
				test: /\.css$/,
				loader: 'raw!postcss'
			},
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss!sass')
      },
      {
				test: /\.scss$/,
				loader: 'raw!postcss!sass'
			},
      {
				test: /\.html$/,
				loader: 'raw'
			}
    ],
    postLoaders: [],
    noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/, /LICENSE/, /README.md/]
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			comments: false,
			compress: true,
			sourceMap: true
		}),
		new webpack.DllPlugin({
			path: './src/public/js/[name]-manifest.json',
			name: "[name]"
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		})
	]
}
