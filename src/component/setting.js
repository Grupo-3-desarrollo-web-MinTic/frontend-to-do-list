import React, { Component } from "react";
import "../assent/style/setting.css"

export default class Setting extends Component {
  render() {
    return (
      <article className="dashboard">
        <h2>Setting</h2>
        <hr />
        <form className="setting">
          <div>
            <label>User name: </label>
            <input
              type="text"
              name="name"
              className="setting--input__text"
              placeholder="Change your user name"
            />
          </div>
          <div>
            <label>User email: </label>
            <input
              type="text"
              name="mail"
              className="setting--input__text"
              placeholder="Change your email"
            />
          </div>

          <div id="save">
            <input
              type="submit"
              value="Save"
              className="setting--input__btn"
            />
          </div>
        </form>

        <hr />

        <form>
          <div>
            <input
              type="submit"
              value="Delete account"
              className="setting--input__btn"
            />
          </div>
        </form>
      </article>
    );
  }
}
