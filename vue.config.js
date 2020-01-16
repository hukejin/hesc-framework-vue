module.exports = {
  // 开发环境配置
  devServer: {
    port: 8888, // 设置开发环境默认启动端口
    // 通过代理解决调试中的跨域问题,将/test代理到以下服务器，方便开发测试，生成环境部署时可忽略，这个只对开发调试管用
    /**
    proxy: {
      '/api': {
        target: 'http://192.168.0.108:8080/api/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''// 将路径里的/test替换为空字符串
        }
      },
    },
     */
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 如果你的应用被部署在 https://www.my-app.com/framework/，则设置 publicPath 为 /framework/
  publicPath: '/framework/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录 Default: 'dist'
  outputDir: 'framework',
}
