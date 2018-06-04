
import { app, BrowserWindow } from 'electron'

import {loginOpt, winURL} from '../config/window-config'

let mainWindow = null

// 创建窗口
function createWindow () {
  // console.log(888, winURL, loginOpt)
  mainWindow = new BrowserWindow(loginOpt)
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.closeDevTools()
}

function appready () {
  createWindow()
}

function winAllClosed () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function activate () {
  if (mainWindow === null) {
    createWindow()
  }
}

function sizeWindow () {
  if (this.type !== 'login') {
    mainWindow.setSize(400, 500, true)
    mainWindow.setResizable(false)
  } else {
    mainWindow.setSize(800, 500, true)
    mainWindow.setResizable(true)
  }
}

export {
  createWindow,
  appready,
  winAllClosed,
  activate,
  sizeWindow
}
