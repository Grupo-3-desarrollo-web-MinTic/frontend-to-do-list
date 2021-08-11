import React, { Component } from "react";
//import Api from "../api/index";

export default class LogOut extends Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  closeSession() {
    console.log("Sesión cerrada");
  }

  render() {
    return (
      <article>
        <h2>Log out</h2>
        <hr />
        <div className="closeSession" onClick={() => this.closeSession()}>
          <h3 className="closeSession--label">
            Do you want to close your session? (Click here)
          </h3>
        </div>
      </article>
    );
  }
}
