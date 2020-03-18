const path = require('path')

module.exports = {
  lintOnSave: false,
  // 将examples目录添加为新的页面
  pages: {
    index: {
      // page的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('./examples')
      }
    }
  }
}
