import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import History from '../pages/History';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component= {Dashboard}/>
        <Route  path="/history" component= {History}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
