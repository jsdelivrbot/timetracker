import { connect } from 'react-redux'
import { TaskList } from '../components'
import { moveUp, moveDown, editTask, editDuration, remove, complete, filter } from '../actions'

const mapStateToProps = ({taskList}) => {
  return {
    filters: taskList.filters,
    filteredTasks: () => {
      const durationFiltered = taskList.tasks.filter(task => {
        switch(taskList.filters.duration){
          case 'short':
            return task.duration <= 30 * 60
          case 'medium':
            return task.duration > 30 * 60 && task.duration <= 60 * 60
          case 'long':
            return task.duration > 60 * 60
          default:
            return true
        }
      })

      const byStatus = durationFiltered.filter(task => {
        switch(taskList.filters.status){
          case 'pending':
            return !task.completed
          case 'completed':
            return task.completed
          default:
            return true
        }
      })

      return byStatus
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveUp: idx => dispatch(moveUp(idx)),
    moveDown: idx => dispatch(moveDown(idx)),
    editTask: (idx, value) => dispatch(editTask(idx, value)),
    editDuration: (idx, value) => dispatch(editDuration(idx, value)),
    remove: idx => dispatch(remove(idx)),
    complete: idx => dispatch(complete(idx)),
    filter: (filterType, value) => dispatch(filter(filterType, value)),
  }
}

const UserTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default UserTaskList
