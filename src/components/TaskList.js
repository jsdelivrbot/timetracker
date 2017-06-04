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

export default function NewTask() {
  return (
    <Grid style={withBorder}>
      <Row style={withBorder}>
        <Col md={2} style={withBorder}>
          <Button bsStyle="link"><Glyphicon glyph="chevron-up" /></Button>
          <Button bsStyle="link"><Glyphicon glyph="chevron-down" /></Button>
        </Col>

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

        <Col md={2} style={withBorder}>
          <Button bsStyle="link"><Glyphicon glyph="remove" /></Button>
          <Button bsStyle="link"><Glyphicon glyph="ok" /></Button>
        </Col>
      </Row>

      <Row>
        <Col md={2} mdOffset={3}>
          <Button bsStyle="link">corto</Button>
        </Col>
        <Col md={2}>
          <Button bsStyle="link">medio</Button>
        </Col>
        <Col md={2}>
          <Button bsStyle="link">largo</Button>
        </Col>
      </Row>
    </Grid>
  )
}



