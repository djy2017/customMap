<template>
  <div id="login-wrap">
    <div id="logo">
      <img src="~@/assets/logo.png" alt="electron-vue">
    </div>
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
    <div id="login-footer" >
      copyright@xxx
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'login'
  }
  const remote = require('electron').remote
  const Menu = remote.Menu
  const MenuItem = remote.MenuItem

  var menu = new Menu()
  menu.append(new MenuItem({ label: 'MenuItem1', click: function () { console.log('item 1 clicked') } }))
  menu.append(new MenuItem({ type: 'separator' }))
  menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))

  window.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    menu.popup(remote.getCurrentWindow())
  }, false)
</script>

<style scoped lang='less'>
  #login-wrap {
    height: 100%;
    display: flex;
    flex-direction: column
  }
  #logo {
    -webkit-app-region: drag;
    img {
      display: block;
      height: 50px;
      margin: 20px auto;
    }
  }
  #login {
    flex: 1;
    width: 100%;
    padding-top: 100px; 
    div {
      width: 76%;
      margin: 10px auto;
      &:last-child {
        margin-top: 35px;
      }
      input {
        border: 1px solid gray;
        padding: 5px;
        line-height: 30px;
        color: grey;
        display: block;
        width: 100%;
        height: 30px;
      }
      button {
        display: block;
        width: 100px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        a {
          color: #fff;
          display: block;
          height: 100%;
          width: 100%;
          text-decoration-line: none
        }
      }
    }
  }
  #login-footer {
    height: 40px;
    text-align: center
  }
 
</style>
