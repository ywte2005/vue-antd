module.exports = {
  baseUrl: '/',

  devServer: {
    proxy: {
      '/api': {
        target: 'http://www.example.org',
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