import _ from 'lodash'

const convertToTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  let time = ""

  if (hours > 0) {
    time += hours + ":"
  }

  if (time === "") {
    time += minutes + ":"
  } else {
    time += pad(minutes) + ":"
  }

  if (secs > 0) {
    if (time === "") {
      time += "00:"
    }
    time += pad(secs)
  } else {
    time += "00"
  }

  return time
}

const pad = value => {
  if (value < 10) {
    return `0${value}`
  }

  return String(value)
}

const convertToSeconds = hourExpression => {
  const segments = hourExpression.split(":")

  let seconds = 0
  if (segments.length > 2){
    seconds += parseInt(segments.shift(), 10) * 3600
  }

  if (segments.length > 1){
    seconds += parseInt(segments.shift(), 10) * 60
  }
  if (segments.length > 0){
    seconds += parseInt(segments.shift(), 10)
  }

  return seconds
}

const getFixedDuration = (durationType, duration) => {
  if (durationType === 'short') {
    return "5:00"
  } else if (durationType === 'medium') {
    return "30:00"
  } else if (durationType === 'long') {
    return "1:00:00"
  }

  return duration
}

const get = (onSuccess) => {
  const client = new XMLHttpRequest()

  const response = function(){
    let response = this.responseText
    if (_.isEmpty(response)) {
      response = "[]"
    }
    onSuccess && onSuccess(JSON.parse(response))
  }

  client.addEventListener('load', response)
  client.open("GET", "/tasks")
  client.send()
}

const save = (tasks, onSuccess) => {
  const client = new XMLHttpRequest()

  const response = function(){
    let response = this.responseText
    if (_.isEmpty(response)) {
      response = "{\"success\": false}"
    }
    onSuccess && onSuccess(JSON.parse(response))
  }
  client.addEventListener('load', response)

  client.open("POST", "/tasks")

  const data = JSON.stringify(_.isArray(tasks) ? tasks : [tasks])

  client.setRequestHeader("Content-Type", "application/json")

  client.send(data)
}

const update = (idx, tasks, onSuccess) => {
  const client = new XMLHttpRequest()

  const response = function(){
    onSuccess && onSuccess(JSON.parse(this.responseText))
  }
  client.addEventListener('load', response)

  client.open("PUT", "/tasks")

  const data = JSON.stringify(_.isArray(tasks) ? tasks : [tasks])

  client.setRequestHeader("Content-Type", "application/json")

  client.send(data)
}

export { getFixedDuration, convertToSeconds, convertToTime, pad, get, save, update }
