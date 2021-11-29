import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import lifecycle from "react-pure-lifecycle"

import AssignmentPanel from "../shared/containers/AssignmentPanel"
import SubmissionArchivePanelList from "./containers/SubmissionArchivePanelList"
import NavFooter from "../shared/components/NavFooter"
import ArchiveProgressPanel from "./containers/ArchiveProgressPanel"

import { settingsResetState } from "../../modules/settings/actions/settings-reset-state"
import { progress } from "../../modules/submissions/selectors"
import { settingsHelloWorld } from "../../modules/settings/actions/settings-hello-world"

const methods = {
  componentDidMount (_props) {
  }
}

const forwardButton = (progress, quitApp) => {
  if (progress < 0 || progress === 100) {
    return (
      {
        label: "Download Another Assignment",
        route: "/populate",
        onClick: quitApp
      }
    )
  }
}

const mossButton = (progress, runMoss) => {
  if (progress < 0 || progress === 100) {
    return (
      {
        label: "Open Moss",
        // route: "/archive",
        route: "/confirm_moss",
        // onClick: runMoss
      }
    )
  }
}

const ArchivePage = ({
  quitApp,
  runMoss,
  progress
}) => (
  <div>
    <AssignmentPanel/>
    <ArchiveProgressPanel progress={progress}/>
    <SubmissionArchivePanelList />
    <NavFooter
      left={{
        label: "Cancel",
        route: "/populate",
        onClick: quitApp,
        disabled: progress < 0 || progress === 100
      }}
      middle = {mossButton(progress, runMoss)}
      right = {forwardButton(progress, quitApp)}
    />
  </div>
)

const mapStateToProps = (state) => ({
  progress: progress(state)
})

const mapDispatchToProps = (dispatch) => ({
  quitApp: () => {
    dispatch(settingsResetState())
  }
})

ArchivePage.propTypes = {
  quitApp: PropTypes.func.isRequired,
  runMoss: PropTypes.func.isRequired,
  progress: PropTypes.number
}

export default lifecycle(methods)(connect(mapStateToProps, mapDispatchToProps)(ArchivePage))
