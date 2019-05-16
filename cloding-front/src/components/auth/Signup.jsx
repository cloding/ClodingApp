import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import { Link, Redirect } from 'react-router-dom';
import Form from "../form/Form";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        mail: "",
        country: "",
        region: "",
        city: "",
        direction: "",
        tShirt: [],
        buy: [],
        photouser: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        role: "user"
      },
      logged: false, error: ''
    };

    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.user.username;
    const password = this.state.user.password;
    const tShirt = this.state.user.tShirt;
    const buy = this.state.user.buy;
    const photouser = this.state.user.photouser;
    const role = this.state.user.role;
    const mail = this.state.user.mail;
    const country = this.state.user.country;
    const region = this.state.user.region;
    const city = this.state.user.city;
    const direction = this.state.user.direction;

    this.service.signup(username, password, mail, country, region, city, direction, tShirt, buy, photouser, role)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          mail: "",
          country: "",
          region: "",
          city: "",
          direction: "",
          logged: true
        }, () => this.props.setUser(response));
      })
      .catch(error => console.log(error))
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });

  };

  render() {
    console.log(this.state.logged)
    if (this.state.logged) return <Redirect to={"/"} />
    return (
      <React.Fragment>
        <div className="pageStructure">
          <div className="container">
            <div className="half-container">
              <form onSubmit={this.handleFormSubmit}>
                <Form label="Username" type="text" name="username" value={this.state.username} onchange={e => this.handleChange(e)} />
                <Form label="Password" type="password" name="password" value={this.state.password} onchange={e => this.handleChange(e)} />
                <Form label="Email" type="email" name="mail" value={this.state.mail} onchange={e => this.handleChange(e)} />
                <Form label="Country" type="text" name="country" value={this.state.country} onchange={e => this.handleChange(e)} />
                <Form label="Region" type="text" name="region" value={this.state.region} onchange={e => this.handleChange(e)} />
                <Form label="City" type="text" name="city" value={this.state.city} onchange={e => this.handleChange(e)} />
                <Form label="Address" type="text" name="direction" value={this.state.direction} onchange={e => this.handleChange(e)} />
                <input type="submit" className="btn orange cursor" value="Signup" />
              </form>
            </div>
            <div className="half-container">
              <p>Already have account?
            <Link to={"/login"}> Login</Link>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

