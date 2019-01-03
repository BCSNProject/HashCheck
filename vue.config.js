
module.exports = {
  outputDir: 'docs',
  baseUrl: '/crash_analysis',
  productionSourceMap: false,
  configureWebpack:  {
    output: {
      globalObject: 'this'
    }
  }
}