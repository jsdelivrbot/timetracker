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

export default function NewTask({tasks, putAbove, putBelow, editTask, editTime, remove, complete, filter}) {
  return (
    <Grid style={withBorder}>
    { tasks.map((task, idx) => {
      return (<Row key={idx} style={withBorder}>
        <Col md={2} style={withBorder}>
          <Button bsStyle="link" onClick={putAbove}><Glyphicon glyph="chevron-up" /></Button>
          <Button bsStyle="link" onClick={putBelow}><Glyphicon glyph="chevron-down" /></Button>
        </Col>

        <Col md={6} style={withBorder}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="En que vas a trabajar"
              onChange={editTask}
            />
            <FormControl.Feedback />
          </FormGroup>
        </Col>

        <Col md={2} style={withBorder}>
          <FormControl
            type="text"
            placeholder="12:34"
            onChange={editTime}
          />
        </Col>

        <Col md={2} style={withBorder}>
          <Button bsStyle="link" onClick={remove}><Glyphicon glyph="remove" /></Button>
          <Button bsStyle="link" onClick={complete}><Glyphicon glyph="ok" /></Button>
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

