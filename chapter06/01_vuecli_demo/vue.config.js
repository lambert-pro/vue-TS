const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir); //__dirname获取当前文件所在路径
}

module.exports = {
  chainWebpack: (config) => {
    // 1.为路径起别名
    config.resolve.alias
        // 2.@别名代表的路径是：指向当前项目的src目录
        .set('@', resolve('src'))
  }

}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app' : '/',

})


