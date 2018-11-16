<template>
  <div id="app">
    <a-calendar :value="value" @select="onSelect" @panelChange="onPanelChange" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Calendar } from 'ant-design-vue'
import moment from 'moment'

Vue.component(Calendar.name, Calendar)

export default {
  name: 'app',
  data() {
    return {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
      value1: moment('2017-01-25'),
    }
  },
  methods: {
    onSelect(value) {
      this.value = value
      this.selectedValue = value
    },
    onPanelChange (value) {
      this.value = value
    }
  }
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
