import { push } from "react-router-redux"

import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router"
import { connect } from "react-redux"

import Footer from "../../shared/components/Footer"
import { settingsHelloWorld } from "../../../modules/settings/actions/settings-hello-world"
import { submissionRunMoss } from "../../../modules/submissions/actions/submission-run-moss"

const ConfirmFooter = ({
  showReport,
  runMoss
}) => {
  return (
    <Footer>
      <Link to="/archive" key={0}>
        <button className="btn btn-danger">Back</button>
      </Link>
      <button
        className="btn btn-success pull-right"
        onClick={runMoss}
      >
        Run Moss
      </button>
      <button
        className="btn btn-success pull-right"
        onClick={showReport}
      >
        Show Report
      </button>
    </Footer>
  )
}

ConfirmFooter.propTypes = {
  confirmClickHandler: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  runMoss: () => {
    dispatch(submissionRunMoss())
  },
  showReport: () => {
    dispatch(settingsHelloWorld("helloWorld.html"))
  }
})

export default connect(null, mapDispatchToProps)(ConfirmFooter)
