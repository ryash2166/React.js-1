'use client' 

import React, { useState } from "react";
import Value from "./value/page";
const Home = () => {
  const [counter, setCounter] = useState(0);

  const [initialCount, setInitialCount] = useState(0);

  function handleChange(event) {
    setCounter(event.target.value);
  }

  const Reset = () => {
    setCounter(initialCount);
  };

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
      <div>
      {/* <div>{counter}</div> */}
        <Value counter={counter} onChange={handleChange}/>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
      <div>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

export default Home;
