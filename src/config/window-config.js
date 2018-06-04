import path from 'path'

const winURL = (process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`)

// 设置app图标，注意路径
const iconPath = path.join(__dirname, '../renderer/assets/ycico.ico')
const defaultOpt = {
  icon: iconPath,
  show: true,
  frame: false
}
const loginOpt = {
  ...defaultOpt,
  width: 400,
  height: 500,
  resizable: false
}

const mainOpt = {
  ...defaultOpt,
  width: 400,
  height: 500,
  resizable: false
}

export {
  loginOpt,
  mainOpt,
  winURL
}
