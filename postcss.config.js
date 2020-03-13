module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 667, //视窗的高度，对应的是我们设计稿的高度，（也可以不配置）
      unitPrecision: 3, // 指定 "px" 转换为视窗单位值的小数位数 （很多时候无法整除）
      viewportUnit: 'vw',// 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore',], // 指定不需要转换的类
      minPixelValue: 1, // 小鱼或者等于 1px 不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中转换 px
      // exclude: [/TabBar/,/NavBar/] // 排除不需要转换的 vue 文件
    }
  }
}

// 1.在js中使用正则：/正则相关规则/
// 2.exclude 中存放的元素必须是正则表达式
// 3.按照排除的文件写对应的正则：
// 正则的规则：
// 1> ^abc： 表示匹配的内容，必须以什么内容开头（以abc开头）
// 2> abc$： 表示匹配的内容，必须以什么内容结尾（以abc结尾）
