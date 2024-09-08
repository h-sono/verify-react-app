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
  // 絶対パスを指定。プロジェクトのルートディレクトリ：__dirnameの後に続ける。
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'src/webpack/')
    // filename: 'bundle-by-webpack.js'
  },
	resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],  // 解決するファイル拡張子
    alias: {
      '@components': path.resolve(__dirname, 'src/components/*'),
      '@store': path.resolve(__dirname, 'src/store/*')
    }
  },
  module: {
    rules: [
      {
        // .js、.tsxファイルをwebpackの対象とする。
        test: /\.(js|tsx)$/,
        // 除外するファイル・ディレクトリを指定。
        exclude: /node_modules/,
        // 使用するコンパイラを指定。
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
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
