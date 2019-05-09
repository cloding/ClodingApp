import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Sign up</Link>
                <h1>Home</h1>
            </React.Fragment>
        )
    }
}
