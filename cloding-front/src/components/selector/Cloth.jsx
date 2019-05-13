import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Cloth extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white">
                        <div className="half-container">
                            <h1>Selecor</h1>
                            <Link className="btn orange" to={"/canvas"}>Start</Link>
                        </div>
                        <div className="half-container">
                            <h1>Selecor</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
