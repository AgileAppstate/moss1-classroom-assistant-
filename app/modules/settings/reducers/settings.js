import { SETTINGS_CHANGE_CLONE_DESTINATION, SETTINGS_SET_USERNAME } from "../constants"
import * as os from "os"

function getUserHome() {

  // From process.env
  return process.env[(process.platform == 'win32')
    ? 'USERPROFILE' : 'HOME'];
}

const initialState = {
  // TODO: change this to use os.tmpdir()
  //cloneDestination: "/tmp",
  //cloneDestination: os.tmpdir(),
  cloneDestination: getUserHome(),
  username: null,
}

const settings = (state = initialState, action) => {
  switch (action.type) {
  case SETTINGS_CHANGE_CLONE_DESTINATION:
    return Object.assign({}, state, { cloneDestination: action.destination })
  case SETTINGS_SET_USERNAME:
    return Object.assign({}, state, { username: action.payload })
  default:
    return state
  }
}

export default settings
