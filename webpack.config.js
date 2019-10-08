const path 				= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
		})
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
	    // {
     //        test: /\.css$/,
     //    	use: [
	    //       {
	    //         loader: MiniCssExtractPlugin.loader,
	    //         options: {
	    //             // you can specify a publicPath here
	    //             // by default it uses publicPath in webpackOptions.output
	    //             //publicPath: path.resolve(__dirname, './dist/css'),
	    //             hmr: process.env.NODE_ENV === 'development',
	    //             // if hmr does not work, this is a forceful method.
     //          		reloadAll: true
	    //         }
	    //     },
     //      	'css-loader'
     //      	]
     //    }
     ]
	}
};