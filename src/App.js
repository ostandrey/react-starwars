import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>StarWars</h1>
        <div className="card">
            <button className={'btn'}>
                <span>Heroes</span>
            </button>
            <div className="dropdown-divider"/>
            <button className={'btn'}>
                <span>Planets</span>
            </button>
            <div className="dropdown-divider"/>
            <button className={'btn'}>
                <span>Spaceships</span>
            </button>
        </div>
    </div>
  );
}

export default App;
