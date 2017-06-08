import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import _ from 'lodash'
import moment from 'moment'
import { LineGraph } from 'react-d3-responsive'

export default class History extends React.Component {

  getChartInfo = (tasks) => {
    if (!_.isEmpty(this.chartData)) {
      return {chartData: this.chartData, maxY: this.maxY}
    }

    const groupTasksByDateType = (tasks, dateType) => (
      _.groupBy(tasks, task => moment(task[dateType]).format("MM-DD-YYYY"))
    )

    const mapTaskToData = (groupedByDate, label) => (
      _.map(groupedByDate, (tasks, date) => ({ label, date, count: tasks.length }))
    )

    const groupByStatus = _.groupBy(tasks, task => task.completed ? "completed" : "pending")

    const completedGroupByDay = groupTasksByDateType(groupByStatus.completed, "completedAt")
    const pendingGroupByDay = groupTasksByDateType(groupByStatus.pending, "createdAt")

    const completedTaskData = mapTaskToData(completedGroupByDay, "Tareas completadas")
    const pendingTaskData = mapTaskToData(pendingGroupByDay, "Tareas pendientes")

    const completedSeriesOrdered = _.sortBy(completedTaskData, task => task.date)
    const pendingSeriesOrdered = _.sortBy(pendingTaskData, task => task.date)

    this.chartData = completedSeriesOrdered.concat(pendingSeriesOrdered)

    if (_.isEmpty(this.chartData)) {
      return null
    }

    this.maxY = _.isEmpty(this.chartData) ? 1 : _.maxBy(this.chartData, task => task.count).count

    return {chartData: this.chartData, maxY: this.maxY}
  }

  render(){
    const data = this.getChartInfo(this.props.tasks)

    if (_.isNil(data)) {
      return null
    }

    const {chartData, maxY} = data

    return (
      <Grid className="section history">
        <Row>
          <Col md={10} mdOffset={1} >
            <LineGraph
              height={200}
              chartId="history"
              chartClassName="history-graph"
              xAxisLabel=""
              yAxisLabel="Tareas"
              xDataKey="date"
              yDataKey="count"
              dateFormat="%m-%d-%Y"
              xToolTipLabel="Fecha: "
              yToolTipLabel="Tareas: "
              lineType="linear"
              yMaxBuffer={50}
              yMax={maxY}
              yMin={0}
              data={chartData}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}




