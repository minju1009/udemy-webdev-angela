import React, {useState} from "react";

function App() {

  setInterval(updateTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function updateTime(){
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
