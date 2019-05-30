import React, { Component } from 'react'

export default class TextControl extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="light-blue-2 controles-inside">
                    <div className="btn-control-text-box">
                        <input className="control-input" id={`text${this.props.id}`} placeholder="Add a new text" type="text" value={this.props.text} onChange={(e) => this.props.textChange(e)} />
                        <button id={this.props.id} type="button" onClick={(e) => this.props.deleteText(e)} className="btn-control red cursor"><i className="fas fa-trash"></i></button>
                    </div>
                    <div className="range-control">
                        <label htmlFor={`textFill${this.props.id}`} >Color:</label>
                        <select id={`textFill${this.props.id}`} value={this.props.fillValue} onChange={(e) => this.props.textChange(e)}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="purple">Purple</option>
                        </select>
                        <label htmlFor={`textFamily${this.props.id}`} >Font-Family:</label>
                        <select id={`textFamily${this.props.id}`} value={this.props.familyValue} onChange={(e) => this.props.textChange(e)}>
                            <option value="Oxygen">Oxygen</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Rubik">Rubik</option>
                        </select>
                        <label htmlFor={`textStyle${this.props.id}`}>Style:</label>
                        <select id={`textStyle${this.props.id}`} value={this.props.styleValue} onChange={(e) => this.props.textChange(e)}>
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                        </select>
                        <label htmlFor={`textSize${this.props.id}`}>Size:</label>
                        <input id={`textSize${this.props.id}`} className="control-input right-align" type="text" value={this.props.sizeValue} onChange={(e) => this.props.textChange(e)} />
                    </div>
                    <div className="range-control-text-rotation">
                        <label htmlFor={`textRotation${this.props.id}`}>Rotation:</label>
                        <input id={`textRotation${this.props.id}`} type="range" min="0" max="360" step="1" value={this.props.rotationValue} onChange={(e) => this.props.textChange(e)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

