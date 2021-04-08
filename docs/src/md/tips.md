
# Tips

## require，import区别？
> require/exports 出生在野生规范当中，什么叫做野生规范？即这些规范是 JavaScript 社区中的开发者自己草拟的规则，得到了大家的承认或者广泛的应用。比如 CommonJS、AMD、CMD 等等。import/export 则是名门正派。TC39 制定的新的 ECMAScript 版本，即 ES6（ES2015）中包含进来。
>
> 
>
> 1、CommonJS 还是 ES6 Module 输出都可以看成是一个具备多个属性或者方法的对象；
>
> 2、default 是 ES6 Module 所独有的关键字，export default fs 输出默认的接口对象，import fs from 'fs' 可直接导入这个对象；
>
> 3、ES6 Module 中导入模块的属性或者方法是强绑定的，包括基础类型；而 CommonJS 则是普通的值传递或者引用传递。
>
> 
>
> CommonJS 作为 Node.js 的规范，一直沿用至今。由于 npm 上 CommonJS 的类库众多，以及 CommonJS 和 ES6 之间的差异，Node.js 无法直接兼容 ES6。所以现阶段 require/exports 任然是必要且实必须的。出自 ES6 的  import/export 相对就晚了许多。被大家所熟知和使用也是 2015 年之后的事了。 这其实要感谢 babel（原来项目名叫做 6to5，后更名为 babel） 这个神一般的项目。由于有了 babel 将还未被宿主环境（各浏览器、Node.js）直接支持的 ES6 Module 编译为 ES5 的 CommonJS —— 也就是 require/exports 这种写法 —— Webpack 插上 babel-loader 这个翅膀才开始高飞，大家也才可以称 " 我在使用 ES6！ "
>
> 
>
> 这也就是为什么前面说 require/exports 是必要且必须的。因为事实是，目前你编写的 import/export 最终都是编译为 require/exports 来执行的。



# nexttick什么时候用

> Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。
> 当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。




# 严格模式（Strict Mode）
它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。
"use strict" 的目的是指定代码在严格条件下执行。
严格模式下不能使用未声明的变量。

消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。
"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。



# 闭包（Closures）

**闭包**就是**可以访问另一个函数作用域中的变量函数**。

```js
function A(){
var money=10000;
    function set(){
money=money+10;
return money
}
function get(){
    money=money-10;
return money;
}
return {
'set':set,
'get':get
}
}
console.log(A.set())
```

优点：保护函数内的**变量安全**,加强了**封装性**，变量可以**一直存储在内存**中。

缺点：处理不好容易造成`内存泄漏`



# 异步编程（Async programming）和回调（callbacks）

JavaScript`synchronous`默认是，并且是`single threaded`。这意味着代码无法创建新线程并不能并行运行。

每一行代码都是依次执行的，这种执行流程也称为`Blocking Code/Mode`。

回调无处不在，不仅在DOM事件中使用。

一个常见的示例是使用计时器：

```js
setTimeout(() => {

  // runs after 2 seconds

}, 2000)
```



# 循环（Loops）和作用域（Scope）

作用域，就是变量或者是函数能作用的范围。除了函数中定义的变量之外，都是全局作用域。

```js
//经典例子
for(var i=0;i<4;i++){
    setTimeout(function(){
    	console.log(i);
    },200);
}
//4 4 4 4

//利用函数形成函数作用域
for(var i=0;i<4;i++){
    (function(j){
            setTimeout(function(){
    	console.log(j);
    },200);
    })(i)
}
//0 1 2 3

//利用let形成块级作用域
for(leti=0;i<4;i++){
    setTimeout(function(){
    	console.log(i);
    },200);
}
//0 1 2 3
```

## 作用域链
当查找变量的时候，会先从当前作用域的变量对象中查找，如果没有找到，就会从父级作用域(上层环境)的变量对象中查找，一直找到全局作用域的变量对象，也就是全局对象。这样由多个作用域的变量对象构成的链表就叫做作用域链。它由当前环境与上层环境的一系列变量对象组成，保证了当前执行环境对符合访问权限的变量和函数的有序访问。



