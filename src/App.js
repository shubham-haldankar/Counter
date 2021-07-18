import './App.css';
import {useState} from 'react';

function App() {
  let [number,setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h1>{number}</h1>
        <div className="Buttons">
        <button onClick= {()=> setNumber(number+1)}><h2>+</h2></button>
        <button onClick= {()=> number===0 ? 0 : setNumber(number-1)}><h2>-</h2></button>
        </div>
      </header>
    </div>
  );
}

export default App;
