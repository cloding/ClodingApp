import React, { Component } from 'react'
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';
import AuthService from "../../service/auth-service";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.service = new AuthService();
    }

    logout(e) {
        e.preventDefault();
        this.service.logout()
            .then(() => {
                this.props.logout()
                this.props.history.push("/")
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        if (this.props.user != null) {
            return (
                <React.Fragment>
                    <nav>
                        <div className="navbar">
                            <h2><Link to={"/"}>Cloding</Link></h2>
                            <ul>
                                <li className="cursor" onClick={(e) => this.logout(e)}>Logout</li>
                                <li>
                                    <Link to={`/profile`} className="link-photo-profile">
                                        {this.props.user.username}
                                        <div style={{ backgroundImage: `url(${this.props.user.photouser})` }} />
                                    </Link>
                                </li>
                                <li><Link to={"/cart"}><i className="fas fa-shopping-cart"></i></Link></li>
                                <li><Link className="btn purple" to={"/designer"}>Designer</Link></li>
                            </ul>
                        </div>
                    </nav>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <nav>
                        <div className="navbar">
                            <h2><Link to={"/"}>Cloding</Link></h2>
                            <ul>
                                <li><Link to={"/login"}>Login</Link></li>
                                <li><Link to={"/signup"}>Register</Link></li>
                                <li><Link className="btn purple" to={"/designer"}>Designer</Link></li>
                            </ul>
                        </div>
                    </nav>
                </React.Fragment>
            )
        }
    }
}

export default withRouter(Navbar)
