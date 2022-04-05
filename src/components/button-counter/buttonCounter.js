import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Buttons from './buttons';
import Counter from './counter';
import animals from '../../assets/animals';

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  const [animal, setAnimal] = useState('');

  const handleOnClick = () => {
    setCount(count + 1);
    localStorage.setItem('count', count + 1);
  };

  const resetCount = () => {
    setCount(0);
    localStorage.setItem('count', 0);
  };

  useEffect(() => {
    setCount(parseInt(localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    if (count > 9) {
      setAnimal('no animals for you!');
    } else {
      setAnimal(animals[count]);
    }
  }, [count]);

  return (
    <Container>
      <br />
      <Counter value={count} />
      <Buttons onClick={handleOnClick} />
      <br />
      <p>{animal}</p>
      {count > 9 ? <p>no animals for you!</p> : <p>{animals[count]}</p>}
      <br />
      <Button onClick={resetCount}>Reset</Button>
    </Container>
  );
};

export default ButtonCounter;
