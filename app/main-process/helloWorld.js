import { BrowserWindow, session } from "electron"

let authWindow

export function helloWorld(mainWindowRef, protocolHandler) {
  openHelloWorldWindow(mainWindowRef, protocolHandler)
}

async function compare() {
  // Import packages and ignore any output
  const { PythonInteractive } = require("python-interactive")
  let python = new PythonInteractive()
  await python.start()
  await python.execute("from interface import *")
  let userid = 973241060
  let files = "./submission/a01-*.py"
  let type = "python"
  // let output = "submission/report/"
  // Print value of 'pi' and store the output

  // Execute multiline loop command and handle its output via Promise callbacks
  await python.execute(`remote_call(${userid}, "${files}", "${type}")`)
    .then((data) => {
      // If the Python code executed successfully
      console.log("webpage stored")
    })
    .catch((err) => {
      // If the Python code executed with an error
      console.log(`Failed to execute due to error:\n ${err}`)
    })
  await python.stop()
}

// console.log(test())
async function openHelloWorldWindow(mainWindow, protocolHandler) {
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
  // await compare()
  const fs = require("fs")

  console.log(process.cwd())
  authWindow.webContents.loadURL("data:text/html;charset=utf-8," + fs.readFileSync("./report.html"))
  authWindow.once("ready-to-show", () => {
    if (authWindow) {
      authWindow.show()
    }
  })
}
