import React, { Component } from 'react'
import TshirtStructure from './TshirtStructure';

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            red: '255',
            blue: '255',
            green: '255',
            imageUrl:'',
            width: 0, 
            height:0,
            imageUrl2:'',
            width2: 0, 
            height2:0
        }
    }

    rgbValue(e) {
        const { id, value } = e.target;
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    checkUploadResult(result) {
        this.setState({
            ...this.state,
            imageUrl : result.info.secure_url,
            width:100,
            height:100
        })
    }

    // deleteImage() {
    //     this.setState({
    //         ...this.state,
    //         done: true
    //     })
    // }

    showWidget() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dgp1wgz95",
            uploadPreset: "cloding-preset"
        }, (error, result) => {this.checkUploadResult(result)} )
        widget.open();
    }

    checkUploadResult2(result) {
        this.setState({
            ...this.state,
            imageUrl2 : result.info.secure_url,
            width2:100,
            height2:100

        })
    }

    showWidget2() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dgp1wgz95",
            uploadPreset: "cloding-preset"
        }, (error, result) => {this.checkUploadResult2(result)} )
        widget.open();
    }


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
                    <div className="pageStructure" >
                        <div className="container white">
                            <div className="half-container">
                                <div className="controlRGB">
                                    <label htmlFor="red">Red:</label>
                                    <input id="red" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.rgbValue(e)} />
                                    <label htmlFor="green">Green:</label>
                                    <input id="green" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.rgbValue(e)} />
                                    <label htmlFor="blue">Blue:</label>
                                    <input id="blue" type="range" min="0" max="255" step="1" defaultValue="255" onChange={(e) => this.rgbValue(e)} />
                                </div>
                                <div>
                                    <label id="firstImage">First image</label>
                                    <button type="button" name="firstImage" onClick={() => this.showWidget()} className="btn orange cursor">Upload</button>
                                    <button type="button" onClick={() => this.deleteImage()} className="btn orange cursor">delete</button>
                                </div>
                                <div>
                                    <label id="secondImage">First image</label>
                                    <button type="button" name="secondImage" onClick={() => this.showWidget2()} className="btn orange cursor">Upload</button>
                                    <button type="button" onClick={() => this.deleteImage()} className="btn orange cursor">delete</button>
                                </div>
                            </div>
                            <div className="half-container" >
                                <TshirtStructure
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    imageUrl={this.state.imageUrl}
                                    width={this.state.width}
                                    height={this.state.height}
                                    imageUrl2={this.state.imageUrl2}
                                    width2={this.state.width2}
                                    height2={this.state.height2}
                                    // chargeImage={(result) => this.checkUploadResult(result)}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}
