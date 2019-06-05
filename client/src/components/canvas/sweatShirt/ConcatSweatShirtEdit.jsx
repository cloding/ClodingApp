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
            shirtFront: 'https://res.cloudinary.com/dgp1wgz95/image/upload/v1559726308/Cloding/wear/sweatShirtFront_nnziau.png',
            shirtBack: 'https://res.cloudinary.com/dgp1wgz95/image/upload/v1559726308/Cloding/wear/sweatShirtBack_lenqsp.png',
            red: '255',
            blue: '255',
            green: '255',
            tFrontGroup: [146, 182, 180, 161, 189, 168, 216, 174, 240, 182, 289, 171, 300, 161, 333, 181, 340, 186, 343, 192,
                349, 220, 355, 264, 364, 356, 369, 402, 370, 412, 366, 421, 361, 426, 363, 447, 354, 450, 336, 452, 332, 429,
                328, 417, 328, 408, 328, 403, 325, 378, 322, 362, 318, 324, 314, 301, 310, 284, 311, 317, 312, 326, 317, 339,
                319, 356, 320, 368, 321, 399, 322, 433, 304, 437, 238, 441, 174, 437, 155, 432, 160, 386, 162, 371, 163, 349,
                167, 332, 167, 297, 153, 398, 152, 408, 152, 421, 151, 425, 149, 428, 147, 450, 140, 451, 118, 449, 119, 426,
                113, 419, 110, 410, 120, 317, 123, 291, 124, 271, 132, 216, 137, 194, 141, 185, 146, 182],
            tBackGroup: [146, 182, 177, 164, 174, 153, 173, 140, 177, 125, 191, 78, 201, 55, 213, 43, 238, 39, 256, 41, 271,
                48, 280, 64, 292, 92, 299, 125, 302, 145, 302, 163, 333, 181, 340, 186, 343, 192, 349, 220, 355, 264, 364, 356,
                369, 402, 370, 412, 366, 421, 361, 426, 363, 447, 354, 450, 336, 452, 332, 429, 328, 417, 328, 408, 328, 403, 325,
                378, 322, 362, 318, 324, 314, 301, 310, 284, 311, 317, 312, 326, 317, 339, 319, 356, 320, 368, 321, 399, 322, 433,
                304, 437, 238, 441, 174, 437, 155, 432, 160, 386, 162, 371, 163, 349, 167, 332, 167, 297, 153, 398, 152, 408, 152,
                421, 151, 425, 149, 428, 147, 450, 140, 451, 118, 449, 119, 426, 113, 419, 110, 410, 120, 317, 123, 291, 124, 271,
                132, 216, 137, 194, 141, 185, 146, 182],
            front: {
                image1: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 200,
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
                    y: 200,
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
                    y: 200,
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
                    y: 200,
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
                    textY: 220
                },
                text2: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
                },
                text3: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
                },
                text4: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: 20,
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
                }
            },
            back: {
                image1: {
                    imageUrl: '',
                    imageUrlFix: '',
                    active: false,
                    x: 190,
                    y: 200,
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
                    y: 200,
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
                    y: 200,
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
                    y: 200,
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
                    textX: 190,
                    textY: 220
                },
                text2: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
                },
                text3: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
                },
                text4: {
                    text: '',
                    textFill: 'black',
                    textFamily: 'Oxygen',
                    textSize: '20',
                    textStyle: 'normal',
                    textRotation: 0,
                    textX: 190,
                    textY: 220
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
        newValue[id].textY = 220;
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
        newValue[id].y = 200;
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
