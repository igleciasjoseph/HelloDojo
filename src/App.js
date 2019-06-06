import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var li = ['Learn React', 'Climb Mt.Everest', 'Run a marathon', 'Feed the dogs']
  const items = [];
  for (const [index, value] of li.entries()) {
    items.push(<li value={index}>{value}</li>);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <h3>Things I need to do:</h3>
      <div>
        {items}
      </div>
    </div>
  );
}

export default App;
