const process = require('process');
const rootPath = process.cwd();

let setting = {
  entry: rootPath + '/src/client/js/',
  output: rootPath + '/dist/',
  publicPath: '/dist/',
  author: 'tianshengjie',
};

module.exports = setting;