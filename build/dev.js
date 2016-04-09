var path = require('path')
var config = require('./base');

module.exports = Object.assign({}, config, {
    entry: './dev/index.js',
    output: {
      path: path.resolve(__dirname, 'dev'),
      publicPath: '/dev/',
      filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    devtool: '#eval-source-map'
});
