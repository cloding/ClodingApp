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
import Edit from './components/profile/Edit';
import Cart from './components/cart/Cart';
import Buy from './components/cart/Buy';
import ConcatShirt from './components/canvas/tShirt/ConcatShirt';
import ConcatShirtEdit from './components/canvas/tShirt/ConcatShirtEdit';
import ConcatSweatShirt from './components/canvas/sweatShirt/ConcatSweatShirt';
import ConcatSweatShirtEdit from './components/canvas/sweatShirt/ConcatSweatShirtEdit';



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
  

  editUser(user) {
    this.setState({
      ...this.state,
      loggedInUser: user
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
            <Route exact path='/t-shirt/designer' render={(props) => <ConcatShirt {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/t-shirt/designer/:id' render={(props) => <ConcatShirtEdit {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/sweatshirt/designer' render={(props) => <ConcatSweatShirt {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/sweatshirt/designer/:id' render={(props) => <ConcatSweatShirtEdit {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/profile/' render={(props) => <Profile {...props} logout={() => this.logoutUser()} user={this.state.loggedInUser} />} />
            <Route exact path='/profile/edit' render={(props) => <Edit {...props} user={this.state.loggedInUser} editDates={(user) => this.editUser(user)} />} />
            <Route exact path='/cart' render={(props) => <Cart {...props} user={this.state.loggedInUser}  />} />
            <Route exact path='/old-orders' render={(props) => <Buy {...props} user={this.state.loggedInUser}  />} />
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
            <Route exact path='/t-shirt/designer' render={(props) => <ConcatShirt {...props} user={this.state.loggedInUser} />} />
            <Route exact path='/sweatshirt/designer' render={(props) => <ConcatSweatShirt {...props} user={this.state.loggedInUser} />} />
          </Switch>
        </React.Fragment>
      )
    }
  }
}

export default App;
