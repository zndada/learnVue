/**
 * Created by zmw on 2017/9/1.
 */
let {nativeConfig} = require('./webpack.base.conf.js')

const webpack = require('webpack')

nativeConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  })
)

module.exports = nativeConfig
