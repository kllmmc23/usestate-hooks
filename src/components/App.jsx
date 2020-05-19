import React, { useState } from "react";

function App() {
  

  setInterval(clock, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, getTime] = useState(now);

  function clock() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }
  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={clock}> Get Time </button>
    </div>
  );
}

export default App;
