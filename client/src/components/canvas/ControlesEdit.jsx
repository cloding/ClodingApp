import React, { Component } from 'react'

export default class Controles extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="control-structure">
                    <div className="controlRGB light-blue controles-box">
                        <div className="range-control">
                            <label htmlFor="red">Red:</label>
                            <input id="red" type="range" min="0" max="255" step="1" value={this.props.red} onChange={(e) => this.props.rgbValue(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="green">Green:</label>
                            <input id="green" type="range" min="0" max="255" step="1" value={this.props.green} onChange={(e) => this.props.rgbValue(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="blue">Blue:</label>
                            <input id="blue" type="range" min="0" max="255" step="1" value={this.props.blue} onChange={(e) => this.props.rgbValue(e)} />
                        </div>
                    </div>

                    <div className="controlRGB light-blue controles-box" >
                        <div className="btn-control-box">
                            <h5 id="firstImage">First image</h5>
                            <button id="1" type="button" name="firstImage" onClick={(e) => this.props.showWidget(e)} className="btn-control purple cursor">Upload</button>
                            <button id="1" type="button" onClick={(e) => this.props.deleteImage(e)} className="btn-control red cursor">Delete</button>
                        </div>
                        <div className="range-control">
                            <label htmlFor="opacity1">Opacity:</label>
                            <input id="opacity1" type="range" min="0" max="1" step="0.1" value={this.props.opacity1} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="Hue1">Hue:</label>
                            <input id="hue1" type="range" min="0" max="259" step="1" value={this.props.hue1} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="saturation1">Saturation:</label>
                            <input id="saturation1" type="range" min="-2" max="10" step="0.5" value={this.props.saturation1} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="value1">Value:</label>
                            <input id="value1" type="range" min="-2" max="2" step="0.1" value={this.props.value1} onChange={(e) => this.props.effects(e)} />
                        </div>
                    </div>

                    <div className="controlRGB light-blue controles-box">
                        <div className="btn-control-box">
                            <h5 id="secondImage">Second image</h5>
                            <button id="2" type="button" name="secondImage" onClick={(e) => this.props.showWidget(e)} className="btn-control purple cursor">Upload</button>
                            <button id="2" type="button" onClick={(e) => this.props.deleteImage(e)} className="btn-control red cursor">delete</button>
                        </div>
                        <div className="range-control">
                            <label htmlFor="opacity2">Opacity:</label>
                            <input id="opacity2" type="range" min="0" max="1" step="0.1" value={this.props.opacity2} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="Hue2">Hue:</label>
                            <input id="hue2" type="range" min="0" max="259" step="1" value={this.props.hue2} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="saturation2">Saturation:</label>
                            <input id="saturation2" type="range" min="-2" max="10" step="0.5" value={this.props.saturation2} onChange={(e) => this.props.effects(e)} />
                        </div>
                        <div className="range-control">
                            <label htmlFor="value2">Value:</label>
                            <input id="value2" type="range" min="-2" max="2" step="0.1" value={this.props.value2} onChange={(e) => this.props.effects(e)} />
                        </div>
                    </div>

                    <div className="controlRGB light-blue controles-box">
                        <div className="btn-control-box">
                            <h5 htmlFor="text1">First Text:</h5>
                            <input className="input-control" id="text1" type="text" value={this.props.text1} onChange={(e) => this.props.text(e)} />
                        </div>
                        <div className="text-control bottom">
                            <div className="text-control-inside">
                                <label htmlFor="textFill1">Color:</label>
                                <select id="textFill1" onChange={(e) => this.props.text(e)}>
                                    <option value="black" defaultValue >Black</option>
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
                                <select id="textFamily1" onChange={(e) => this.props.text(e)}>
                                    <option value="Oxygen" defaultValue >Oxygen</option>
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
                                <select id="textStyle1" onChange={(e) => this.props.text(e)}>
                                    <option value="normal" defaultValue >Normal</option>
                                    <option value="bold">Bold</option>
                                    <option value="italic">Italic</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="controlRGB light-blue controles-box">
                        <div className="btn-control-box">
                            <h5 htmlFor="text2">Second Text:</h5>
                            <input className="input-control" id="text2" type="text" value={this.props.text2} onChange={(e) => this.props.text(e)} />
                        </div>
                        <div className="text-control bottom">
                            <div className="text-control-inside">
                                <label htmlFor="textFill2">Color:</label>
                                <select id="textFill2" onChange={(e) => this.props.text(e)}>
                                    <option value="black" defaultValue >Black</option>
                                    <option value="white">White</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="purple">Purple</option>
                                </select>
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textFamily2">Font-family:</label>
                                <select id="textFamily2" onChange={(e) => this.props.text(e)}>
                                    <option value="Oxygen" defaultValue >Oxygen</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Poppins">Poppins</option>
                                    <option value="Roboto">Roboto</option>
                                    <option value="Rubik">Rubik</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-control">
                            <div className="text-control-inside">
                                <label htmlFor="textSize2">Size:</label>
                                <input id="textSize2" className="text-size-control" type="text" value={this.props.textSize2} onChange={(e) => this.props.text(e)} />
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textStyle2">Style:</label>
                                <select id="textStyle2" onChange={(e) => this.props.text(e)}>
                                    <option value="normal" defaultValue >Normal</option>
                                    <option value="bold">Bold</option>
                                    <option value="italic">Italic</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="controlRGB light-blue controles-box">
                        <div className="btn-control-box">
                            <h5 htmlFor="text3">Third Text:</h5>
                            <input className="input-control" id="text3" type="text" value={this.props.text3} onChange={(e) => this.props.text(e)} />
                        </div>
                        <div className="text-control bottom">
                            <div className="text-control-inside">
                                <label htmlFor="textFill3">Color:</label>
                                <select id="textFill3" onChange={(e) => this.props.text(e)}>
                                    <option value="black" defaultValue >Black</option>
                                    <option value="white">White</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="purple">Purple</option>
                                </select>
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textFamily3">Font-family:</label>
                                <select id="textFamily3" onChange={(e) => this.props.text(e)}>
                                    <option value="Oxygen" defaultValue >Oxygen</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Poppins">Poppins</option>
                                    <option value="Roboto">Roboto</option>
                                    <option value="Rubik">Rubik</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-control">
                            <div className="text-control-inside">
                                <label htmlFor="textSize3">Size:</label>
                                <input id="textSize3" className="text-size-control" type="text" value={this.props.textSize3} onChange={(e) => this.props.text(e)} />
                            </div>
                            <div className="text-control-inside">
                                <label htmlFor="textStyle3">Style:</label>
                                <select id="textStyle3" onChange={(e) => this.props.text(e)}>
                                    <option value="normal" defaultValue >Normal</option>
                                    <option value="bold">Bold</option>
                                    <option value="italic">Italic</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
