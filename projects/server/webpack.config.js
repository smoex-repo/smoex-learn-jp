// 引入css 单独打包插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')
// 设置生成css 的路径和文件名，会自动将对应entry入口js文件中引入的CSS抽出成单独的文件
var { CheckerPlugin } = require('awesome-typescript-loader')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
    libraryTarget: 'commonjs2',
  },
  target: 'node',

  // Enable sourcemaps for debugging webpack's output.
  // devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['scss', 'css', '.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: [nodeExternals({ modulesFromFile: true })],
  optimization: {
    // async 异步(import()语法) initial(同步import xxx from 'xxx') all(所有)
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 50000,
    //   minChunks: 1,
    // }
  }
}
