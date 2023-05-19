module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['vue', '@typescript-eslint', 'chzky'],
  settings: {},
  //在extends里的会直接执行规则里面所有内容
  extends: [],
  rules: {
    // 变量名和函数名称使用snake_case
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: ['variableLike'],
        format: ['snake_case'],
        trailingUnderscore: 'allowSingleOrDouble',
      },
    ],
    //prop数据应该使用大驼峰命名
    'chzky/vue-prop-name-check': 1,
    //method方法应该使用蛇形命名
    'chzky/vue-method-name-check': 1,
    //计算属性前面加上`comp_`作为前缀
    'chzky/vue-computed-name-check': 1,
    //自定义组件使用大驼峰命名
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    //类名和属性使用单串式命名
    'vue/attribute-hyphenation': [2, 'always'],
    //不允许异步的计算属性
    'vue/no-async-in-computed-properties': 2,
    //不允许计算属性改变外部值,要想改只能复制到内部修改
    'vue/no-side-effects-in-computed-properties': 2,
    //不能使用[v-bind]代替[:]
    'vue/v-bind-style': [2, 'shorthand'],
    //不能使用[v-on]代替[@]
    'vue/v-on-style': ['error', 'shorthand'],
    //template不能使用this
    'vue/this-in-template': [2, 'never'],
    //禁止同时出现v-for和v-if
    'vue/no-use-v-if-with-v-for': [
      2,
      {
        allowUsingIterationVar: false,
      },
    ],
    //消除单闭合标签警告问题
    'vue/html-self-closing': [
      2,
      {
        html: {
          // 对于Html单标签必须自闭合
          void: 'always',
          // 对于Html普通元素不使用自闭合标签
          normal: 'never',
          //组件如果里面没有内容必须自闭合
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    //script区域的位置顺序
    'vue/order-in-components': [
      2,
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    //template元素属性的排列顺序
    'vue/attributes-order': [
      2,
      {
        order: [
          'CONDITIONALS', //[render] such as v-if]
          [
            'SLOT',
            'DEFINITION',
            'LIST_RENDERING',
            'CONTENT',
            'TWO_WAY_BINDING',
            'RENDER_MODIFIERS',
            'OTHER_DIRECTIVES',
          ], // v-any
          ['GLOBAL', 'ATTR_STATIC', 'UNIQUE'], // props
          'ATTR_SHORTHAND_BOOL', // once-prop
          'ATTR_DYNAMIC', //v-bind
          'EVENTS', // @-any
        ],
        alphabetical: false,
      },
    ],
  },
}
