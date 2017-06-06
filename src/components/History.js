import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import { LineGraph } from 'react-d3-responsive'
import _ from 'lodash'
import moment from 'moment'

export default function History({tasks}) {

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

  const chartData = completedSeriesOrdered.concat(pendingSeriesOrdered)

  const maxY = _.maxBy(chartData, task => task.count).count

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




