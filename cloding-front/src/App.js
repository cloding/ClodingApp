import React, { Component } from 'react';
import './App.css';
import Signup from "./components/signup/Signup"
import Login from "./components/Login"
import { Switch, Route } from 'react-router-dom';
import authService from './service/auth-service';
import Home from './components/home/Home';
import Profile from './components/Profile';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new authService()
  }


  fetchUser = () => {

    this.service.loggedin()
      .then(response => {
        console.log(response)
        this.setState({ loggedInUser: response })
      })
      .catch(x => this.setState({ loggedInUser: false }))

  }

  setTheUser = (userObj) => { this.setState({ loggedInUser: userObj }) }

  render() {

    const { loggedInUser } = this.state

    if (loggedInUser) {
      return (
        <React.Fragment>
          <h1>DioCane</h1>
          <Switch>
            <Route exact path='/profile' component={Profile} />
            {/* <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} checkIfLogged={this.fetchUser}/> */}
          </Switch>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>

          <Switch>
            {/* <Route exact path='/profile' component={Profile} /> */}
            <Route exact path='/' component={Home} />>
            <Route exact path='/signup' render={() => <Signup setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/login' render={() => <Login setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            {/* <Route user={this.state.loggedInUser} exact path='/profile' component={Profile} /> */}
          </Switch>

        </React.Fragment>
      )
    }
  }
}

export default App;
