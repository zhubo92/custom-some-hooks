# custom-some-hooks

<div align="center" style="margin-bottom: 20px;">
  A high-quality & reliable Vue Hooks library.
</div>

```shell
npm i custom-some-hooks
```
## 在 vue3 项目中使用
注册指令方式：
```js
// main.js
import { createApp } from 'vue';
// 引入
import {useResize} from "custom-some-hooks";

const app = createApp(App);
// 注册
app.use(useResize);
```
```vue
<script setup>
  // 大小变化回调函数
  const cb = ({width, height}) => {
    // 逻辑
    console.log(width, height);
  }
</script>

<template>
  <!-- 通过 v-resize 指令监听元素大小变化 -->
  <div id="home" v-resize="cb">
    Home
  </div>
</template>

<style>
  #home {
    width: 200px;
    height: 100px;
    border: 1px solid #2c3e50;
    resize: both;
    overflow: hidden;
  }
</style>
```
组件内引入 hooks 方式
```vue
<script setup>
import {onMounted} from "vue";
import {useResize} from "custom-some-hooks";

onMounted(() => {
  // hooks 方式使用
  useResize(document.getElementById("home"), cb);
});

// 大小变化回调函数
const cb = ({width, height}) => {
  // 逻辑
  console.log(width, height);
}
</script>

<template>
  <div id="home">
    Home
  </div>
</template>

<style>
#home {
  width: 200px;
  height: 100px;
  border: 1px solid #2c3e50;
  resize: both;
  overflow: hidden;
}
</style>
```
