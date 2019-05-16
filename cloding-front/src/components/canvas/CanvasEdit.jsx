import React, { Component } from 'react'
import TshirtStructure from './TshirtStructure';
import DesignService from "../../service/design-server";
import Form from '../form/Form';
import Controles from './Controles';

export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: {},
            designName: '',
            red: 255,
            blue: 255,
            green: 255,
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
                        imageUrl1: this.state.design.image1.url,
                        imageUrl2: this.state.design.image2.url,
                        imageUrlFix1: this.state.design.image1.url,
                        imageUrlFix2: this.state.design.image2.url,
                        active1: this.state.design.image1.active,
                        active2: this.state.design.image2.active,
                        x1: this.state.design.image1.x,
                        y1: this.state.design.image1.y,
                        x2: this.state.design.image2.x,
                        y2: this.state.design.image2.y,
                        opacity1: this.state.design.image1.opacity,
                        opacity2: this.state.design.image2.opacity,
                        scaleX1: this.state.design.image1.scaleX,
                        scaleY1: this.state.design.image1.scaleY,
                        scaleX2: this.state.design.image2.scaleX,
                        scaleY2: this.state.design.image2.scaleY,
                        rotation1: this.state.design.image1.rotation,
                        rotation2: this.state.design.image2.rotation,
                        hue1: this.state.design.image1.hue,
                        saturation1: this.state.design.image1.saturation,
                        value1: this.state.design.image1.value,
                        hue2: this.state.design.image2.hue,
                        saturation2: this.state.design.image2.saturation,
                        value2: this.state.design.image2.value,
                        text1: this.state.design.text1.text,
                        textFill1: this.state.design.text1.fill,
                        textFamily1: this.state.design.text1.family,
                        textSize1: this.state.design.text1.size,
                        textStyle1: this.state.design.text1.style,
                        textX1: this.state.design.text1.x,
                        textY1: this.state.design.text1.y,
                        text2: this.state.design.text2.text,
                        textFill2: this.state.design.text2.fill,
                        textFamily2: this.state.design.text2.family,
                        textSize2: this.state.design.text2.size,
                        textStyle2: this.state.design.text2.style,
                        textX2: this.state.design.text2.x,
                        textY2: this.state.design.text2.y,
                        text3: this.state.design.text3.text,
                        textFill3: this.state.design.text3.fill,
                        textFamily3: this.state.design.text3.family,
                        textSize3: this.state.design.text3.size,
                        textStyle3: this.state.design.text3.style,
                        textX3: this.state.design.text3.x,
                        textY3: this.state.design.text3.y,
                    }, () => {
                        this.forceUpdate()
                        this.setState({
                            ...this.state,
                            imageUrl1: "",
                            imageUrl2: ""
                        })
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

        this.service.updateDesign(designId, designName, red, green, blue, image1, image2, text1, text2, text3)
            .then(response => {
                console.log(response)
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
        //     "Image1: ",
        //     "url: " + this.state.imageUrlFix1,
        //     "url: " + this.state.imageUrl1,
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
                            <form onSubmit={this.updateDesign}>
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
}
