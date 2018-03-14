<template>
  <div>
    test
    <button><router-link to="/">to login</router-link></button>
    <br>
    <div>
      <button><router-link to="/index/">home</router-link></button>
      <button><router-link to="/index/page1">page1</router-link></button>
      <button><router-link to="/index/page2">page2</router-link></button>
    </div>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<style scoped>
  div {
    background: #eee
  }
</style>

<script>
export default {
  name: 'index',
  data () {
    return {
      nn: 555
    }
  }
}
</script>
