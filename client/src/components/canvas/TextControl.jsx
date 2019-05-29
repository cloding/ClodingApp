import React, { Component } from 'react'

export default class TextControl extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="btn-control-box">
                    <h5 htmlFor="text1">{this.props.title}:</h5>
                    <input className="input-control" id={`text${this.props.id}`} type="text" value={this.props.text} onChange={(e) => this.props.textChange(e)} />
                </div>
            </React.Fragment>
        )
    }
}

{/* <div className="btn-control-box">
                            <h5 htmlFor="text1">First Text:</h5>
                            <input className="input-control" id="text1" type="text" value={this.props.text1} onChange={(e) => this.props.text(e)} />
                        </div>
                        <div className="text-control bottom">
                            <div className="text-control-inside">
                                <label htmlFor="textFill1">Color:</label>
                                <select id="textFill1" value={this.props.textFill1} onChange={(e) => this.props.text(e)}>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="purple">Purple</option>
                                </select>
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textFamily1">Font-family:</label>
                                <select id="textFamily1" value={this.props.textFamily1} onChange={(e) => this.props.text(e)}>
                                    <option value="Oxygen">Oxygen</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Poppins">Poppins</option>
                                    <option value="Roboto">Roboto</option>
                                    <option value="Rubik">Rubik</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-control">
                            <div className="text-control-inside">
                                <label htmlFor="textSize1">Size:</label>
                                <input id="textSize1" className="text-size-control" type="text" value={this.props.textSize1} onChange={(e) => this.props.text(e)} />
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textStyle1">Style:</label>
                                <select id="textStyle1" value={this.props.textStyle1} onChange={(e) => this.props.text(e)}>
                                    <option value="normal">Normal</option>
                                    <option value="bold">Bold</option>
                                    <option value="italic">Italic</option>
                                </select>
                            </div>
                        </div> */}
