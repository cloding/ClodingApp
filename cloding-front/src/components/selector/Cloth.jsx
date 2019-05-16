import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Selector.css';

export default class Cloth extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white">
                        <div className="half-container padding">
                            <h2>Create a new {this.props.cloth} </h2>
                            <div className="text-home-center">
                                <p>{this.props.clothText}</p>
                            </div>
                            <Link className="btn orange" to={"/canvas"}>Start</Link>
                        </div>
                        <div className="half-container selector-right">
                            <div className="selector-right-container">
                                <img src={this.props.clothImage} alt="tShirt" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
