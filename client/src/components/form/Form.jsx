import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <React.Fragment>
                <label className={this.props.labelCss}>{this.props.label}:</label>
                <input placeholder={this.props.placeholder} className={this.props.inputCss} type={this.props.type} name={this.props.name} defaultValue={this.props.value} onChange={this.props.onchange} />
            </React.Fragment>
        )
    }
}
