import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'sentianceFirehose'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
      { test: /\.json$/, exclude: /(node_modules|bower_components)/, 'loader': 'json-loader' }
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'  
  }
};