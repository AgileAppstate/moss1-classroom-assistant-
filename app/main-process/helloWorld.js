import { BrowserWindow, session } from "electron"

let authWindow

export function helloWorld(mainWindowRef, protocolHandler) {
    openHelloWorldWindow(mainWindowRef, protocolHandler)
}

function openHelloWorldWindow(mainWindow, protocolHandler) {
    authWindow = new BrowserWindow({
        height: 200,
        width: 400,
        show: false,
        parent: mainWindow,
        webPreferences: {
            session: session.fromPartition("auth:session"),
            nodeIntegration: false,
        },
    })

    authWindow.webContents.loadURL("data:text/html;charset=utf-8,<html>\n" +
        "\n" +
        "<head>\n" +
        "<meta charset=\"UTF-8\" />\n" +
        "    <title>Hello World</title>\n" +
        "</head>\n" +
        "\n" +
        "<body>\n" +
        "<div id=\"app\">\n" +
        "    <h1>Hello World!</h1>\n" +
        "</div>\n" +
        "<div>\n" +
        "    <button type=\"button\"\n" +
        "            onclick=\"window.close()\">Close</button>\n" +
        "</div>\n" +
        "</body>\n" +
        "\n" +
        "</html>")
    authWindow.once("ready-to-show", () => {
        if (authWindow) {
            authWindow.show()
        }
    })
}
