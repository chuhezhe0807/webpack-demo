module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  optimization: {
    // sideEffects 需要在optimization中显示开启并在项目的package.json中配置sideEffects才能生效
    // package.json中的sideEffects: true表示所有模块都有副作用，false表示所有模块没有副作用
    // 如果明确知道某几个模块是有副作用的，可以声明package.json为有副作用的文件组成的数组，如：sideEffects: ['src/module1.js', 'src/module2.js']
    sideEffects: true,
    // 模块只导出被使用的成员
    // usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    // concatenateModules: true,
    // 压缩输出结果
    // minimize: true,
  }
}
