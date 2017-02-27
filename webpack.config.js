const path = require('path')

function resolve (pathname) {
  return path.resolve(__dirname, pathname)
}

module.exports = {
  entry: {
    'dist/zero-colors': resolve('./lib/index')
  },
  output: {
    filename: '[name].js',
    library: 'Color',
    libraryTarget: 'umd',
    path: resolve('./')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
