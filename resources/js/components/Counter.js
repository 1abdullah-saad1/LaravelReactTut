// resources/js/Counter.js

import axios from "axios";
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';


export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    notifyServer();
  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    notifyServer();
  };

  // Notifies the server about the change
  const notifyServer = () => {
      axios.post('/count', {
          message: 'Counter Updated!',
      })
  }

  return (
    <div>
        <Button  color="primary"  variant="contained" onClick={handleDecrement} >-</Button>
        <span> {count} </span>
        <Button color="secondary" variant="contained" onClick={handleIncrement}>+</Button>
    </div>
  );
}

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}
