import React, { Component } from "react";
import "../assent/style/item.css";
import Api from "../api/index";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      list: [],
      name: "",
    };
  }

  componentDidMount() {
    Api.get("test/list")
      .then((res) => {
        this.setState({
          name: res.data.user,
          list: res.data.list,
        });
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  handleClick(task) {
    Api.post("test/list", {
      task: task,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  render() {
    const tasks = [];
    const username = this.state.name;

    for (let task of this.state.list) {
      tasks.push(
        <li onClick={() => this.handleClick(task)} className="item" key={task}>
          <i className="fas fa-tasks"></i> {task}
        </li>
      );
    }

    return (
      <article className="dashboard">
        <h2>@{username} list</h2>
        <hr />
        <ul>{tasks}</ul>
      </article>
    );
  }
}
