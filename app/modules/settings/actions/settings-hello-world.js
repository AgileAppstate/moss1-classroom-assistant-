import { ipcRenderer } from "electron"

/**
 * PUBLIC: Sends IPC message to open Login window with assignment url
 * Once user has logged in, updates username and resolves
 *
 * @return An async thunk action whcih resolves once user has logged in
 */
export const settingsHelloWorld = () => {
  return dispatch => {
    return new Promise((resolve) => {
      ipcRenderer.send("helloWorld", "")
      resolve()
    })
  }
}
