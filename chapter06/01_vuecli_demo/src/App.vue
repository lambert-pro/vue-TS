<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// 1.使用ES6语法导一个SFC格式的HelloWorld组件
// import HelloWorld from './components/HelloWorld.vue'

//已经在vue.config.js中设置了路径别名
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // 2.注册局部组件
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
