/**
 * Created by zmw on 2017/9/1.
 */
const webpack = require('webpack')
const pathTo = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

let entry = {}
let fileType

const config = require('../config.json')
const ASSERT_PATH = pathTo.resolve(__dirname, '..', 'dist')
const ASSERT_PUBLIC_PATH = `file:///Share/ULightApp/${config.packName}/`

function walk (dir) {
  dir = dir || '.'
  const directory = pathTo.join(__dirname, '..', 'src/', dir)
  fs.readdirSync(directory)
    .forEach((file) => {
      const fullpath = pathTo.join(directory, file)
      const stat = fs.statSync(fullpath)
      const extname = pathTo.extname(fullpath)
      if (stat.isFile() && (extname === '.vue' || extname === '.we')) {
        if (!fileType) {
          fileType = extname
        }
        if (fileType && extname !== fileType) {
          console.log('Error: This is not a good practice when you use ".we" and ".vue" togither!')
        }
        const name = pathTo.join(dir, pathTo.basename(file, extname))
        if (extname === '.vue') {
          let relative = pathTo.relative(__dirname, fullpath)
          entry[name] = pathTo.resolve(__dirname, relative) + '?entry=true'
        }
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        const subdir = pathTo.join(dir, file)
        walk(subdir)
      }
    })
}

walk()

const Plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: pathTo.resolve(__dirname, '..')
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true
  }),
  new webpack.BannerPlugin({
    banner: '// {"framework" : "Vue"} \n',
    raw: true,
    exclude: /(node_module)/
  }),
  new CopyWebpackPlugin([
    {
      from: pathTo.resolve(__dirname, '../', 'config.json'),
      to: pathTo.resolve(__dirname, '../', 'dist/'),
      ignore: ['.*']
    },
    {
      from: pathTo.resolve(__dirname, '../', 'favicon.png'),
      to: pathTo.resolve(__dirname, '../', 'dist/'),
      ignore: ['.*']
    }
  ])
]

exports.nativeConfig = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: ASSERT_PATH,
    publicPath: ASSERT_PUBLIC_PATH
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      entry: pathTo.resolve(__dirname, '../', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ttf(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'font/',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100,
              outputPath: 'img/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'ums-weex-loader'
      }
    ]
  },
  plugins: Plugins
}

exports.webConfig = {
  entry: entry,
  output: {
    filename: '[name].web.js',
    path: pathTo.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: Plugins
}
