import { connect } from 'react-redux'
import { TaskList } from '../components'

const getTasks = () => {
  return [
    {},
  ]
}

const mapStateToProps = state => ({
  tasks: getTasks()
})

const mapDispatchToProps = dispatch => {
  return {
    putAbove: () => { console.log("[*] put above") },
    putBelow: () => { console.log("[*] put below") },
    editTask: () => { console.log("[*] edit task") },
    editTime: () => { console.log("[*] edit time") },
    remove: () => { console.log("[*] remove") },
    complete: () => { console.log("[*] complete") },
    filter: type => { console.log("[*] filter by", type) },
  }
}

const UserTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)

export default UserTaskList
