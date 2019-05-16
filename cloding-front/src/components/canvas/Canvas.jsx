import React, { Component } from 'react'
import TshirtStructure from './TshirtStructure';
import Controles from './Controles';
import DesignService from "../../service/design-server";
import { withRouter } from 'react-router-dom';
import Form from '../form/Form';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            designName: '',
            red: '255',
            blue: '255',
            green: '255',
            imageUrl1: '',
            imageUrl2: '',
            imageUrlFix1: '',
            imageUrlFix2: '',
            active1: false,
            active2: false,
            x1: 190,
            y1: 150,
            x2: 190,
            y2: 150,
            opacity1: 1,
            opacity2: 1,
            scaleX1: 1,
            scaleY1: 1,
            scaleX2: 1,
            scaleY2: 1,
            rotation1: 0,
            rotation2: 0,
            hue1: 0,
            saturation1: 0,
            value1: 0,
            hue2: 0,
            saturation2: 0,
            value2: 0,
            text1: '',
            textFill1: 'black',
            textFamily1: 'Oxygen',
            textSize1: '20',
            textStyle1: 'normal',
            textX1: '190',
            textY1: '150',
            text2: '',
            textFill2: 'black',
            textFamily2: 'Oxygen',
            textSize2: '20',
            textStyle2: 'normal',
            textX2: '190',
            textY2: '150',
            text3: '',
            textFill3: 'black',
            textFamily3: 'Oxygen',
            textSize3: '20',
            textStyle3: 'normal',
            textX3: '190',
            textY3: '150'
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
        const image1 = {
            url: this.state.imageUrlFix1,
            active: this.state.active1,
            opacity: this.state.opacity1,
            hue: this.state.hue1,
            value: this.state.value1,
            x: this.state.x1,
            y: this.state.y1,
            scaleX: this.state.scaleX1,
            scaleY: this.state.scaleY1,
            rotation: this.state.rotation1
        };
        const image2 = {
            url: this.state.imageUrlFix2,
            active: this.state.active2,
            opacity: this.state.opacity2,
            hue: this.state.hue2,
            value: this.state.value2,
            x: this.state.x2,
            y: this.state.y2,
            scaleX: this.state.scaleX2,
            scaleY: this.state.scaleY2,
            rotation: this.state.rotation2
        };
        const text1 = {
            text: this.state.text1,
            x: this.state.textX1,
            y: this.state.textY1,
            fill: this.state.textFill1,
            family: this.state.textFamily1,
            size: this.state.textSize1,
            style: this.state.textStyle1
        }
        const text2 = {
            text: this.state.text2,
            x: this.state.textX2,
            y: this.state.textY2,
            fill: this.state.textFill2,
            family: this.state.textFamily2,
            size: this.state.textSize2,
            style: this.state.textStyle2
        }
        const text3 = {
            text: this.state.text3,
            x: this.state.textX3,
            y: this.state.textY3,
            fill: this.state.textFill3,
            family: this.state.textFamily3,
            size: this.state.textSize3,
            style: this.state.textStyle3
        }

        this.service.saveDesign(userId, type, designName, red, green, blue, image1, image2, text1, text2, text3)
            .then(() => {
                this.props.history.push("/cart")
            })
            .catch(error => console.log(error))
    }

    handleChangeDesignName(e) {
        this.setState({
            ...this.state,
            designName: e.target.value
        })
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
            imageUrl1: result.info.secure_url,
            active1: true
        })
        if (result.event === 'success') {
            this.setState({
                ...this.state,
                imageUrlFix1: result.info.secure_url
            })
        }
    }

    checkUploadResult2(result) {
        this.setState({
            ...this.state,
            imageUrl2: result.info.secure_url,
            active2: true
        })
        if (result.event === 'success') {
            this.setState({
                ...this.state,
                imageUrlFix2: result.info.secure_url
            })
        }
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
            imageUrlFix1: '',
            active1: false,
            x1: 190,
            y1: 150,
            scaleX1: 1,
            scaleY1: 1,
            opacity1: 1,
            hue1: 0,
            saturation1: 0,
            value1: 0,
            rotation1: 0
        })
    }

    deleteImage2() {
        this.setState({
            ...this.state,
            imageUrlFix2: '',
            active2: false,
            x2: 190,
            y2: 150,
            scaleX2: 1,
            scaleY2: 1,
            opacity2: 1,
            hue2: 0,
            saturation2: 0,
            value2: 0,
            rotation2: 0,
        })
    }

    //Drag position
    handleDragEnd1 = e => {
        this.setState({
            ...this.state,
            x1: e.target.x(),
            y1: e.target.y()
        })
    }

    handleDragEnd2 = e => {
        this.setState({
            ...this.state,
            x2: e.target.x(),
            y2: e.target.y()
        })
    }

    handleDragEndText1 = e => {
        this.setState({
            ...this.state,
            textX1: e.target.attrs.x,
            textY1: e.target.attrs.y
        })
    }

    handleDragEndText2 = e => {
        this.setState({
            ...this.state,
            textX2: e.target.attrs.x,
            textY2: e.target.attrs.y
        })
    }

    handleDragEndText3 = e => {
        this.setState({
            ...this.state,
            textX3: e.target.attrs.x,
            textY3: e.target.attrs.y
        })
    }

    //Transform
    handleTransform1(e) {
        this.setState({
            ...this.state,
            scaleX1: e.currentTarget.attrs.scaleX,
            scaleY1: e.currentTarget.attrs.scaleY,
            rotation1: e.currentTarget.attrs.rotation
        })
    }

    handleTransform2(e) {
        this.setState({
            ...this.state,
            scaleX2: e.currentTarget.attrs.scaleX,
            scaleY2: e.currentTarget.attrs.scaleY,
            rotation2: e.currentTarget.attrs.rotation
        })
    }


    render() {
        // console.log(
        //     "T-shirt: ",
        //     "red: " + this.state.red,
        //     "green: " + this.state.green,
        //     "blue: " + this.state.blue
        // )

        // console.log(
        //     "Image1: ",
        //     "url: " + this.state.imageUrlFix1,
        //     "active: " + this.state.active1,
        //     "opacity: " + this.state.opacity1,
        //     "saturation: " + this.state.saturation1,
        //     "hue: " + this.state.hue1,
        //     "value: " + this.state.value1,
        //     "x: " + this.state.x1,
        //     "y: " + this.state.y1,
        //     "scaleX: " + this.state.scaleX1,
        //     "scaleY: " + this.state.scaleY1,
        //     "rotation: " + this.state.rotation1
        // )

        // console.log(
        //     "Image2: ",
        //     "url: " + this.state.imageUrl2,
        //     "active: " + this.state.active2,
        //     "opacity: " + this.state.opacity2,
        //     "saturation: " + this.state.saturation2,
        //     "hue: " + this.state.hue2,
        //     "value: " + this.state.value2,
        //     "x: " + this.state.x2,
        //     "y: " + this.state.y2,
        //     "scaleX: " + this.state.scaleX2,
        //     "scaleY: " + this.state.scaleY2,
        //     "rotation: " + this.state.rotation2
        // )

        // console.log(
        //     "Text1: ",
        //     "text: " + this.state.text1,
        //     "x: " + this.state.textX1,
        //     "y: " + this.state.textY1,
        //     "fill: " + this.state.textFill1,
        //     "family: " + this.state.textFamily1,
        //     "size: " + this.state.textSize1,
        //     "style: " + this.state.textStyle1
        // )

        // console.log(
        //     "Text2: ",
        //     "text: " + this.state.text2,
        //     "x: " + this.state.textX2,
        //     "y: " + this.state.textY2,
        //     "fill: " + this.state.textFill2,
        //     "family: " + this.state.textFamily2,
        //     "size: " + this.state.textSize2,
        //     "style: " + this.state.textStyle2
        // )

        // console.log(
        //     "Text3: ",
        //     "text: " + this.state.text3,
        //     "x: " + this.state.textX3,
        //     "y: " + this.state.textY3,
        //     "fill: " + this.state.textFill3,
        //     "family: " + this.state.textFamily3,
        //     "size: " + this.state.textSize3,
        //     "style: " + this.state.textStyle3
        // )


        if (this.props.user) {
            return (
                <React.Fragment>
                    <div className="pageStructure">
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
                                <form onSubmit={this.saveDesign}>
                                    <Form label="Design name" type="text" name="designName" value={this.state.designName} onchange={(e) => this.handleChangeDesignName(e)} ></Form>
                                    <input type="submit" className="btn orange cursor" value="Save" />
                                </form>
                            </div>
                            <div className="half-container" >
                                <TshirtStructure
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    text1={this.state.text1}
                                    textX1={this.state.textX1}
                                    textY1={this.state.textY1}
                                    textFill1={this.state.textFill1}
                                    textFamily1={this.state.textFamily1}
                                    textSize1={this.state.textSize1}
                                    textStyle1={this.state.textStyle1}
                                    text2={this.state.text2}
                                    textX2={this.state.textX2}
                                    textY2={this.state.textY2}
                                    textFill2={this.state.textFill2}
                                    textFamily2={this.state.textFamily2}
                                    textSize2={this.state.textSize2}
                                    textStyle2={this.state.textStyle2}
                                    text3={this.state.text3}
                                    textX3={this.state.textX3}
                                    textY3={this.state.textY3}
                                    textFill3={this.state.textFill3}
                                    textFamily3={this.state.textFamily3}
                                    textSize3={this.state.textSize3}
                                    textStyle3={this.state.textStyle3}
                                    imageUrl1={this.state.imageUrl1}
                                    imageUrl2={this.state.imageUrl2}
                                    x1={this.state.x1}
                                    y1={this.state.y1}
                                    x2={this.state.x2}
                                    y2={this.state.y2}
                                    scaleX1={this.state.scaleX1}
                                    scaleY1={this.state.scaleY1}
                                    scaleX2={this.state.scaleX2}
                                    scaleY2={this.state.scaleY2}
                                    rotation1={this.state.rotation1}
                                    rotation2={this.state.rotation2}
                                    active1={this.state.active1}
                                    active2={this.state.active2}
                                    opacity1={this.state.opacity1}
                                    opacity2={this.state.opacity2}
                                    hue1={this.state.hue1}
                                    saturation1={this.state.saturation1}
                                    value1={this.state.value1}
                                    hue2={this.state.hue2}
                                    saturation2={this.state.saturation2}
                                    value2={this.state.value2}
                                    dragPosition1={(e) => this.handleDragEnd1(e)}
                                    dragPosition2={(e) => this.handleDragEnd2(e)}
                                    transform1={(e) => this.handleTransform1(e)}
                                    transform2={(e) => this.handleTransform2(e)}
                                    dragText1={(e) => this.handleDragEndText1(e)}
                                    dragText2={(e) => this.handleDragEndText2(e)}
                                    dragText3={(e) => this.handleDragEndText3(e)}
                                />
                            </div>
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
                                    textX1={this.state.textX1}
                                    textY1={this.state.textY1}
                                    textFill1={this.state.textFill1}
                                    textFamily1={this.state.textFamily1}
                                    textSize1={this.state.textSize1}
                                    textStyle1={this.state.textStyle1}
                                    text2={this.state.text2}
                                    textX2={this.state.textX2}
                                    textY2={this.state.textY2}
                                    textFill2={this.state.textFill2}
                                    textFamily2={this.state.textFamily2}
                                    textSize2={this.state.textSize2}
                                    textStyle2={this.state.textStyle2}
                                    text3={this.state.text3}
                                    textX3={this.state.textX3}
                                    textY3={this.state.textY3}
                                    textFill3={this.state.textFill3}
                                    textFamily3={this.state.textFamily3}
                                    textSize3={this.state.textSize3}
                                    textStyle3={this.state.textStyle3}
                                    imageUrl1={this.state.imageUrl1}
                                    imageUrl2={this.state.imageUrl2}
                                    x1={this.state.x1}
                                    y1={this.state.y1}
                                    x2={this.state.x2}
                                    y2={this.state.y2}
                                    scaleX1={this.state.scaleX1}
                                    scaleY1={this.state.scaleY1}
                                    scaleX2={this.state.scaleX2}
                                    scaleY2={this.state.scaleY2}
                                    rotation1={this.state.rotation1}
                                    rotation2={this.state.rotation2}
                                    active1={this.state.active1}
                                    active2={this.state.active2}
                                    opacity1={this.state.opacity1}
                                    opacity2={this.state.opacity2}
                                    hue1={this.state.hue1}
                                    saturation1={this.state.saturation1}
                                    value1={this.state.value1}
                                    hue2={this.state.hue2}
                                    saturation2={this.state.saturation2}
                                    value2={this.state.value2}
                                    dragPosition1={(e) => this.handleDragEnd1(e)}
                                    dragPosition2={(e) => this.handleDragEnd2(e)}
                                    transform1={(e) => this.handleTransform1(e)}
                                    transform2={(e) => this.handleTransform2(e)}
                                    dragText1={(e) => this.handleDragEndText1(e)}
                                    dragText2={(e) => this.handleDragEndText2(e)}
                                    dragText3={(e) => this.handleDragEndText3(e)}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default withRouter(Canvas)