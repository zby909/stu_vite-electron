/*
 * @Description:
 * @Author: zby
 * @Date: 2023-03-22 14:04:19
 * @LastEditors: zby
 * @Reference:
 */
//src\main\mainEntry.ts
import { app, BrowserWindow } from "electron";
import { CustomScheme } from "./CustomScheme";
// process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true"; //禁用安全警告
let mainWindow: BrowserWindow;

app.whenReady().then(() => {
  let config = {
    webPreferences: {
      nodeIntegration: true, //是否启用Node
      webSecurity: false, //当设置为 false, 它将禁用同源策略
      allowRunningInsecureContent: true, //允许一个 https 页面运行来自http url的JavaScript, CSS 或 plugins。
      contextIsolation: false,
      // webviewTag: true,
    },
  };
  mainWindow = new BrowserWindow(config);
  mainWindow.webContents.openDevTools({ mode: "undocked" });
  if (process.argv[2]) {
    mainWindow.loadURL(process.argv[2]);
  } else {
    CustomScheme.registerScheme();
    mainWindow.loadURL(`app://index.html`);
  }
});
