const config = require('../config.json')
const webpack = require('webpack')
const ZipWebpackPlugin = require('zip-webpack-plugin')

let {nativeConfig} = require('./webpack.base.conf.js')

nativeConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
  new ZipWebpackPlugin({
    path: '../',
    filename: config.packName + '.zip'
  })
)

module.exports = nativeConfig
