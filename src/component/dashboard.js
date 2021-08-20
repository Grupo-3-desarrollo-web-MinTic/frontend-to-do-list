import React, { Component } from "react";
import "../assent/style/item.css";
import api from "../api/index";

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
    api
      .get("test/list", {
        headers: {
          id: localStorage.getItem("userToken"),
          "content-type": "text/json",
        },
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        this.setState({
          name: data.user,
        });
        for (let task in data.data) {
          this.setState({
            list: [
              {
                id: data.data[task]._id,
                title: data.data[task].title,
                description: data.data[task].description,
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  handleClick(task) {
    console.log(task.id);
    api
      .post("test/deletetask", {
        task: task.id,
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
      for (let task = 0; task < this.state.list.length; task++) {
        tasks.push(
          <li
            onClick={() => this.handleClick(this.state.list[task])}
            className="item"
            key={this.state.list[task].id}
          >
            <i className="fas fa-tasks"></i> {this.state.list[task].title}
            <p>{this.state.list[task].description}</p>
          </li>
        );
      }
    } catch (e) {
      tasks.push(
        <li className="item">
          <i className="far fa-folder-open"></i> You don't have tasks {username}
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
