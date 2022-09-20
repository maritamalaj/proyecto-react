import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BIENVENIDOS COMISION 34780
        </p>
       {React.createElement('h1',{},'sin jsx')}
      </header>
    </div>
  );
}

export default App;
