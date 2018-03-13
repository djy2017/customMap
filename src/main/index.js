'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

//  演示如何设置app图标，注意路径
const iconPath = require('path').join(__dirname, '../renderer/assets/ycico.ico')
console.log(iconPath)
function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 800,
    minWidth: 1020,
    minHeight: 500,
    icon: iconPath,
    show: true,
    frame: false
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
