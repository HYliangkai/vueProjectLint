// tips: 要想下段代码不进行格式化操作， 用  /* prettier-ignore */ 进行注释
module.exports = {
  printWidth: 100, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: false, //句末使用分号
  singleQuote: true, //使用单引号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'all', //多行时尽可能打印尾随逗号
  bracketSpacing: false, //是否在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  arrowParens: 'always', //‘always’单参数箭头函数参数周围使用圆括号-eg: (x) => x  | 'avoid‘:不用
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', // 指定在 Markdown 文本的换行方式。选项：`always`──超过 print-width 时换行、 `never`──不换行、 `preserve`──不进行任何操作，保持原样
  htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
  vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
  endOfLine: 'lf', //结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
  singleAttributePerLine: false, //元素的属性每个占一行 --> false ：只有太长才会换行
}
