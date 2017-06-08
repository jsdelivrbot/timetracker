import _ from 'lodash'
import casual from 'casual-browserify'
import moment from 'moment'

const dummyRegistries = 80

const generatedTasks = _.range(dummyRegistries).map(() => {
  const duration = casual.integer(5*60, 120*60)
  const remaining = duration - casual.integer(0, duration/2)
  const completed = casual.coin_flip
  const createdAt = moment().subtract(casual.integer(0,7), 'days').toDate().getTime()
  const completedAt = moment().subtract(casual.integer(0,7), 'days').toDate().getTime()

  return {
    description: casual.sentence,
    duration,
    remaining,
    completed,
    createdAt,
    completedAt,
  }
})

const initialState = {
  activeTask: {counterStarted: null, running: false},
  newTask: {description: "", duration: "", predefinedDuration: 'short'},
  taskList: {
    filters: {duration: 'none', status: 'none'},
    tasks: []
  }
}

export default initialState
