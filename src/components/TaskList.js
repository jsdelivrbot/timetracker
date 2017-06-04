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

export default function TaskList({filteredTasks, moveUp, moveDown, editTask, editTime, remove, complete, filter, currentFilter}) {

  function getFilterStyle(type){
    return currentFilter === type ? 'info' : 'default'
  }

  return (
    <Grid>
    { filteredTasks().map((task, idx) => {
      return (<Row key={idx}>
        <Col md={1}>
          <Button bsStyle="link" onClick={() => moveUp(idx)}><Glyphicon glyph="chevron-up" /></Button>
          <Button bsStyle="link" onClick={() => moveDown(idx)}><Glyphicon glyph="chevron-down" /></Button>
        </Col>

        <Col md={6}>
          <FormGroup>
            <FormControl
              bsStyle="text"
              type="text"
              placeholder="En que vas a trabajar?"
              value={task.description}
              onChange={() => editTask(idx, task.description)}
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
            onChange={() => editTime(idx, task.time)}
          />
        </Col>

        <Col md={1}>
          <Button bsStyle="link" className="option-btn danger" onClick={() => remove(idx)}><Glyphicon glyph="remove" /></Button>
          <Button bsStyle="link" className="option-btn success" onClick={() => complete(idx)}><Glyphicon glyph="ok" /></Button>
        </Col>
      </Row>)
    }) }

      <Row>
        <Col md={4} mdOffset={2}>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Por duracion</InputGroup.Addon>
              <ButtonGroup bsSize="small">
                <Button bsStyle={getFilterStyle('short')} onClick={() => filter('short')}>corta</Button>
                <Button bsStyle={getFilterStyle('medium')} onClick={() => filter('medium')}>media</Button>
                <Button bsStyle={getFilterStyle('long')}onClick={() => filter('long')}>larga</Button>
              </ButtonGroup>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>

    </Grid>
  )
}

