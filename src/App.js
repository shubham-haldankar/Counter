import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state= {number:0}
  }
  render(){
  return(
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <h1>{this.state.number}</h1>
        <div className="Buttons">
        <button onClick= {()=> this.setState({number:this.state.number+1})}><h2>+</h2></button>
        <button onClick= {()=> this.state.number===0 ? 0 : this.setState({number:this.state.number-1})}><h2>-</h2></button>
        </div>
      </header>
    </div>)
  }
}

export default App;
