import { connect } from 'react-redux'
import { NewTask } from '../components'
import { addTask, editNewTask, editNewDuration } from '../actions'
import { save } from '../utils'

const mapStateToProps = ({newTask}) => {
  return { newTask }
}

const mapDipatchToProps = dispatch => {
  return {
    addTask: newTask => {
      const action = addTask(newTask)
      if (action.task.duration > 60 * 60 * 2) {
        alert("Ups! la duracion maxima de una tarea es 2 horas")
        return;
      }
      dispatch(() => save(action.task))
      return dispatch(action)
    },
    editNewTask: evt => {
      return dispatch(editNewTask(evt.target.value))
    },
    editNewDuration: evt => {
      return dispatch(editNewDuration('duration', evt.target.value))
    },
    editPredefinedDuration: evt => {
      return dispatch(editNewDuration('predefinedDuration', evt.target.value))
    },
  }
}

const AddTask = connect(
  mapStateToProps,
  mapDipatchToProps
)(NewTask)

export default AddTask

