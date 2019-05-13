import React, { Component } from 'react'

export default class Canvas extends Component {

    render() {
        console.log(this.props.user)
        if (this.props.user) {
            return (
                <React.Fragment>
                    <div className="pageStructure">
                        <div className="container">
                            <h1>Canvas Logged</h1>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <div className="pageStructure">
                        <div className="container">
                            <h1>Canvas demo version</h1>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}
