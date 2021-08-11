import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/Home'
import Layout from './components/Layout';
import React, {Component} from 'react';
import MainNavigationBar from './components/MainNavigationBar';

/*function App() {
  return 
  (

    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;*/

class App extends Component{

  render(){
    return (
      <React.Fragment>
        <MainNavigationBar/>
        <Layout>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </Router>
      </Layout>

    </React.Fragment>
    );
  }
}


export default App;