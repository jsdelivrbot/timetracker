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

export default function History() {
  return (
    <Grid className="section history" style={withBorder}>
      <Row style={withBorder}>
        <Col md={12} style={withBorder}>
          <h1>Aqui va una grafica</h1>
        </Col>
      </Row>
    </Grid>
  )
}




