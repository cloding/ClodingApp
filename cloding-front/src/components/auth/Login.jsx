import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link, Redirect } from 'react-router-dom';
import Form from '../form/Form';
import './Auth.css';

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
          <div className="container white">
            <div className="half-container padding">
              <h2>Login</h2>
              <form className="form-auth" onSubmit={(e) => this.handleFormSubmit(e)}>
                <div className="input-login">
                  <Form labelCss="dispay-none" placeholder="username" inputCss="input-auth" type="text" name="username" value={this.state.username} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="password" inputCss="input-auth" type="password" name="password" value={this.state.password} onchange={e => this.handleChange(e)} />
                </div>
                <input type="submit" className="btn orange cursor" value="Login" />
              </form>
            </div>
            <div className="half-container padding auth-right">
              <div className="link-auth-text">
                <h4>You don't have an account yet? <span className="link-auth" ><Link to={"/signup"}>Register here.</Link></span></h4>
              </div>
              <div className="logoAuth">
                <img src="https://res.cloudinary.com/dgp1wgz95/image/upload/v1557993914/Cloding/wear/logoOpacity_unnxum.png" alt="logo Cloding"></img>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
