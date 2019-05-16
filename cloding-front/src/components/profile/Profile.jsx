import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Profile.css';
import AuthService from '../../service/auth-service';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }

  delete(e) {
    e.preventDefault();
    this.service.delete(this.props.user._id)
      .then(() => {
        this.props.logout()
        this.props.history.push("/")
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    console.log(this.props.user)
    if (this.props.user.role !== "user") {
      return (
        <React.Fragment>
          <div className="pageStructure">
            <div className="container">
              <div className="half-container">
                <h1>Admin</h1>
                <Link className="btn purple" to={"/designer"}>Designer</Link>
              </div>
              <div className="half-container">
                <h1>Home</h1>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div className="pageStructure">
            <div className="container white">
              <div className="half-container">
                <h2>{this.props.user.username}</h2>
                <ul>
                  <li>email: {this.props.user.mail}</li>
                  <li>nation: {this.props.user.country}</li>
                  <li>region: {this.props.user.region}</li>
                  <li>city: {this.props.user.city}</li>
                  <Link className="btn light-blue" to={`/old-orders`}>Old orders</Link>
                </ul>
                <div className="profile-page-btn">
                  <Link className="btn light-blue" to={`/profile/edit`}>Edit profile</Link>
                  <button className="btn red" onClick={(e) => this.delete(e)}>Delete</button>
                </div>
              </div>
              <div className="half-container">
                <div className="profile-page-image">
                  <img src={this.props.user.photouser} alt="profile" />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default withRouter(Profile)