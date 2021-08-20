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
      name: "",
    };

    // Setting up functions
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  logData() {
    console.log({
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
    });
    api
      .post("test/createuser", {
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
      })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Ha ocurrido un error: " + err);
      });

    this.setState({
      username: "",
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <section className="login">
        <article className="login--form">
          <form className="login--form__container">
            <input
              type="email"
              name="email"
              placeholder="E-MAIL"
              className="input__text"
              defaultValue={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="name"
              name="name"
              placeholder="USERNAME"
              className="input__text"
              defaultValue={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
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
            <div>
              <p
                onClick={() => {
                  this.props.history.push("/");
                }}
              >
                Login
              </p>
            </div>
            <br />
            <br />
            <button
              className="input__button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                this.logData();
              }}
            >
              Registrarse
            </button>
          </form>
        </article>
      </section>
    );
  }
}
