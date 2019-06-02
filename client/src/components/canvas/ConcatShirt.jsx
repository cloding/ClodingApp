import React, { Component } from 'react'
import DesignService from "../../service/design-server";
import { withRouter } from 'react-router-dom';
import Form from '../form/Form';
import Controles from './Controles';
import TshirtStructure from './TshirtStructure';

class ConcatShirt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            designName: 'Design name',
            red: '255',
            blue: '255',
            green: '255',
            front: {
                image1: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image2: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image3: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image4: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                text1: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text2: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text3: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text4: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                }
            },
            back: {
                image1: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image2: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image3: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                image4: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 150,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0,
                    hue: 0,
                    saturation: 0,
                    value: 0
                },
                text1: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text2: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text3: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                },
                text4: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: '190',
                    textY: '150',
                }
            }
        }

        this.service = new DesignService();
    }

    //Save design
    saveDesign = (event) => {
        event.preventDefault();
        const userId = this.props.user._id;
        const type = "t-shirt";
        const designName = this.state.designName;
        const red = this.state.red;
        const green = this.state.green;
        const blue = this.state.blue;
        const front = this.state.front;
        const back = this.state.back;

        this.service.saveDesign(userId, type, designName, red, green, blue, front, back)
            .then(() => {
                this.props.history.push("/cart")
            })
            .catch(error => console.log(error))
    }

    //Design Name
    handleChangeDesignName(e) {
        this.setState({
            ...this.state,
            designName: e.target.value
        })
    }

    //Rgb T-shirt Color
    rgbValue(red, green, blue) {
        this.setState({
            ...this.state,
            red: red,
            green: green,
            blue: blue
        })
    }

    //Text
    text(e, side) {
        const { id, value, name } = e.currentTarget;
        let newValue = Object.assign({}, this.state[side]);
        newValue[id][name] = value
        this.setState({ newValue });
    }

    //delete text
    deleteText(e, side) {
        const { id } = e.currentTarget;
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].text = '';
        newValue[id].textFill = 'black';
        newValue[id].textFamily = 'Oxygen';
        newValue[id].textSize = '20';
        newValue[id].textStyle = 'normal';
        newValue[id].textRotation = 0;
        newValue[id].textX = '190';
        newValue[id].textY = '150';
        this.setState({ newValue });
    }

    // //Effects
    // effects(e) {
    //     const { id, value } = e.target;
    //     this.setState({
    //         ...this.state,
    //         [id]: value
    //     })
    // }

    // //Cloudinary
    // checkUploadResult(result, id) {
    //     const imageUrl = `imageUrl${id}`;
    //     const active = `active${id}`;
    //     const imageUrlFix = `imageUrlFix${id}`;

    //     this.setState({
    //         ...this.state,
    //         [imageUrl]: result.info.secure_url,
    //         [active]: true
    //     })
    //     if (result.event === 'success') {
    //         this.setState({
    //             ...this.state,
    //             [imageUrlFix]: result.info.secure_url
    //         })
    //     }
    // }

    // showWidget(e) {
    //     const { id } = e.currentTarget;
    //     let widget = window.cloudinary.createUploadWidget({
    //         cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
    //         uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET,
    //         cropping: true
    //     }, (error, result) => { this.checkUploadResult(result, id) })
    //     widget.open();
    // }

    // //delete image
    // deleteImage(e) {
    //     const { id } = e.currentTarget;
    //     const imageUrlFix = `imageUrlFix${id}`;
    //     const active = `active${id}`;
    //     const x = `x${id}`;
    //     const y = `y${id}`;
    //     const scaleX = `scaleX${id}`;
    //     const scaleY = `scaleY${id}`;
    //     const opacity = `opacity${id}`;
    //     const hue = `hue${id}`;
    //     const saturation = `saturation${id}`;
    //     const value = `value${id}`;
    //     const rotation = `rotation${id}`;

    //     this.setState({
    //         ...this.state,
    //         [imageUrlFix]: '',
    //         [active]: false,
    //         [x]: 190,
    //         [y]: 150,
    //         [scaleX]: 1,
    //         [scaleY]: 1,
    //         [opacity]: 1,
    //         [hue]: 0,
    //         [saturation]: 0,
    //         [value]: 0,
    //         [rotation]: 0
    //     });
    // }

    // //Drag position
    // handleDragEnd(e) {
    //     const id = (e.target.attrs.name).slice(-1)[0];
    //     const x = `x${id}`;
    //     const y = `y${id}`;

    //     this.setState({
    //         ...this.state,
    //         [x]: e.target.x(),
    //         [y]: e.target.y()
    //     })
    // }

    // //Transform
    // handleTransform(e) {
    //     const id = (e.currentTarget.attrs.name).slice(-1)[0];
    //     const scaleX = `scaleX${id}`;
    //     const scaleY = `scaleY${id}`;
    //     const rotation = `rotation${id}`;

    //     this.setState({
    //         ...this.state,
    //         [scaleX]: e.currentTarget.attrs.scaleX,
    //         [scaleY]: e.currentTarget.attrs.scaleY,
    //         [rotation]: e.currentTarget.attrs.rotation
    //     })
    // }

    // //Drag text
    // handleDragEndText(e) {
    //     console.log(e.target.attrs)
    //     const id = (e.target.attrs.id).slice(-1)[0];
    //     const textX = `textX${id}`;
    //     const textY = `textY${id}`;

    //     this.setState({
    //         ...this.state,
    //         [textX]: e.target.attrs.x,
    //         [textY]: e.target.attrs.y
    //     })
    // }


    render() {
        if (this.props.user) {
            return (
                <React.Fragment>
                    <div className="pageStructure">
                        <div className="container white">
                            <div className="half-container padding-canvas">
                                <h2>{this.state.designName}</h2>
                                <Controles
                                    red={this.state.red}
                                    green={this.state.green}
                                    blue={this.state.blue}
                                    side="front"
                                    values={this.state.front}
                                    rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
                                    showWidget={(e) => this.showWidget(e)}
                                    deleteImage={(e) => this.deleteImage(e)}
                                    deleteText={(e, side) => this.deleteText(e, side)}
                                    text={(e, side) => this.text(e, side)}
                                    effects={(e) => this.effects(e)}
                                />
                                <form className="form-save-design" onSubmit={this.saveDesign}>
                                    <div className="form-inside-design">
                                        <Form labelCss="label-design-name" inputCss="input-design-name-canvas" label="Design name" type="text" name="designName" value={this.state.designName} onchange={(e) => this.handleChangeDesignName(e)} ></Form>
                                    </div>
                                    <input type="submit" className="btn orange cursor" value="Save" />
                                </form>
                            </div>
                            <div className="half-container" >
                            </div>
                        </div>
                    </div>
                    {/* <Canvas front={this.state.front} /> */}
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className="pageStructure" >
                        <div className="container white">
                            <div className="half-container padding-canvas">
                                <h2>T-shirt designer</h2>
                                <Controles
                                    red={this.state.red}
                                    green={this.state.green}
                                    blue={this.state.blue}
                                    side="front"
                                    values={this.state.front}
                                    rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
                                    showWidget={(e) => this.showWidget(e)}
                                    deleteImage={(e) => this.deleteImage(e)}
                                    deleteText={(e, side) => this.deleteText(e, side)}
                                    text={(e, side) => this.text(e, side)}
                                    effects={(e) => this.effects(e)}
                                />
                                <div className="demo-advisor">
                                    <h5>This is a demo version, for buy your creation you must be logged in.</h5>
                                </div>
                            </div>
                            <div className="half-container" >
                            <TshirtStructure
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    values={this.state.front}
                                    dragPosition={(e) => this.handleDragEnd(e)}
                                    transform={(e) => this.handleTransform(e)}
                                    dragText={(e) => this.handleDragEndText(e)}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}


export default withRouter(ConcatShirt)
