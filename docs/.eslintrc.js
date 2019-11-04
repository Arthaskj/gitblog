/**
 * AlloyTeam ESLint 规则
 *
 * 包含所有 ESLint 规则
 * 使用 babel-eslint 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
      // experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    // node: true,
    // commonjs: true,
    es6: true
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  rules: {
    'no-compare-neg-zero': 2,//禁止与 -0 进行比较
    'no-cond-assign': 2,//禁止条件表达式中出现赋值操作符
    // 'no-console':1,//禁用 console
    'no-constant-condition': 2,    //禁止在条件中使用常量表达式
    'no-control-regex': 2,    //禁止在正则表达式中使用控制字符
    'no-debugger': 2,    //禁用 debugger
    'no-dupe-args': 2,    //禁止 function 定义中出现重名参数
    'no-dupe-keys': 2,    //禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2,    //禁止出现重复的 case 标签
    'no-empty': 2,    //禁止出现空语句块
    'no-empty-character-class': 2,    //禁止在正则表达式中使用空字符集
    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    'no-ex-assign': 2,    //禁止对 catch 子句的参数重新赋值
    'no-extra-boolean-cast': 2,    //禁止不必要的布尔转换
    'no-extra-semi': 2,    //禁止不必要的分号
    'no-func-assign': 2,    //禁止对 function 声明重新赋值
    'no-inner-declarations': 2,    //禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 2,    //禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2,    //禁止在字符串和注释之外不规则的空白
    'no-obj-calls': 2,    //禁止把全局对象作为函数调用
    'no-regex-spaces': 2,    //禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 2,    //禁用稀疏数组
    'no-unexpected-multiline': 2,    //禁止出现令人困惑的多行表达式
    'no-unreachable': 2,    //禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-finally': 2,    //禁止在 finally 语句块中出现控制流语句
    'no-unsafe-negation': 2,    //禁止对关系运算符的左操作数使用否定操作符
    'use-isnan': 2,    //要求使用 isNaN() 检查 NaN
    'valid-typeof': 2,    //强制 typeof 表达式与有效的字符串进行比较


    'no-case-declarations': 2,    //不允许在 case 子句中使用词法声明
    'no-empty-pattern': 2,    //禁止使用空解构模式
    'no-fallthrough': 2,    //禁止 case 语句落空
    'no-global-assign': 2,    //禁止对原生对象或只读的全局对象进行赋值
    'no-octal': 2,    //禁用八进制字面量
    'no-redeclare': 2,    //禁止多次声明同一变量
    'no-self-assign': 2,    //禁止自我赋值
    'no-unused-labels': 2,    //禁用出现未使用过的标
    // 'no-useless-escape':2,    //禁用不必要的转义字符

    //ES6
    'constructor-super': 2,    //要求在构造函数中有 super() 的调用
    'no-class-assign': 2,    //禁止修改类声明的变量
    'no-const-assign': 2,    //禁止修改 const 声明的变量
    'no-dupe-class-members': 2,    //禁止类成员中出现重复的名称
    'no-new-symbol': 2,    //禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 2,    //禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'require-yield': 2,    //要求 generator 函数内有 yield

    //Stylistic Issues
    'no-mixed-spaces-and-tabs': 2,    //禁止空格和 tab 的混合缩进
    'indent': ["error", 2, { "SwitchCase": 1 }],

    //Variables
    'no-delete-var': 2,    //禁止删除变量
    // 'no-undef':2,    //禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    // 'no-unused-vars':2,    //禁止出现未使用过的变量
    "space-infix-ops": 2, // 操作符前后需要加空格
    "no-multi-spaces": 1,//不能用多余的空格
    "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "array-bracket-spacing": [2, "never"],//是否允许非空数组里面有多余的空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "object-curly-spacing": [0, "never"],//大括号内是否允许不必要的空格
    "no-multiple-empty-lines": [1, { "max": 2 }],//空行最多不能超过2行
    "generator-star-spacing": 1,//生成器函数*的前后空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格

    "no-eq-null": 2,//禁止对null使用==或!=运算符

    "quote-props": [2, "as-needed", { "keywords": false }],//对象字面量中的属性名是否强制双引号


    // 注释前需要空行，注释后不需要空行
    "lines-around-comment": ["error", {
      "beforeBlockComment": true,
      "afterBlockComment": false,
      "beforeLineComment": false,
      "afterLineComment": false,
      "allowBlockStart": true
    }],
    // 注释需要要空一格 eg: // 我是注释
    "spaced-comment": ["error", "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
      }
    }],

    'comma-spacing': 'error', // ',' 号前面不允许有空格
    "default-case": 'error', // switch语句中必须有default条件
    "dot-notation": ["error", { "allowKeywords": false }], // 不允许关键字出现在变量中
    "eqeqeq": "error", // 消除不安全类型的全等操作

    "space-before-function-paren": [0, "always"], // 不允许函数括号之间存在空格
    "max-params": ["error", 4], // 限制函数的最大参数个数
    "no-console": "warn",
    "no-alert": "error",
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    
    'keyword-spacing': ['error',{"before": true}],
    'space-before-blocks':'error',//强制在块之前使用一致的空格
    'arrow-spacing':'error',//强制箭头函数的箭头前后使用一致的空格
    'no-extra-parens':'error',//禁止不必要的括号
    'no-multi-spaces':'error',//禁止使用多个空格
    'no-useless-return':'error',//禁止多余的 return 语句
    'no-undef-init':'error',//禁止将变量初始化为 undefined
    'array-bracket-newline': [1, { "multiline": true }],//在数组开括号后和闭括号前强制换行
    'key-spacing':'error',//强制在对象字面量的属性中键和值之间使用一致的间距
  }
};
