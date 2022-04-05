import React, { useState } from 'react';
import { Container, Col, Button } from 'react-bootstrap';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
      <Container style={{ maxWidth: '100%' }}>
     <br/>
    <Col>
      <div>Button Clicks:</div>
      <p>{count}</p>
      <Button onClick={increaseCount}>Click</Button>
    </Col>
  
    </Container>
  );
};

export default Counter;
