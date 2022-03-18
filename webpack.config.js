const path = require('path');

const clientPath = path.join(__dirname, 'src');
const publicPath = path.join(__dirname, 'public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: clientPath,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    static: {
      directory: publicPath,
      publicPath: '/',
      watch: true
    }
  },
  stats: 'summary',
  performance: {
    hints: false
  }
};
