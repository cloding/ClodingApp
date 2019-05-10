import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import authService from './service/auth-service';
import Home from './components/home/Home';
import Profile from './components/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Selector from './components/selector/Selector';


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

  logoutUser() {
    this.setState({
      ...this.state,
      loggedInUser: null
    })
  }

  render() {

    const { loggedInUser } = this.state

    if (loggedInUser) {
      return (
        <React.Fragment>
          <Navbar user={this.state.loggedInUser} logout={() => this.logoutUser()} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/designer' component={Selector} />
            {/* <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} checkIfLogged={this.fetchUser}/> */}
          </Switch>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <Navbar user={this.state.loggedInUser} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' render={() => <Signup setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/login' render={() => <Login setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/profile' render={() => <Redirect to="/login" />} />
            <Route exact path='/designer' component={Selector} />
          </Switch>
        </React.Fragment>
      )
    }
  }
}

export default App;
