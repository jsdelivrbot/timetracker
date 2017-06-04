import { connect } from 'react-redux'
import { NewTask } from '../components'

const mapStateToProps = state => {
  return {}
}

const mapDipatchToProps = dispatch => {
  return {}
}

const AddTask = connect(
  mapStateToProps,
  mapDipatchToProps
)(NewTask)

export default AddTask

