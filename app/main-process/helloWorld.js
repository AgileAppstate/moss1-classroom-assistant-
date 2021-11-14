import { BrowserWindow, session } from "electron"

let authWindow

export function helloWorld(mainWindowRef, protocolHandler) {
  openHelloWorldWindow(mainWindowRef, protocolHandler)
}

function openHelloWorldWindow(mainWindow, protocolHandler) {
  authWindow = new BrowserWindow({
    height: 720,
    width: 1280,
    show: false,
    parent: mainWindow,
    webPreferences: {
      session: session.fromPartition("auth:session"),
      nodeIntegration: false,
    },
  })

  const fs = require("fs")
  authWindow.webContents.loadURL("data:text/html;charset=utf-8," + fs.readFileSync("submission/report.html"))
  authWindow.once("ready-to-show", () => {
    if (authWindow) {
      authWindow.show()
    }
  })
}
