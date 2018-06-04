<template>
  <div>
    page1
    <input @change="showfile($event)" type="file">
    <iframe id="iframe" width="100%" height="50%" src="" frameborder="0"></iframe>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  name: 'page1',
  methods: {
    showfile (e) {
      console.log(e.target)
      let url = window.URL.createObjectURL(e.target.files[0])
      console.log(url)
      // document.getElementById('iframe').src = url
      // 版本不支持
    }
  }
}
</script>
