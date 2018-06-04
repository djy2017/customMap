<template>
  <div>
    <div class="mainNav">
      <ul>
        <li v-for="item in nav" :key="item.id ">
          <router-link :to=item>{{item}}</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div id="menus">
        <div @dragleave="leave($event)" @dragstart=drag($event) id="aaaa1" draggable="true" class="menuitem a"><button>item-a</button></div>
        <div @dragstart=drag($event) id="aaaa2" draggable="true" class="menuitem a"><button>item-a</button></div>
        <div @dragstart=drag($event) id="aaaa3" draggable="true" class="menuitem a"><button>item-a</button></div>
      </div>
      <div id="container-box" @drop=finish($event) @dragover=allow($event)></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      page: 'home',
      nav: ['home', 'page1', 'page2', 'logout']
    }
  },
  computed: {
    lintTo () {
      return this.nav.map((e, i) => { e = '/' + e })
    }
  },
  methods: {
    drag (e) {
      // console.dir(e.target.classList)
      // e.target.classList.add('moving')
      e.dataTransfer.setData('Text', e.target.id)
    },
    allow (e) {
      e.preventDefault()
    },
    finish (ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      console.log(data)
      ev.target.appendChild(document.getElementById(data))
    },
    leave (e) {
      let BrowserWindow = require('electron').remote.BrowserWindow
      let mainWindow = new BrowserWindow({
        width: 400,
        height: 500,
        show: true,
        frame: false,
        resizable: false
      })
      mainWindow.loadURL('http://localhost:9080')
    }
  }
}
</script>
<style lang="less" scoped>
  header {
    color: green;
  }
  div {
    height: 500px;
    width: 100%;
  }
 #menus {
    display: flex;
    .menuitem {
      &.moving {
        button {
          cursor: move;
          color: green;
        }
      }
      button {
        display: block;
        width: 80px;
        height: 50px;
      }
    }
  }
  #container-box {
    background: grey;
    height: 50px;
    width: 100%
  }
</style>

