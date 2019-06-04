import React, { Component } from 'react'
import TshirtStructure from './sweatShirtStructure';
import DesignService from "../../../service/design-server";
import Form from '../../form/Form';
import Controles from '../Controles';

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: {},
            designName: '',
            layer: false,
            shirtFront: 'https://res.cloudinary.com/dgp1wgz95/image/upload/v1557582263/Cloding/wear/t-shirt_gdawk3.png',
            shirtBack: 'https://res.cloudinary.com/dgp1wgz95/image/upload/v1559644869/Cloding/wear/tShirtBack_nh2lpl.png',
            red: '255',
            blue: '255',
            green: '255',
            tFrontGroup: [114, 80, 179, 55, 179, 55, 179, 100, 309, 100, 309, 54, 371, 75, 384, 84, 409, 120, 444, 181,
                441, 188, 427, 201, 391, 222, 372, 230, 355, 206, 358, 440, 356, 442, 301, 445, 180, 445, 127, 440, 129, 403,
                130, 392, 128, 209, 114, 233, 90, 223, 53, 199, 44, 191, 42, 184, 95, 95, 104, 86, 114, 80],
            tBackGroup: [114, 80, 187, 54, 187, 54, 187, 35, 297, 35, 297, 54, 371, 75, 384, 84, 409, 120, 445, 187,
                441, 193, 429, 206, 393, 228, 372, 236, 356, 212, 358, 440, 356, 442, 301, 445, 148, 445, 127, 440, 129, 403,
                130, 392, 128, 209, 114, 233, 90, 223, 53, 199, 44, 191, 42, 184, 95, 95, 104, 86, 114, 80],
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
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 150
                },
                text2: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 150
                },
                text3: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 150
                },
                text4: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 150
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

    componentDidMount() {

        this.service.uploadDesign(this.props.match.params.id)
            .then(theDesign => {
                const Design = theDesign

                this.setState({
                    ...this.state,
                    design: Design
                }, () => {
                    this.setState({
                        ...this.state,
                        designName: this.state.design.designName,
                        red: this.state.design.red,
                        blue: this.state.design.blue,
                        green: this.state.design.green,
                        front: this.state.design.front,
                        back: this.state.design.back
                    }, () => {
                        this.forceUpdate();
                        let front = Object.assign({}, this.state.front);
                        front.image1.imageUrl = '';
                        front.image2.imageUrl = '';
                        front.image3.imageUrl = '';
                        front.image4.imageUrl = '';
                        let back = Object.assign({}, this.state.back);
                        back.image1.imageUrl = '';
                        back.image2.imageUrl = '';
                        back.image3.imageUrl = '';
                        back.image4.imageUrl = '';
                        this.setState({ front, back });
                    })
                })
            })
    }

    //Update design
    updateDesign = (event) => {
        event.preventDefault();
        const designId = this.props.match.params.id;
        const designName = this.state.designName;
        const red = this.state.red;
        const green = this.state.green;
        const blue = this.state.blue;
        const front = this.state.front;
        const back = this.state.back;

        this.service.updateDesign(designId, designName, red, green, blue, front, back)
            .then()
            .catch(error => console.log(error))
    }

    //ChangeLayer
    changeLayer() {
        this.setState({
            ...this.state,
            layer: !this.state.layer
        })
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
        newValue[id].textSize = 20;
        newValue[id].textStyle = 'normal';
        newValue[id].textRotation = 0;
        newValue[id].textX = 190;
        newValue[id].textY = 150;
        this.setState({ newValue });
    }

    //Effects
    effects(e, side) {
        const { id, name, value } = e.currentTarget;
        let newValue = Object.assign({}, this.state[side]);
        newValue[id][name] = value
        this.setState({ newValue });
    }

    //Cloudinary
    checkUploadResult(result, id, side) {
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].imageUrl = result.info.secure_url;
        newValue[id].active = true;
        this.setState({ newValue });
        if (result.event === 'success') {
            newValue[id].imageUrlFix = result.info.secure_url
            this.setState({ newValue });
        }
    }

    showWidget(e, side) {
        const { id } = e.currentTarget;
        let widget = window.cloudinary.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET
        }, (error, result) => { this.checkUploadResult(result, id, side) })
        widget.open();
    }

    //delete image
    deleteImage(e, side) {
        const { id } = e.currentTarget;
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].imageUrlFix = '';
        newValue[id].active = false;
        newValue[id].x = 190;
        newValue[id].y = 150;
        newValue[id].scaleX = 1;
        newValue[id].scaleY = 1;
        newValue[id].opacity = 1;
        newValue[id].hue = 0;
        newValue[id].saturation = 0;
        newValue[id].value = 0;
        newValue[id].rotation = 0;
        this.setState({ newValue });
    }

    //Drag position
    handleDragEnd(e, side) {
        const id = (e.target.attrs.name)
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].x = e.target.x();
        newValue[id].y = e.target.y();
        this.setState({ newValue });
    }

    //Transform
    handleTransform(e, side) {
        const id = (e.currentTarget.attrs.name)
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].scaleX = e.currentTarget.attrs.scaleX;
        newValue[id].scaleY = e.currentTarget.attrs.scaleY;
        newValue[id].rotation = e.currentTarget.attrs.rotation;
        this.setState({ newValue });
    }

    //Drag text
    handleDragEndText(e, side) {
        const id = (e.target.attrs.id);
        let newValue = Object.assign({}, this.state[side]);
        newValue[id].textX = e.target.attrs.x;
        newValue[id].textY = e.target.attrs.y;
        this.setState({ newValue });
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white">
                        <div className="half-container padding-canvas">
                            <div className="canvas-title"><h2>{this.state.designName}</h2><button type="button" className="btn light-blue cursor" onClick={() => this.changeLayer()}>{(this.state.layer ? 'Front' : 'Back')}</button></div>
                            <div className={`${(this.state.layer ? 'layerHidden' : 'layerShow')}`}>
                                <Controles
                                    red={this.state.red}
                                    green={this.state.green}
                                    blue={this.state.blue}
                                    side="front"
                                    values={this.state.front}
                                    rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
                                    showWidget={(e, side) => this.showWidget(e, side)}
                                    deleteImage={(e, side) => this.deleteImage(e, side)}
                                    deleteText={(e, side) => this.deleteText(e, side)}
                                    text={(e, side) => this.text(e, side)}
                                    effects={(e, side) => this.effects(e, side)}
                                />
                            </div>
                            <div className={`${(this.state.layer ? 'layerShow' : 'layerHidden')}`}>
                                <Controles
                                    red={this.state.red}
                                    green={this.state.green}
                                    blue={this.state.blue}
                                    side="back"
                                    values={this.state.back}
                                    rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
                                    showWidget={(e, side) => this.showWidget(e, side)}
                                    deleteImage={(e, side) => this.deleteImage(e, side)}
                                    deleteText={(e, side) => this.deleteText(e, side)}
                                    text={(e, side) => this.text(e, side)}
                                    effects={(e, side) => this.effects(e, side)}
                                />
                            </div>
                            <form className="form-save-design" onSubmit={this.updateDesign}>
                                <div className="form-inside-design">
                                    <Form labelCss="label-design-name" inputCss="input-design-name-canvas" label="Design name" type="text" name="designName" value={this.state.designName} onchange={(e) => this.handleChangeDesignName(e)} ></Form>
                                </div>
                                <input type="submit" className="btn orange cursor" value="Save" />
                            </form>
                        </div>
                        <div className="half-container" >
                            <div className={`${(this.state.layer ? 'layerHidden' : 'layerShow')}`}>
                                <TshirtStructure
                                    group={this.state.tFrontGroup}
                                    shirt={this.state.shirtFront}
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    values={this.state.front}
                                    side="front"
                                    dragPosition={(e, side) => this.handleDragEnd(e, side)}
                                    transform={(e, side) => this.handleTransform(e, side)}
                                    dragText={(e, side) => this.handleDragEndText(e, side)}
                                />
                            </div>
                            <div className={`${(this.state.layer ? 'layerShow' : 'layerHidden')}`}>
                                <TshirtStructure
                                    group={this.state.tBackGroup}
                                    shirt={this.state.shirtBack}
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    values={this.state.back}
                                    side="back"
                                    dragPosition={(e, side) => this.handleDragEnd(e, side)}
                                    transform={(e, side) => this.handleTransform(e, side)}
                                    dragText={(e, side) => this.handleDragEndText(e, side)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
