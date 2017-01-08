module.exports = {
  entry: './public/javascripts/app.js',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
				}
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
