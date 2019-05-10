import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="pageStructure">
                        <div className="container">
                            <div className="half-container">
                                <h1>Home</h1>
                                <Link className="btn purple" to={"/designer"}>Designer</Link>
                            </div>
                            <div className="half-container">
                                <h1>Home</h1>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
