<template>
  <div id="app">
    <router-link to="/">
      <a-button type="primary">首页</a-button>
    </router-link>
    <router-link to="/about">
      <a-button>关于</a-button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'ant-design-vue'
Vue.component(Button.name, Button)

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
