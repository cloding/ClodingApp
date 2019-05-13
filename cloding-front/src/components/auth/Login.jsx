import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link, Redirect } from 'react-router-dom';
import Form from '../form/Form';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', logged: false, error: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
      .then(response => {
        this.setState({ username: "", password: "", logged: true }, () => this.props.setUser(response));
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: error.response.data.message });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.state.error = ''
  }

  render() {
    console.log(this.state.logged)
    if (this.state.logged) return <Redirect to={"/"} />
    return (
      <React.Fragment>
        <div className="pageStructure">
          <div className="container">
            <div className="half-container">
              <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <Form label="Username" type="text" name="username" value={this.state.username} onchange={e => this.handleChange(e)} />
                <Form label="Password" type="password" name="password" value={this.state.password} onchange={e => this.handleChange(e)} />
                <input type="submit" className="btn orange cursor" value="Login" />
              </form>
            </div>
            <div className="half-container">
              <p>Don't have account?
              <Link to={"/signup"}> Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
