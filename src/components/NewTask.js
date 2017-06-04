import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

const withBorder = {
  border: '1px solid #666'
}

export default function NewTask() {
  return (
    <Grid style={withBorder}>
      <Col md={6} style={withBorder}>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="En que vas a trabajar"
            onChange={() => console.log("Change task")}
          />
          <FormControl.Feedback />
        </FormGroup>
      </Col>

      <Col md={2} style={withBorder}>
        <FormControl
          type="text"
          placeholder="12:34"
          onChange={() => console.log("Change time")}
        />
      </Col>

      <Col md={1} style={withBorder}>
        <Button bsStyle="link"><Glyphicon glyph="plus" /></Button>
      </Col>
    </Grid>
  )
}


