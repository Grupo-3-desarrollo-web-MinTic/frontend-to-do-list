import React, { Component } from "react";
import api from "../api/index";

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      list: [],
      name: "",
    };
  }

  componentDidMount() {
    api.get("test/list", {
      headers: {
        id: localStorage.getItem("userToken"),
        "content-type": "text/json",
      },
    })
      .then((res) => {
        console.log(res);
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
    console.log(task);
    api.post("test/list", {
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
    const username = localStorage.getItem("userName");

    try {
      for (let task of this.state.list) {
        tasks.push(
          <li
            onClick={() => this.handleClick(task)}
            className="item"
            key={task}
          >
            <i className="fas fa-tasks"></i> {task}
          </li>
        );
      }
    } catch (e) {
      tasks.push(
        <li className="item">
          <i class="far fa-folder-open"></i> You don't have tasks {username}
        </li>
      );
    }

    return (
      <article className="dashboard">
        <h2>@{username} dashboard list</h2>
        <hr />
        <ul>{tasks}</ul>
      </article>
    );
  }
}
