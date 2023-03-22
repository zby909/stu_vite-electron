/*
 * @Description:
 * @Author: zby
 * @Date: 2023-03-22 14:04:19
 * @LastEditors: zby
 * @Reference:
 */
//src\main\mainEntry.ts
import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(process.argv[2]);
});
