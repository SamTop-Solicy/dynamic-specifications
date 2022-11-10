import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ConfigurationsForm} from "./components/ConfigurationsForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left">

        </div>
        <div className="right">
          <ConfigurationsForm />
        </div>
      </div>
    </div>
  );
}

export default App;
