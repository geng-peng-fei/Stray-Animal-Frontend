const { defineConfig } = require('@vue/cli-service')
let proxyObj = {}
proxyObj[''] = {
  ws: false,
  target: 'http://localhost:8081',
  changeOrigin: true,
  pathReWrite: {
    '^': ' '
  }
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8082,
    // proxy: 'http://localhost:8081'
    proxy: proxyObj
  },
  lintOnSave: false
})