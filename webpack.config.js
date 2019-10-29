const path 				   = require('path');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');

module.exports = {
	entry: {
   		index: ['babel-polyfill', path.resolve(__dirname, './src/js/index.js'), path.resolve(__dirname, './src/css/styles.less')],
 	},
	output: {
		path: path.resolve(__dirname, './dist'),
        filename: 'js/bundle.js'	
	},
	devServer: {
		contentBase: './dist'
	},
	devtool: 'cheap-module-eval-sourcemap',
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './src/index.html',
			hmr: true
		}),
		new MiniCssExtractPlugin({
		      publicPath: path.resolve(__dirname, './dist'),
		      filename: 'css/styles.css',
		      template: './src/css/styles.css',
		      ignoreOrder: false // Enable to remove warnings about conflicting order
		}),
		new CopyWebpackPlugin([{
			from:'./src/img',
			to:'img'
		}])
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}	
		},
		{
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { url: false, sourceMap: true } },
                { loader: 'less-loader', options: { sourceMap: true } }
            ],
        }
     ]
	}
};