import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import authService from './service/auth-service';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navbar from './components/navbar/Navbar';
import Selector from './components/selector/Selector';
import Canvas from './components/canvas/Canvas';
import Edit from './components/profile/Edit';


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
            <Route exact path='/designer' component={Selector} />
            <Route exact path='/canvas' render={(props) => <Canvas {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/profile/:id' render={(props) => <Profile {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/profile/:id/edit' render={(props) => <Edit {...props} user={this.state.loggedInUser} />} />
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
            <Route exact path='/signup' render={(props) => <Signup {...props} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/login' render={(props) => <Login {...props} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />
            <Route exact path='/designer' component={Selector} />
            <Route exact path='/canvas' render={(props) => <Canvas {...props} user={this.state.loggedInUser} />} />
          </Switch>
        </React.Fragment>
      )
    }
  }
}

export default App;
