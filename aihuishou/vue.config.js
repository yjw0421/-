const px2vw = require('postcss-px-to-viewport')
module.exports={
    css: {
        loaderOptions: {
          postcss: {
            plugins: [new px2vw({
              unitToConvert: 'px',
              //设计稿的视口宽度
              viewportWidth: 375,
              unitPrecision: 5,
              propList: ['*'],
              viewportUnit: 'vw',
              fontViewportUnit: 'vw',
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              //忽略某些文件夹下的文
              exclude: /node_modules/,
              include: undefined,
              landscape: false,
              landscapeUnit: 'vw',
              landscapeWidth: 568
            })]
            // 这里的选项会传递给 postcss-loader
          }
        }
      }
}