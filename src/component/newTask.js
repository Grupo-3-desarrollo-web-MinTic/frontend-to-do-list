import React, { Component } from "react";
import Api from "../api/index";

export default class NewTask extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      list: [],
      name: "",
    };
  }

  handleClick(task, title, description) {
    Api.post("test/createTask", {
      task: task,
      title: title,
      description: description,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Algo salio mal, el error es: " + err);
      });
  }

  render() {
    return (
      <article className="dashboard">
        <h2>Create a new task</h2>
        <hr />
        <form>
          <div>
            <label>Task title:</label>
            <input
              type="text"
              name="taskTitle"
              className="setting--input__text"
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              className="setting--input__textarea"
            />
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Add task"
              className="setting--input__btn"
            />
          </div>
        </form>
      </article>
    );
  }
}
