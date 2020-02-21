module.exports = {
  configureWebpack: {
    resolve: {
      // 目录别名
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
    // 转发、代理
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
  },
  css: {
    // 适配 px转换为rem
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  }
}