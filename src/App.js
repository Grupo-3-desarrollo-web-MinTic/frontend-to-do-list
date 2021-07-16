import logo from "./assets/logo.svg";
import "./style/dashboard.css";
import "./style/App.css";

import React from "react";

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="nav">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li>
                <button>Opcion 1</button>
              </li>
              <li>
                <button>Opcion 1</button>
              </li>
              <li>
                <button>Opcion 1</button>
              </li>
              <li>
                <button>Opcion 1</button>
              </li>
              <li>
                <button>Opcion 1</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="dsh">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
