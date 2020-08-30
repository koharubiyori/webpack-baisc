const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin(), // 清理上一次的build文件
    new OptimizeCSSPlugin({   // 优化css文件(压缩等操作)
      cssProcessorOptions: {
        safe: true
      }
    })
  ]
})