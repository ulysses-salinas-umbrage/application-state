import React from 'react';
import { Button } from 'react-bootstrap';

const Buttons = props => {
  return (
    <div>
      <Button onClick={props.onClick}>Click</Button>
    </div>
  );
};

export default Buttons;
