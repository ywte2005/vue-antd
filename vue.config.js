module.exports = {
  baseUrl: '/',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8360/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  lintOnSave: undefined
}