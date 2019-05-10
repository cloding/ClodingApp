import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default class Profile extends Component {

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
                </ul>
                <div className="profile-page-btn">
                  <Link className="btn light-blue" to={`/profile/${this.props.user._id}/edit`}>Edit profile</Link>
                  <Link className="btn red" to={"/designer"}>Delete</Link>
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
