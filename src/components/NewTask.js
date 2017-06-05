import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Row from 'react-bootstrap/lib/Row';

export default function NewTask({ addTask, editNewTask, editNewDuration, editPredefinedDuration, newTask }) {
  return (
    <Grid className="section new-task">
      <Row>
        <Col md={6} mdOffset={1}>
          <FormGroup>
            <FormControl
              type="text"
              bsStyle="text"
              placeholder="En que vas a trabajar?"
              value={newTask.description}
              onChange={editNewTask.bind(this)}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>

        <Col md={2} mdHidden={newTask.predefinedDuration === 'other'}>
          <FormGroup>
            <FormControl
              componentClass="select"
              value={newTask.predefinedDuration}
              onChange={editPredefinedDuration.bind(this)}>
              <option value="short">corta</option>
              <option value="medium">media</option>
              <option value="long">larga</option>
              <option value="other">otra...</option>
            </FormControl>
          </FormGroup>
        </Col>

        <Col md={2} mdHidden={newTask.predefinedDuration !== 'other'}>
          <FormControl
            bsStyle="time"
            type="text"
            placeholder="ej. 2:34"
            value={newTask.duration}
            onChange={editNewDuration.bind(this)}
          />
        </Col>

        <Col md={1}>
          <Button bsStyle="link" className="option-btn" onClick={() => addTask(newTask)}><Glyphicon glyph="plus" /></Button>
        </Col>
      </Row>
    </Grid>
  )
}


