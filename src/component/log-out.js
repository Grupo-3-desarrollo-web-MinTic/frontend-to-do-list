import React, { Component } from "react";
import "../assent/style/logOut.css";
//import Api from "../api/index";

export default class LogOut extends Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  closeSession() {
    console.log("Sesión cerrada");

    this.props.history.push("/");
  }

  render() {
    return (
      <article className="dashboard">
        <h2>Log out</h2>
        <hr />
        <div className="closeSession">
          <button
            className="closeSession--label"
            onClick={() => this.closeSession()}
          >
            Do you want to close your session? (Click here)
          </button>
        </div>
      </article>
    );
  }
}
