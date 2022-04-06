import React, { useState,useEffect } from 'react';

function FunctionalComponent() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  useEffect(()=>{
      console.log("useEffect called");
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default FunctionalComponent
