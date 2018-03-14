<template>
  <div>
    <header>this is {{page}} page</header>
    <div>home page</div>
  </div>
</template>
<style scoped>
  header {
    color: green;
  }
  div {
    height: 500px;
    width: 100%;
  }
</style>
<script>
export default {
  name: 'home',
  data () {
    return {
      page: 'home'
    }
  }
}
</script>

