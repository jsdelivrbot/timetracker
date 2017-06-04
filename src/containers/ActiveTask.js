import { connect } from 'react-redux'
import { CurrentTask } from '../components'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    resume: () => { console.log("[*] resume") },
    reset: () => { console.log("[*] reset") },
    complete: () => { console.log("[*] complete") },
    remove: () => { console.log("[*] remove") },
  }
}

const ActiveTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTask)

export default ActiveTask
