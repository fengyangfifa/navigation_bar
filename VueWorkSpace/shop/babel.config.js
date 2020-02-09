module.exports = {
  presets: [
    '@vue/app'
  ],
  // 按需导入vant的样式
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
