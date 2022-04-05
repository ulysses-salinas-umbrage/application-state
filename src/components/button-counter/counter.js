import React from 'react';
import { Col } from 'react-bootstrap';

const Counter = props => {
  return (
    <Col>
      <div>Button Clicks:</div>
      <p>{props.value}</p>
    </Col>
  );
};

export default Counter;
