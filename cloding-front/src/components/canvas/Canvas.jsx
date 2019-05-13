import React, { Component } from 'react'
import TshirtStructure from './TshirtStructure';
import Controles from './Controles';

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            red: '255',
            blue: '255',
            green: '255',
            imageUrl: '',
            width: 0,
            height: 0,
            imageUrl2: '',
            width2: 0,
            height2: 0,
            active1: false,
            active2: false,
            opacity1: 1,
            opacity2: 1,
            text1:'',
            textFill1:'black',
            textFamily1:'Oxygen',
            textSize1:'20',
            textStyle1:'normal',
            text2:'',
            textFill2:'black',
            textFamily2:'Oxygen',
            textSize2:'20',
            textStyle2:'normal',
            text3:'',
            textFill3:'black',
            textFamily3:'Oxygen',
            textSize3:'20',
            textStyle3:'normal'

        }
    }

    //Rgb T-shirt Color
    rgbValue(e) {
        const { id, value } = e.target;
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    //Text
    text(e) {
        const { id, value } = e.target;
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    //Text
    effects(e) {
        const { id, value } = e.target;
        this.setState({
            ...this.state,
            [id]: value
        })
    }

    //Cloudinary
    checkUploadResult(result) {
        this.setState({
            ...this.state,
            imageUrl: result.info.secure_url,
            width: 100,
            height: 100,
            active1: true
        })
    }

    checkUploadResult2(result) {
        this.setState({
            ...this.state,
            imageUrl2: result.info.secure_url,
            width2: 100,
            height2: 100,
            active2: true

        })
    }

    showWidget() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dgp1wgz95",
            uploadPreset: "cloding-preset"
        }, (error, result) => { this.checkUploadResult(result) })
        widget.open();
    }

    showWidget2() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dgp1wgz95",
            uploadPreset: "cloding-preset"
        }, (error, result) => { this.checkUploadResult2(result) })
        widget.open();
    }

    //delete image
    deleteImage() {
        this.setState({
            ...this.state,
            active1: false
        })
    }

    deleteImage2() {
        this.setState({
            ...this.state,
            active2: false
        })
    }


    render() {
        console.log(this.state.textFill1)
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
                                <Controles
                                    rgbValue={(e) => this.rgbValue(e)}
                                    showWidget={() => this.showWidget()}
                                    showWidget2={() => this.showWidget2()}
                                    deleteImage={() => this.deleteImage()}
                                    deleteImage2={() => this.deleteImage2()}
                                    text={(e) => this.text(e)}
                                    effects={(e) => this.effects(e)}
                                />
                            </div>
                            <div className="half-container" >
                                <TshirtStructure
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    text1={this.state.text1}
                                    textFill1={this.state.textFill1}
                                    textFamily1={this.state.textFamily1}
                                    textSize1={this.state.textSize1}
                                    textStyle1={this.state.textStyle1}
                                    text2={this.state.text2}
                                    textFill2={this.state.textFill2}
                                    textFamily2={this.state.textFamily2}
                                    textSize2={this.state.textSize2}
                                    textStyle2={this.state.textStyle2}
                                    text3={this.state.text3}
                                    textFill3={this.state.textFill3}
                                    textFamily3={this.state.textFamily3}
                                    textSize3={this.state.textSize3}
                                    textStyle3={this.state.textStyle3}
                                    imageUrl={this.state.imageUrl}
                                    width={this.state.width}
                                    height={this.state.height}
                                    imageUrl2={this.state.imageUrl2}
                                    width2={this.state.width2}
                                    height2={this.state.height2}
                                    active1={this.state.active1}
                                    active2={this.state.active2}
                                    opacity1={this.state.opacity1}
                                    opacity2={this.state.opacity2}

                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}
