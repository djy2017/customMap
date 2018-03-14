<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <div id="login">
      <div>
        <input placeholder="用户">
      </div>
      <div>
        <input placeholder="密码">
      </div>
      <div>
        <button><router-link to="/index">login</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
  img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
  #login {
    width: 100%; 
  }
  #login div {
    width: 500px;
    margin: 10px auto;
  }
  #login div input {
    display: block;
    width: 100%;
    height: 30px;
  }
  #login div button {
    display: block;
    width: 100px;
    height: 30px;
    margin: 0 auto;
  }
  #login div button a {
    text-decoration-line: none
  }
</style>
