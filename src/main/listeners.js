
import {appready, winAllClosed, activate, sizeWindow} from './actions.js'

import { app, ipcMain } from 'electron'

export default function () {
  app.on('ready', appready)

  app.on('window-all-closed', winAllClosed)

  app.on('activate', activate)

  ipcMain.on('clientLogin', sizeWindow.bind({type: 'login'}))

  ipcMain.on('clientLogout', sizeWindow.bind({type: 'logout'}))
}
