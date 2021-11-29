import { selected } from "../selectors"
import { submissionCloneFunc } from "./submission-clone"
import { cloneDestination } from "../../settings/selectors"
import { name } from "../../assignment/selectors"

import { clone } from "../../../lib/cloneutils"
import { getAssignmentFolder } from "../../../lib/pathutils"

import Promise from "bluebird"
import {PythonInteractive} from "python-interactive";

async function compare(state) {
  // Import packages and ignore any output
  const { PythonInteractive } = require("python-interactive")
  let python = new PythonInteractive()
  await python.start()
  await python.execute("from interface import *")
  let userid = 973241060
  let files = state['settings']['cloneDestination'] + "/*/*/*.py"
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

const submissionClone = submissionCloneFunc(clone)
// PUBLIC: Async thunk action for cloning all selected submissions.
export const submissionRunMoss = () => {
  return (dispatch, getState) => {
    // const basePath = cloneDestination(getState())
    // const assignmentName = name(getState())
    // const cloneDirectory = getAssignmentFolder(basePath, assignmentName)
    //
    // const selectedSubmissions = selected(getState())
    // return Promise.map(selectedSubmissions, submission => {
    //   return dispatch(submissionClone(submission, cloneDirectory))
    // },
    // // TODO: dynamically set this based on system
    // { concurrency: 3 })
    return compare(getState())
  }
}
