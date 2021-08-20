import React, { Component } from "react";
import api from "../api/index";

export default class NewTask extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      title: "",
      description: "",
    };

    // Setting up functions
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }  

  handleClick(e) {
    e.preventDefault();
    console.log({
      title: this.state.description,
      description: this.state.description,
      user: localStorage.getItem("userToken"),
    });
    api.post("test/createtask", {
      title: this.state.description,
      description: this.state.description,
      user: localStorage.getItem("userToken"),
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
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              type="text"
              name="description"
              className="setting--input__textarea"
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Add task"
              className="setting--input__btn"
              onClick={(e) => {
                this.handleClick(e);
              }}
            />
          </div>
        </form>
      </article>
    );
  }
}
