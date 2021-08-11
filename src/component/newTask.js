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
      <article className="createTask">
        <h2>Create a new task</h2>
        <hr />
        <form>
          <div>
            <label>Title:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </article>
    );
  }
}
