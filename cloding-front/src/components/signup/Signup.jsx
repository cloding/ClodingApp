import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import { Link } from 'react-router-dom';

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
        direction: ""
      },
    };

    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.user.username;
    const password = this.state.user.password;
    const mail = this.state.user.mail;
    const country = this.state.user.country;
    const region = this.state.user.region;
    const city = this.state.user.city;
    const direction = this.state.user.direction;

    this.service.signup(username, password, mail, country, region, city, direction)
      .then(response => {
        console.log(response)
        this.setState({
          username: "",
          password: "",
          mail: "",
          country: "",
          region: "",
          city: "",
          direction: ""
        });
        // this.props.getUser(response)
      })
      .catch(error => console.log(error))
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ user: { ...this.state.user, [name]: value } });

  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <label>Email:</label>
          <input type="email" name="mail" value={this.state.mail} onChange={e => this.handleChange(e)} />

          <label>Coutry:</label>
          <input type="text" name="country" value={this.state.country} onChange={e => this.handleChange(e)} />

          <label>Region:</label>
          <input type="text" name="region" value={this.state.region} onChange={e => this.handleChange(e)} />

          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={e => this.handleChange(e)} />

          <label>Address:</label>
          <input type="text" name="direction" value={this.state.direction} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?
            <Link to={"/login"}> Login</Link>
        </p>

      </div>
    )
  }
}

