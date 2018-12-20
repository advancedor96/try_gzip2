// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

module.exports = {
  baseUrl: './',
  productionSourceMap: false
  // configureWebpack: {
  //   plugins: [
  //     new CompressionWebpackPlugin({
  //       filename: '[path].gz[query]', // 第2版的compression-webpack-plugin 要把 asset 改成 filename
  //       algorithm: 'gzip',
  //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //       threshold: 10240,
  //       minRatio: 0.8
  //     })
  //   ]
  // }

}
