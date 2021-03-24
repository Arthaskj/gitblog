
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