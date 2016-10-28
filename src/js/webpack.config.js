var webpack = require("webpack")
var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  })
];

if (process.env.NODE_ENV == 'production') {
  plugins.push( new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }))
}

module.exports = {
  entry: "./index.js",
  output: {
    filename: "../static/js/bundle.js"
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  },
  plugins: plugins,
}