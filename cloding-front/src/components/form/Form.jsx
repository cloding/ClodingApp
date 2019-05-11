import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}:</label>
                <input type={this.props.type} name={this.props.name} defaultValue={this.props.value} onChange={this.props.onchange} />
            </React.Fragment>
        )
    }
}
