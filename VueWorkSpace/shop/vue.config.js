module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': '@/api',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}