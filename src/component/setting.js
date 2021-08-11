import React, { Component } from "react";

export default class Setting extends Component {
  render() {
    return (
      <article>
        <h2>Setting</h2>
        <hr />
        <form>
          <div>
            <label>User name:</label>
            <input
              type="text"
              name="name"
              placeholder="Change your user name"
            />
          </div>
          <div>
            <label>User email:</label>
            <input type="text" name="name" placeholder="Change your email" />
          </div>

          <div>
            <input type="submit" value="Save" />
          </div>
        </form>

        <form>
          <div>
            <input type="submit" value="Delete account" />
          </div>
        </form>
      </article>
    );
  }
}
