const path = require('path');

module.exports = {
  entry: './src/index.js',
  watch: true,
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};