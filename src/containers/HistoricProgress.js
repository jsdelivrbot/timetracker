import { connect } from 'react-redux'
import { History } from '../components'

const mapStateToProps = ({taskList}) => {
  return { tasks: taskList.tasks }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const HistoricProgress = connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

export default HistoricProgress
