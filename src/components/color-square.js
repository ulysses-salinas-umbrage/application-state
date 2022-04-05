import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ColorContext } from '../App';

const CounterSquare = () => {
  const [color, setColor] = useContext(ColorContext);
  return (
    <Container>
      <div style={{ backgroundColor: color, height: 100 }}></div>
      <hr />
      <div >
        <Button className='btn btn-danger' onClick={() => setColor('orange')}>
          Orange
        </Button>
        <Button className='btn btn-primary' onClick={() => setColor('black')}>
          Black
        </Button>
        <Button className='btn btn-success' onClick={() => setColor('gold')}>
          Gold
        </Button>
      </div>
    </Container>
  );
};

export default CounterSquare;
