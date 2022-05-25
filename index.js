// https://prettier.io/docs/en/options.html

module.exports = {
  // 超过最大值换行
  printWidth: 100,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // tab缩进字符数
  tabWidth: 2,
  // 去掉代码结尾的分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 在jsx中把'>' 是否单独放一行
  jsxBracketSameLine: true,
  // 在jsx中使用单引号代替双引号
  jsxSingleQuote: false,
  // 在对象或数组最后一个元素后面是否加逗号（不添加）
  trailingComma: 'es5',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // (x) => {} 箭头函数参数只有一个时要有小括号。
  arrowParens: 'avoid',
  // 不让HTML中的 > 多行显示
  bracketSameLine: false,
  // 是否格式化嵌入到JS中的html标记的代码段或者Markdown语法 <auto|off> - auto 格式化
  embeddedLanguageFormatting: 'auto',
  // 换行符使用 lf 结尾  <lf|crlf|cr|auto>
  endOfLine: 'lf',
  // 根据显示样式决定 html 要不要折行 <css|strict|ignore>"
  htmlWhitespaceSensitivity: 'css',
  // 当requirePragma参数为true时，此参数为true将向@format标记后面添加一个换行符
  insertPragma: false,
  // 当Markdown文本超过printWidth时是否换行 <always|never|preserve> - preserve 保留用户输入的情况
  proseWrap: 'preserve',
  // 对象key是否使用引号 <as-needed|consistent|preserve> - preserve 保留用户输入的情况
  quoteProps: 'preserve',
  // 若为true，文件顶部加了 /*** @prettier */或/*** @format */的文件才会被格式化
  requirePragma: false,
  // vue文件的script标签和Style标签下的内容需要缩进
  vueIndentScriptAndStyle: false,
}
