import React, { useState } from 'react';
import Counter from './components/counter';
import ButtonCounter from './components/button-counter/buttonCounter';
import ColorSquare from './components/color-square';
import './App.css';
export const ColorContext = React.createContext();

function App() {
  const [color, setColor] = useState('purple');
  return (
    <ColorContext.Provider value={[color, setColor]}>
      <div className='App'>
        <Counter />
        <hr />
        <ButtonCounter />
        <hr />
        <ColorSquare />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
