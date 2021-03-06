import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import Col from 'react-bootstrap/lib/Col'
import Row from 'react-bootstrap/lib/Row'
import Button from 'react-bootstrap/lib/Button'
import _ from 'lodash'
import { convertToTime } from '../utils'

export default class CurrentTask extends React.Component {

  componentWillMount(){
    this.intervalId = setInterval(() => {
      const remaining = this.getRemaining()

      if (remaining <= 0 && !_.isNil(this.props.activetask)) {
        this.props.complete(0)
      }

      this.forceUpdate()
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  getRemaining = () => {
    let remaining = this.props.activeTask ? this.props.activeTask.remaining : 0

    if (!_.isNil(this.props.counterStarted)) {
      const elapsed = new Date().getTime() - this.props.counterStarted
      remaining = this.props.activeTask.remaining - Math.floor(elapsed / 1000)
    }

    return remaining
  }

  render(){
    const remaining = this.getRemaining()

    return (
      <Grid className="section current-task">
        <Row>
          <Col md={7} mdOffset={3}>
            <h2>{this.props.activeTask ? this.props.activeTask.description : ""}</h2>
          </Col>
        </Row>

        <Row>
          <Col md={1} mdOffset={3} mdHidden={!this.props.isRunning}>
            <Button
              bsStyle="warning"
              bsSize="large"
              style={{padding: '18px 25px'}}
              onClick={() => this.props.toggleCounter(this.props.isRunning, remaining)}><Glyphicon glyph="pause" /></Button>
          </Col>

          <Col md={1} mdOffset={3} mdHidden={this.props.isRunning}>
            <Button
              bsStyle="primary"
              bsSize="large"
              style={{padding: '18px 25px'}}
              onClick={() => this.props.toggleCounter(this.props.isRunning, remaining)}><Glyphicon glyph="play" /></Button>
          </Col>

          <Col md={6}>
            <Col md={5}>
              <span style={{letterSpacing: '5px', fontSize: '3em'}}>{convertToTime(remaining)}</span>
            </Col>

            <Col md={1}>
              <Button
                bsStyle="link" bsSize="large"
                className="header-btn"
                onClick={() => this.props.reset(this.props.isRunning)}><Glyphicon glyph="repeat" /></Button>
            </Col>

            <Col md={1}>
              <Button
                bsStyle="link" bsSize="large"
                className="header-btn danger"
                onClick={() => this.props.remove(0)}><Glyphicon glyph="remove" /></Button>
            </Col>

            <Col md={1}>
              <Button
                bsStyle="link" bsSize="large"
                className="header-btn success"
                onClick={() => this.props.complete(0)}><Glyphicon glyph="ok" /></Button>
            </Col>
          </Col>
        </Row>
      </Grid>
    )
  }
}

