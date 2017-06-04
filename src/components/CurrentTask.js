import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import _ from 'lodash'

export default class CurrentTask extends React.Component {

  componentWillMount(){
    this.intervalId = setInterval(this.forceUpdate.bind(this), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render(){
    let remaining = this.props.activeTask.remaining

    if (!_.isNil(this.props.counterStarted)) {
      const elapsed = new Date().getTime() - this.props.counterStarted
      remaining = this.props.activeTask.remaining - Math.floor(elapsed / 1000)
    }

    return (
      <Grid className="section current-task">
        <Row>
          <Col md={1} mdOffset={2} mdHidden={!this.props.isRunning}>
            <Button
              bsStyle="warning"
              bsSize="large"
              style={{padding: '18px 25px'}}
              onClick={() => this.props.toggleCounter(this.props.isRunning, remaining)}><Glyphicon glyph="pause" /></Button>
          </Col>

          <Col md={1} mdOffset={2} mdHidden={this.props.isRunning}>
            <Button
              bsStyle="primary"
              bsSize="large"
              style={{padding: '18px 25px'}}
              onClick={() => this.props.toggleCounter(this.props.isRunning, remaining)}><Glyphicon glyph="play" /></Button>
          </Col>

          <Col md={8}>
            <Col md={2}>
              <span style={{fontSize: '3em'}}>{remaining}</span>
            </Col>

            <Col md={3}>
              <Button
                bsStyle="link" bsSize="large"
                className="header-btn"
                onClick={() => this.props.reset(this.props.isRunning)}><Glyphicon glyph="repeat" /></Button>
              <Button
                bsStyle="link" bsSize="large"
                className="header-btn danger"
                onClick={() => this.props.remove(0)}><Glyphicon glyph="remove" /></Button>
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

