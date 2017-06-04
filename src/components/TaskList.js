import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

const withBorder = {
  border: '1px solid #666'
}

export default function TaskList({filteredTasks, moveUp, moveDown, editTask, editTime, remove, complete, filter}) {
  return (
    <Grid style={withBorder}>
    { filteredTasks().map((task, idx) => {
      return (<Row key={idx} style={withBorder}>
        <Col md={2} style={withBorder}>
          <Button bsStyle="link" onClick={() => moveUp(idx)}><Glyphicon glyph="chevron-up" /></Button>
          <Button bsStyle="link" onClick={() => moveDown(idx)}><Glyphicon glyph="chevron-down" /></Button>
        </Col>

        <Col md={6} style={withBorder}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="En que vas a trabajar?"
              value={task.description}
              onChange={() => editTask(idx, task.description)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>

        <Col md={2} style={withBorder}>
          <FormControl
            type="text"
            placeholder="30:00"
            value={task.remaining}
            onChange={() => editTime(idx, task.time)}
          />
        </Col>

        <Col md={2} style={withBorder}>
          <Button bsStyle="link" onClick={() => remove(idx)}><Glyphicon glyph="remove" /></Button>
          <Button bsStyle="link" onClick={() => complete(idx)}><Glyphicon glyph="ok" /></Button>
        </Col>
      </Row>)
    }) }

      <Row>
        <Col md={2} mdOffset={3}>
          <Button bsStyle="link" onClick={() => filter('short')}>corto</Button>
        </Col>
        <Col md={2}>
          <Button bsStyle="link" onClick={() => filter('medium')}>medio</Button>
        </Col>
        <Col md={2}>
          <Button bsStyle="link" onClick={() => filter('long')}>largo</Button>
        </Col>
      </Row>
    </Grid>
  )
}

