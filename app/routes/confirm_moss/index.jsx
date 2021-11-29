import React from "react"
import lifecycle from "react-pure-lifecycle"

import AssignmentPanel from "./containers/AssignmentPanel"
import EditDestinationPanel from "./containers/EditDestinationPanel"
import SubmissionConfirmPanel from "./containers/SubmissionConfirmPanel"
import ActionableConfirmFooter from "./containers/ActionableConfirmFooter"

const methods = {
  componentDidMount (_props) {
  }
}

const ConfirmMossPage = () => (
  <div>
    <AssignmentPanel />
    <SubmissionConfirmPanel />
    <EditDestinationPanel />
    <ActionableConfirmFooter />
  </div>
)

export default lifecycle(methods)(ConfirmMossPage)
