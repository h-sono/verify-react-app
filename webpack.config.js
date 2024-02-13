const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'dev';
const mode = {
  dev: 'development',
  stg: 'production',
  prd: 'production'
}[env];

module.exports = {
  mode: mode,
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'src/webpack/'),
    filename: 'bundle-by-webpack.js'
  },
  module: {
    rules: [
      {
        // .js、.tsxファイルをwebpackの対象とする。
        test: /\.(js|tsx)$/,
        // 除外するファイル・ディレクトリを指定。
        exclude: /node_modules/,
        // 使用するトランスパイラを指定。
        use: 'babel-loader'
      },
      {
        // cssファイルをwebpackの対象とする。
        test: /\.css$/,
        // cssスタイルを適用するためのローダーを指定。
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // htmlのテンプレートファイルを指定。
      template: path.join(__dirname, './public/index.html'),
      // 出力されるhtmlファイルの名称。
      filename: 'index.html'
    })
  ]
};
