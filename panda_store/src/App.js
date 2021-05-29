import React from 'react';
import './App.css';
import Home from './Pages/Home';

import pandaHeader from './images/pandaHeader.png';

function App() {
  return (
    <div>
      <header className="header">
        <img src={pandaHeader} alt="urso panda" width="65px" />
        <h1>PANDA STORE</h1>
      </header>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
