import React, { Component } from 'react'

export default class Controles extends Component {


    render() {
        console.log(this.props.blue)
        return (
            <React.Fragment>
                <div className="controlRGB light-blue controles-box">
                    <div className="range-control">
                        <label htmlFor="red">Red:</label>
                        <input id="red" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.props.rgbValue(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="green">Green:</label>
                        <input id="green" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.props.rgbValue(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="blue">Blue:</label>
                        <input id="blue" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.props.rgbValue(e)} />
                    </div>
                </div>
                <div className="controlRGB light-blue controles-box" >
                    <div className="btn-control-box">
                        <h5 id="firstImage">First image</h5>
                        <button type="button" name="firstImage" onClick={() => this.props.showWidget()} className="btn-control purple cursor">Upload</button>
                        <button type="button" onClick={() => this.props.deleteImage()} className="btn-control red cursor">Delete</button>
                    </div>
                    <div className="range-control">
                        <label htmlFor="opacity1">Opacity:</label>
                        <input id="opacity1" type="range" min="0" max="1" step="0.1" defaultValue="1" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="Hue1">Hue:</label>
                        <input id="hue1" type="range" min="0" max="259" step="1" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="saturation1">Saturation:</label>
                        <input id="saturation1" type="range" min="-2" max="10" step="0.5" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="value1">Value:</label>
                        <input id="value1" type="range" min="-2" max="2" step="0.1" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                </div>
                <div className="controlRGB light-blue controles-box">
                    <div className="btn-control-box">
                        <h5 id="secondImage">Second image</h5>
                        <button type="button" name="secondImage" onClick={() => this.props.showWidget2()} className="btn-control purple cursor">Upload</button>
                        <button type="button" onClick={() => this.props.deleteImage2()} className="btn-control red cursor">delete</button>
                    </div>
                    <div className="range-control">
                        <label htmlFor="opacity2">Opacity:</label>
                        <input id="opacity2" type="range" min="0" max="1" step="0.1" defaultValue="1" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="Hue2">Hue:</label>
                        <input id="hue2" type="range" min="0" max="259" step="1" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="saturation2">Saturation:</label>
                        <input id="saturation2" type="range" min="-2" max="10" step="0.5" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                    <div className="range-control">
                        <label htmlFor="value2">Value:</label>
                        <input id="value2" type="range" min="-2" max="2" step="0.1" defaultValue="0" onChange={(e) => this.props.effects(e)} />
                    </div>
                </div>
                <div className="controlRGB light-blue controles-box text-controles">
                    <div className="btn-control-box">
                        <h5 htmlFor="text1">First Text:</h5>
                        <input className="input-control" id="text1" type="text" defaultValue="" onChange={(e) => this.props.text(e)} />
                    </div>
                    <div className="text-control">
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
                        <label htmlFor="textFamily1">Font-family:</label>
                        <select id="textFamily1" onChange={(e) => this.props.text(e)}>
                            <option value="Oxygen" defaultValue >Oxygen</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Poppins">Poppins</option>
                            <option value="Roboto">Roboto</option>
                            <option value="Rubik">Rubik</option>
                        </select>
                    </div>
                    <div className="text-control">
                        <label htmlFor="textSize1">Size:</label>
                        <input id="textSize1" className="text-size-control" type="text" defaultValue="20" onChange={(e) => this.props.text(e)} />
                        <label htmlFor="textStyle1">Style:</label>
                        <select id="textStyle1" onChange={(e) => this.props.text(e)}>
                            <option value="normal" defaultValue >Normal</option>
                            <option value="bold">Bold</option>
                            <option value="italic">Italic</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="text2">Second Text:</label>
                    <input id="text2" type="text" defaultValue="" onChange={(e) => this.props.text(e)} />
                    <select id="textFill2" onChange={(e) => this.props.text(e)}>
                        <option value="black" defaultValue >Black</option>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                    </select>
                    <select id="textFamily2" onChange={(e) => this.props.text(e)}>
                        <option value="Oxygen" defaultValue >Oxygen</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Rubik">Rubik</option>
                    </select>
                    <input id="textSize2" type="text" defaultValue="20" onChange={(e) => this.props.text(e)} />
                    <select id="textStyle2" onChange={(e) => this.props.text(e)}>
                        <option value="normal" defaultValue >Normal</option>
                        <option value="bold">Bold</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="text3">Third Text:</label>
                    <input id="text3" type="text" defaultValue="" onChange={(e) => this.props.text(e)} />
                    <select id="textFill3" onChange={(e) => this.props.text(e)}>
                        <option value="black" defaultValue >Black</option>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                    </select>
                    <select id="textFamily3" onChange={(e) => this.props.text(e)}>
                        <option value="Oxygen" defaultValue >Oxygen</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Poppins">Poppins</option>
                        <option value="Roboto">Roboto</option>
                        <option value="Rubik">Rubik</option>
                    </select>
                    <input id="textSize3" type="text" defaultValue="20" onChange={(e) => this.props.text(e)} />
                    <select id="textStyle3" onChange={(e) => this.props.text(e)}>
                        <option value="normal" defaultValue >Normal</option>
                        <option value="bold">Bold</option>
                        <option value="italic">Italic</option>
                    </select>
                </div>
            </React.Fragment>
        )
    }
}
