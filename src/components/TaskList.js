import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';

export default function TaskList({filteredTasks, moveUp, moveDown, editTask, editDuration, remove, complete, filter, filters}) {

  function getFilterStyle(filter, type){
    return filters[filter] === type ? 'info' : 'default'
  }

  return (
    <Grid>
    { filteredTasks().map((task, idx) => {
      return (<Row key={idx}>
        <Col md={1} mdHidden={task.completed}>
          <Button bsStyle="link" className="option-btn" onClick={() => moveUp(idx)}><Glyphicon glyph="chevron-up" /></Button>
          <Button bsStyle="link" className="option-btn" onClick={() => moveDown(idx)}><Glyphicon glyph="chevron-down" /></Button>
        </Col>

        <Col md={6} mdOffset={task.completed ? 1 : 0}>
          <FormGroup>
            <FormControl
              bsStyle="text"
              type="text"
              placeholder="En que vas a trabajar?"
              style={task.completed ? {"textDecoration": "line-through"} : {}}
              value={task.description}
              disabled={task.completed}
              onChange={evt => editTask(idx, evt.target.value)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>

        <Col md={1}>
          <FormControl
            bsStyle="time"
            type="text"
            placeholder="30:00"
            value={task.remaining}
            onChange={evt => editDuration(idx, evt.target.value)}
          />
        </Col>

        <Col md={1} mdHidden={task.completed}>
          <Button
            bsStyle="link"
            className="option-btn danger"
            onClick={() => remove(idx)}><Glyphicon glyph="remove" /></Button>
          <Button
            bsStyle="link"
            className="option-btn success"
            onClick={() => complete(idx)}><Glyphicon glyph="ok" /></Button>
        </Col>
      </Row>)
    }) }

      <Row>
        <Col md={4} mdOffset={1}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Por duracion</InputGroup.Addon>
              <ButtonGroup bsSize="small">
                <Button bsStyle={getFilterStyle('duration', 'short')} onClick={() => filter('duration', 'short')}>corta</Button>
                <Button bsStyle={getFilterStyle('duration', 'medium')} onClick={() => filter('duration', 'medium')}>media</Button>
                <Button bsStyle={getFilterStyle('duration', 'long')} onClick={() => filter('duration', 'long')}>larga</Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>

        <Col md={4} >
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Por status</InputGroup.Addon>
              <ButtonGroup bsSize="small">
                <Button bsStyle={getFilterStyle('status', 'completed')} onClick={() => filter('status', 'completed')}>completadas</Button>
                <Button bsStyle={getFilterStyle('status', 'pending')} onClick={() => filter('status', 'pending')}>pendiente</Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

    </Grid>
  )
}

