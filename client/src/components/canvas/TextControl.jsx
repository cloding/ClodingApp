import React, { Component } from 'react'

export default class TextControl extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="light-blue-2 controles-inside">
                    <div className="btn-control-text-box">
                        <input className="control-input" id={`text${this.props.id}`} name='text' placeholder="Add a new text" type="text" value={this.props.text} onChange={(e) => this.props.textChange(e, this.props.side)} />
                        <button id={`text${this.props.id}`} type="button" onClick={(e) => this.props.deleteText(e, this.props.side)} className="btn-control red cursor"><i className="fas fa-trash"></i></button>
                    </div>
                    <div className="range-control">
                        <label htmlFor={`textFill${this.props.id}`} >Color:</label>
                        <select id={`text${this.props.id}`} name='textFill' value={this.props.fillValue} onChange={(e) => this.props.textChange(e, this.props.side)}>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                            <option value="purple">Purple</option>
                        </select>
                        <label htmlFor={`textFamily${this.props.id}`} >Font-Family:</label>
                        <select id={`text${this.props.id}`} name='textFamily' value={this.props.familyValue} onChange={(e) => this.props.textChange(e, this.props.side)}>
                            <option value="Oxygen">Oxygen</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Rubik">Rubik</option>
                        </select>
                        <label htmlFor={`textStyle${this.props.id}`}>Style:</label>
                        <select id={`text${this.props.id}`} name='textStyle' value={this.props.styleValue} onChange={(e) => this.props.textChange(e, this.props.side)}>
                            <option value="normal">Normal</option>
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                        </select>
                        <label htmlFor={`textSize${this.props.id}`}>Size:</label>
                        <input id={`text${this.props.id}`} name='textSize' className="control-input right-align" type="text" value={this.props.sizeValue} onChange={(e) => this.props.textChange(e, this.props.side)} />
                    </div>
                    <div className="range-control-text-rotation">
                        <label htmlFor={`textRotation${this.props.id}`}>Rotation:</label>
                        <input id={`text${this.props.id}`} name='textRotation' type="range" min="0" max="360" step="1" value={this.props.rotationValue} onChange={(e) => this.props.textChange(e, this.props.side)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

