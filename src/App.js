import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Counter  from './components/counter/counter';

class App extends Component{
 render() {
  return (
    <div className="App">
      My Counter App
      <Counter />
    </div>
  );
}
}

/* class FirstComponent extends Component{
    render() {
    return (
      <div className="firstComponnent">
        FirstComponent
      </div> 
    );
  }
  }
*/

export default App;
