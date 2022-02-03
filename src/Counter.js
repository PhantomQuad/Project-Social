import React from "react";
import Button from 'react-bootstrap/Button';


function Counter(props) {
    
  return (
    <div className={props.counterName}>
      <h1>{props.counterName}</h1>
      <p>{props.count}</p>
      <Button onClick={() => props.incrementCount()}>Increase</Button>
      <Button onClick={() => props.resetCount()}>Reset</Button>
    </div>
  );
}

export default Counter;
