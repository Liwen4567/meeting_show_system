const {
  override,
  fixBabelImports,
  overrideDevServer,
  watchAll
} = require('customize-cra');


const devServerConfig = () => config => {
  return {
    ...config,

    compress: true,
    proxy: {
      '/api': {
        //target: 'http://202.202.43.92/api/',//发布用 
        target: 'http://120.24.93.68:8080/',//测试用
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      }
    }
  }
}

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),

  ),
  devServer: overrideDevServer(
    devServerConfig(),
    watchAll()
  )
}