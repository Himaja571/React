import React from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;