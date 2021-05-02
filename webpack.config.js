const path = require('path');

module.exports = {
  resolve:{
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false 
    } ,
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:"development",
  devServer:{
    port:2002,
    contentBase: path.join(__dirname, 'dist')
  }
};