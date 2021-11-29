import { SETTINGS_CHANGE_CLONE_DESTINATION, SETTINGS_SET_USERNAME } from "../constants"
import * as os from "os"

function getUserHome() {

  // From process.env
  return process.env[(process.platform == 'win32')
    ? 'USERPROFILE' : 'HOME'];
}

/*
const electron = require('electron');
const fs = require('fs');
const path = require('path');

const dataPath = electron.app.getPath('userData');
const filePath = path.join(dataPath, 'config.json');

function writeData(key, value){
  let contents = parseData()
  contents[key] = value;
  fs.writeFileSync(filePath, JSON.stringify(contents));
}

function readData(key, value) {
  let contents = parseData()
  return contents[key]
}

function parseData(){
  const defaultData = {}
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaultData;
  }
}
*/

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
