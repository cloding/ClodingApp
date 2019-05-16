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
          <div className="container white">
            <div className="half-container  padding">
              <h2>Sign up</h2>
              <form className="form-auth" onSubmit={this.handleFormSubmit}>
                <div className="input-sign-up">
                  <Form labelCss="dispay-none" placeholder="username" inputCss="input-auth" type="text" name="username" value={this.state.username} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="password" inputCss="input-auth" type="password" name="password" value={this.state.password} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="e-mail" inputCss="input-auth" type="email" name="mail" value={this.state.mail} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="country" inputCss="input-auth" type="text" name="country" value={this.state.country} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="region" inputCss="input-auth" type="text" name="region" value={this.state.region} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="city" inputCss="input-auth" type="text" name="city" value={this.state.city} onchange={e => this.handleChange(e)} />
                  <Form labelCss="dispay-none" placeholder="direction" inputCss="input-auth" type="text" name="direction" value={this.state.direction} onchange={e => this.handleChange(e)} />
                </div>
                <input type="submit" className="btn orange cursor" value="Signup" />
              </form>
            </div>
            <div className="half-container padding auth-right">
              <div className="link-auth-text">
                <h4>You already have an account? <span className="link-auth" ><Link to={"/login"}> Login here.</Link></span></h4>
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

