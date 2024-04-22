import { useState } from 'react';
import Animate from "./assets/Animate";
import Foter from "./assets/Foter";
import Great from "./assets/Great";
import Rand from "./assets/Rand";
import State from "./assets/State";


function App(){

  const [inputValue, setInputValue] = useState("");

  return(
    <div className="container">
      <Rand inputValue={inputValue} />
      <Foter setInputValue={setInputValue}/>
     <Animate />
    <Great  name="Alsolami" />
     <State />

    </div>
     
    );
}
export default App;