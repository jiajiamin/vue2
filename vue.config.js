/*
 * @Author: your name
 * @Date: 2021-01-29 10:43:45
 * @LastEditTime: 2021-01-29 10:43:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue2\vue.config.js
 */
const path = require('path')
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
          .set('@', resolve('./src'))
          .set('@axios', resolve('./src/axios'))
  },
  devServer: {
    proxy: {
        '/api': {//代理api
            target: "http://192.168.17.210:8080/",// 席工
            changeOrigin: true,//是否跨域
            // ws: true, // proxy websockets
            pathRewrite: {//重写路径
                "^/api": ''//代理路径
            }
        }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // 第三方插件配置
  pluginOptions: {}
}