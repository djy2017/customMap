<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {ipcRenderer} from 'electron'
  export default {
    name: 'my-electron-vue',
    watch: {
      '$route' (to, from) {
        if (to.name === 'login') {
          ipcRenderer.send('clientLogout')
        } else {
          ipcRenderer.send('clientLogin')
        }
      }
    }
  }
</script>

<style>
  /* CSS */
  html {
    color: blueviolet
  }
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
  input,button {
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
  }
  input::-webkit-input-placeholder{
    color: green
  }
</style>
