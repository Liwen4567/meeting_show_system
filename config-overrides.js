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
        target: 'http://120.24.93.68:8080/', //目标地址，记得替换
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