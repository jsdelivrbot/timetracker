import { connect } from 'react-redux'
import { NewTask } from '../components'
import { addTask, editNewTask, editNewDuration } from '../actions'

const mapStateToProps = ({newTask}) => {
  return {newTask}
}

const mapDipatchToProps = dispatch => {
  return {
    addTask: newTask => {
      return dispatch(addTask(newTask))
    },
    editNewTask: evt => {
      return dispatch(editNewTask(evt.target.value))
    },
    editNewDuration: evt => {
      return dispatch(editNewDuration(evt.target.value))
    },
  }
}

const AddTask = connect(
  mapStateToProps,
  mapDipatchToProps
)(NewTask)

export default AddTask

