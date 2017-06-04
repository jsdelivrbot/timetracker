import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

const withBorder = {
  border: '1px solid #666'
}

export default function CurrentTask({resume, reset, complete, remove}) {
  return (
    <Grid style={withBorder}>
      <Col md={2} style={withBorder}>
        <Button bsStyle="primary" block onClick={resume}>Primary</Button>
      </Col>

      <Col md={10} style={withBorder}>
        <Col md={2} style={withBorder}>
          <h1>1:03</h1>
        </Col>

        <Col md={1} style={withBorder}>
          <Button bsStyle="link" onClick={reset}><Glyphicon glyph="repeat" /></Button>
        </Col>

        <Col md={6} style={withBorder}>
          <Col md={12} style={withBorder}><Button bsStyle="link" onClick={complete}>Completar</Button></Col>
          <Col md={12} style={withBorder}><Button bsStyle="link" onClick={remove}>Eliminar</Button></Col>
        </Col>
      </Col>
    </Grid>
  )
}

