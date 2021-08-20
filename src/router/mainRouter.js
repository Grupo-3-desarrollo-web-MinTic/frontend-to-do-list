import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../component/dashboard";
import History from "../component/history";
import Progress from "../component/progress";
import Schedule from "../component/schedule";
import Setting from "../component/setting";
import LogOut from "../component/log-out";

import Today from "../component/today";
import Scheduled from "../component/scheduled";
import All from "../component/all";

import AddTask from "../component/newTask";

import Login from "../view/Login"
import SignUp from "../view/SignUp"

//const Dashboard = React.lazy(() => import("../component/history"))

export default class RouterSwitcher extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/history" component={History} />
        <Route path="/progress" component={Progress} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/setting" component={Setting} />
        <Route path="/log-out" component={LogOut} />

        <Route path="/today" component={Today} />
        <Route path="/scheduled" component={Scheduled} />
        <Route path="/all" component={All} />

        <Route path="/add-task" component={AddTask} />
      </Switch>
    );
  }
}
