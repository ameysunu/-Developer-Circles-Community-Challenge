import React, {useState} from "react";

let time = new Date().toLocaleTimeString('it-IT');
console.log(time);

function App(){

    const [usualTime, currentTime] = useState(time);
    
    function setTime(){
      let newTime = new Date().toLocaleTimeString('it-IT');
      currentTime(newTime);
    
    };
    
    setInterval(setTime, 1000);
      return (
          <h1>{usualTime}</h1>
      );
}
export default App;