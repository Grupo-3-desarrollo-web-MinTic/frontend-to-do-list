import "../assent/style/basic.css";
import "../assent/style/login.css";

import React, { Component } from "react";
import api from "../api/index";

//import { BrowserRouter as Router } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    // Setting up state
    this.state = {
      password: "",
      email: "",
    };

    // Setting up functions
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    api.get("/send");

    console.log();

    this.setState({
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <section className="login">
        <article className="login--form">
          <form
            onSubmit={() => {
              console.log("nada");
            }}
            className="login--form__container"
          >
            <input
              type="email"
              name="email"
              placeholder="USERNAME"
              className="input__text"
              defaultValue={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              className="input__text"
              defaultValue={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br />
            <br />
            <br />
            <div>
              <input type="checkbox" name="remember" className="input__check" />
              <label for="remember"> Remember me</label>
            </div>

            <div>
              <p
                onClick={() => {
                  this.props.history.push("/sign-up");
                }}
              >
                Forgot your password?
              </p>
            </div>
            <br />
            <br />
            <button
              className="input__button"
              onClick={() => {
                this.props.history.push("/dashboard");
              }}
            >
              Ingresar
            </button>
          </form>
        </article>
      </section>
    );
  }
}
