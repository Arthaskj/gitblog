[参考地址](<https://cn.vuejs.org/>)

#### Vue生命周期

![1741752219-59c9b774a4ccf_articlex](assets/1741752219-59c9b774a4ccf_articlex.png)

#### 计算属性

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})

methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

> 我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。
>
> 使用computed在下次访问reversedMessage时，只要message没有变化，则直接返回上次计算的值，使用methods则每次都会重新计算，这里使用缓存效果更好



#### 侦听器

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  watch: {
    // 计算属性的 getter
    message: function (val) {
      // `this` 指向 vm 实例
      console.log(val)
    }
  }
})
```

> 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
>
> 当监听的元素发生改变时触发



#### $emit

> 子组件可以通过调用内建的 [**$emit** 方法](https://cn.vuejs.org/v2/api/#vm-emit) 并传入事件名称来触发一个事件：

```js
<button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>
```

有了这个 `v-on:enlarge-text="postFontSize += 0.1"` 监听器，父级组件就会接收该事件并更新 `postFontSize` 的值。