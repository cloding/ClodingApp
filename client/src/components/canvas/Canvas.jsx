import React, { Component } from 'react'
import TshirtStructure from './TshirtStructure';
import { withRouter } from 'react-router-dom';

class Canvas extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         designName: 'Design name',
    //         red: '255',
    //         blue: '255',
    //         green: '255',
    //         imageUrl1: '',
    //         imageUrl2: '',
    //         imageUrlFix1: '',
    //         imageUrlFix2: '',
    //         active1: false,
    //         active2: false,
    //         x1: 190,
    //         y1: 150,
    //         x2: 190,
    //         y2: 150,
    //         opacity1: 1,
    //         opacity2: 1,
    //         scaleX1: 1,
    //         scaleY1: 1,
    //         scaleX2: 1,
    //         scaleY2: 1,
    //         rotation1: 0,
    //         rotation2: 0,
    //         hue1: 0,
    //         saturation1: 0,
    //         value1: 0,
    //         hue2: 0,
    //         saturation2: 0,
    //         value2: 0,
    //         imageUrl3: '',
    //         imageUrl4: '',
    //         imageUrlFix3: '',
    //         imageUrlFix4: '',
    //         active3: false,
    //         active4: false,
    //         x3: 190,
    //         y3: 150,
    //         x4: 190,
    //         y4: 150,
    //         opacity3: 1,
    //         opacity4: 1,
    //         scaleX3: 1,
    //         scaleY3: 1,
    //         scaleX4: 1,
    //         scaleY4: 1,
    //         rotation3: 0,
    //         rotation4: 0,
    //         hue3: 0,
    //         saturation3: 0,
    //         value3: 0,
    //         hue4: 0,
    //         saturation4: 0,
    //         value4: 0,
    //         text1: '',
    //         textFill1: 'black',
    //         textFamily1: 'Oxygen',
    //         textSize1: '20',
    //         textStyle1: 'normal',
    //         textRotation1: 0,
    //         textX1: '190',
    //         textY1: '150',
    //         text2: '',
    //         textFill2: 'black',
    //         textFamily2: 'Oxygen',
    //         textSize2: '20',
    //         textStyle2: 'normal',
    //         textRotation2: 0,
    //         textX2: '190',
    //         textY2: '150',
    //         text3: '',
    //         textFill3: 'black',
    //         textFamily3: 'Oxygen',
    //         textSize3: '20',
    //         textStyle3: 'normal',
    //         textRotation3: 0,
    //         textX3: '190',
    //         textY3: '150',
    //         text4: '',
    //         textFill4: 'black',
    //         textFamily4: 'Oxygen',
    //         textSize4: '20',
    //         textStyle4: 'normal',
    //         textRotation4: 0,
    //         textX4: '190',
    //         textY4: '150'
    //     }

    //     this.service = new DesignService();
    // }

    // //Save design
    // saveDesign = (event) => {
    //     event.preventDefault();
    //     const userId = this.props.user._id;
    //     const type = "t-shirt";
    //     const designName = this.state.designName;
    //     const red = this.state.red;
    //     const green = this.state.green;
    //     const blue = this.state.blue;
    //     const image1 = {
    //         url: this.state.imageUrlFix1,
    //         active: this.state.active1,
    //         opacity: this.state.opacity1,
    //         hue: this.state.hue1,
    //         value: this.state.value1,
    //         saturation: this.state.saturation1,
    //         x: this.state.x1,
    //         y: this.state.y1,
    //         scaleX: this.state.scaleX1,
    //         scaleY: this.state.scaleY1,
    //         rotation: this.state.rotation1
    //     };
    //     const image2 = {
    //         url: this.state.imageUrlFix2,
    //         active: this.state.active2,
    //         opacity: this.state.opacity2,
    //         hue: this.state.hue2,
    //         value: this.state.value2,
    //         saturation: this.state.saturation1,
    //         x: this.state.x2,
    //         y: this.state.y2,
    //         scaleX: this.state.scaleX2,
    //         scaleY: this.state.scaleY2,
    //         rotation: this.state.rotation2
    //     };
    //     const image3 = {
    //         url: this.state.imageUrlFix3,
    //         active: this.state.active3,
    //         opacity: this.state.opacity3,
    //         hue: this.state.hue3,
    //         value: this.state.value3,
    //         saturation: this.state.saturation3,
    //         x: this.state.x3,
    //         y: this.state.y3,
    //         scaleX: this.state.scaleX3,
    //         scaleY: this.state.scaleY3,
    //         rotation: this.state.rotation3
    //     };
    //     const image4 = {
    //         url: this.state.imageUrlFix4,
    //         active: this.state.active4,
    //         opacity: this.state.opacity4,
    //         hue: this.state.hue4,
    //         value: this.state.value4,
    //         saturation: this.state.saturation1,
    //         x: this.state.x4,
    //         y: this.state.y4,
    //         scaleX: this.state.scaleX4,
    //         scaleY: this.state.scaleY4,
    //         rotation: this.state.rotation4
    //     };
    //     const text1 = {
    //         text: this.state.text1,
    //         x: this.state.textX1,
    //         y: this.state.textY1,
    //         fill: this.state.textFill1,
    //         family: this.state.textFamily1,
    //         size: this.state.textSize1,
    //         style: this.state.textStyle1,
    //         rotation: this.state.textRotation1
    //     }
    //     const text2 = {
    //         text: this.state.text2,
    //         x: this.state.textX2,
    //         y: this.state.textY2,
    //         fill: this.state.textFill2,
    //         family: this.state.textFamily2,
    //         size: this.state.textSize2,
    //         style: this.state.textStyle2,
    //         rotation: this.state.textRotation2
    //     }
    //     const text3 = {
    //         text: this.state.text3,
    //         x: this.state.textX3,
    //         y: this.state.textY3,
    //         fill: this.state.textFill3,
    //         family: this.state.textFamily3,
    //         size: this.state.textSize3,
    //         style: this.state.textStyle3,
    //         rotation: this.state.textRotation3
    //     }
    //     const text4 = {
    //         text: this.state.text4,
    //         x: this.state.textX4,
    //         y: this.state.textY4,
    //         fill: this.state.textFill4,
    //         family: this.state.textFamily4,
    //         size: this.state.textSize4,
    //         style: this.state.textStyle4,
    //         rotation: this.state.textRotation4
    //     }

    //     this.service.saveDesign(userId, type, designName, red, green, blue, image1, image2, image3, image4, text1, text2, text3, text4)
    //         .then(() => {
    //             this.props.history.push("/cart")
    //         })
    //         .catch(error => console.log(error))
    // }

    // handleChangeDesignName(e) {
    //     this.setState({
    //         ...this.state,
    //         designName: e.target.value
    //     })
    // }

    // //Rgb T-shirt Color
    // rgbValue(red, green, blue) {
    //     this.setState({
    //         ...this.state,
    //         red: red,
    //         green: green,
    //         blue: blue
    //     })
    // }

    // //Text
    // text(e) {
    //     const { id, value } = e.target;
    //     this.setState({
    //         ...this.state,
    //         [id]: value
    //     })
    // }

    // //delete text
    // deleteText(e) {
    //     const { id } = e.currentTarget;
    //     const text = `text${id}`;
    //     const textFill = `textFill${id}`;
    //     const textFamily = `textFamily${id}`;
    //     const textSize = `textSize${id}`;
    //     const textStyle = `textStyle${id}`;
    //     const textRotation = `textRotation${id}`;
    //     const textX = `textX${id}`;
    //     const textY = `textY${id}`;

    //     this.setState({
    //         ...this.state,
    //         [text]: '',
    //         [textFill]: 'black',
    //         [textFamily]: 'Oxygen',
    //         [textSize]: '20',
    //         [textStyle]: 'normal',
    //         [textRotation]: 0,
    //         [textX]: '190',
    //         [textY]: '150',
    //     });
    // }

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
        // if (this.props.user) {
            return (
                <React.Fragment>
                    {/* <div className="pageStructure">
                        <div className="container white">
                            <div className="half-container padding-canvas">
                                <h2>{this.state.designName}</h2>
                                <Controles
                                    red={this.state.red}
                                    green={this.state.green}
                                    blue={this.state.blue}
                                    text1={this.state.text1}
                                    text2={this.state.text2}
                                    text3={this.state.text3}
                                    text4={this.state.text4}
                                    textFill1={this.state.textFill1}
                                    textFill2={this.state.textFill2}
                                    textFill3={this.state.textFill3}
                                    textFill4={this.state.textFill4}
                                    textFamily1={this.state.textFamily1}
                                    textFamily2={this.state.textFamily2}
                                    textFamily3={this.state.textFamily3}
                                    textFamily4={this.state.textFamily4}
                                    textStyle1={this.state.textStyle1}
                                    textStyle2={this.state.textStyle2}
                                    textStyle3={this.state.textStyle3}
                                    textStyle4={this.state.textStyle4}
                                    textSize1={this.state.textSize1}
                                    textSize2={this.state.textSize2}
                                    textSize3={this.state.textSize3}
                                    textSize4={this.state.textSize4}
                                    textRotation1={this.state.textRotation1}
                                    textRotation2={this.state.textRotation2}
                                    textRotation3={this.state.textRotation3}
                                    textRotation4={this.state.textRotation4}
                                    imageUrlFix1={this.state.imageUrlFix1}
                                    imageUrlFix2={this.state.imageUrlFix2}
                                    opacity1={this.state.opacity1}
                                    opacity2={this.state.opacity2}
                                    hue1={this.state.hue1}
                                    saturation1={this.state.saturation1}
                                    value1={this.state.value1}
                                    hue2={this.state.hue2}
                                    saturation2={this.state.saturation2}
                                    value2={this.state.value2}
                                    imageUrlFix3={this.state.imageUrlFix3}
                                    imageUrlFix4={this.state.imageUrlFix4}
                                    opacity3={this.state.opacity3}
                                    opacity4={this.state.opacity4}
                                    hue3={this.state.hue3}
                                    saturation3={this.state.saturation3}
                                    value3={this.state.value3}
                                    hue4={this.state.hue4}
                                    saturation4={this.state.saturation4}
                                    value4={this.state.value4}
                                    rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
                                    showWidget={(e) => this.showWidget(e)}
                                    deleteImage={(e) => this.deleteImage(e)}
                                    deleteText={(e) => this.deleteText(e)}
                                    text={(e) => this.text(e)}
                                    effects={(e) => this.effects(e)}
                                />
                                <form className="form-save-design" onSubmit={this.saveDesign}>
                                    <div className="form-inside-design">
                                        <Form labelCss="label-design-name" inputCss="input-design-name-canvas" label="Design name" type="text" name="designName" value={this.state.designName} onchange={(e) => this.handleChangeDesignName(e)} ></Form>
                                    </div>
                                    <input type="submit" className="btn orange cursor" value="Save" />
                                </form>
                            </div>
                            <div className="half-container" > */}
                                <TshirtStructure
                                    blue={this.state.blue}
                                    red={this.state.red}
                                    green={this.state.green}
                                    
                                    dragPosition={(e) => this.handleDragEnd(e)}
                                    transform={(e) => this.handleTransform(e)}
                                    dragText={(e) => this.handleDragEndText(e)}
                                />
                            {/* </div>
                        </div>
                    </div> */}
                </React.Fragment>
            )
        // }
        // else {
        //     return (
        //         <React.Fragment>
        //             <div className="pageStructure" >
        //                 <div className="container white">
        //                     <div className="half-container padding-canvas">
        //                         <h2>T-shirt designer</h2>
        //                         <Controles
        //                             red={this.state.red}
        //                             green={this.state.green}
        //                             blue={this.state.blue}
        //                             text1={this.state.text1}
        //                             text2={this.state.text2}
        //                             text3={this.state.text3}
        //                             text4={this.state.text4}
        //                             textFill1={this.state.textFill1}
        //                             textFill2={this.state.textFill2}
        //                             textFill3={this.state.textFill3}
        //                             textFill4={this.state.textFill4}
        //                             textFamily1={this.state.textFamily1}
        //                             textFamily2={this.state.textFamily2}
        //                             textFamily3={this.state.textFamily3}
        //                             textFamily4={this.state.textFamily4}
        //                             textStyle1={this.state.textStyle1}
        //                             textStyle2={this.state.textStyle2}
        //                             textStyle3={this.state.textStyle3}
        //                             textStyle4={this.state.textStyle4}
        //                             textSize1={this.state.textSize1}
        //                             textSize2={this.state.textSize2}
        //                             textSize3={this.state.textSize3}
        //                             textSize4={this.state.textSize4}
        //                             textRotation1={this.state.textRotation1}
        //                             textRotation2={this.state.textRotation2}
        //                             textRotation3={this.state.textRotation3}
        //                             textRotation4={this.state.textRotation4}
        //                             imageUrlFix1={this.state.imageUrlFix1}
        //                             imageUrlFix2={this.state.imageUrlFix2}
        //                             opacity1={this.state.opacity1}
        //                             opacity2={this.state.opacity2}
        //                             hue1={this.state.hue1}
        //                             saturation1={this.state.saturation1}
        //                             value1={this.state.value1}
        //                             hue2={this.state.hue2}
        //                             saturation2={this.state.saturation2}
        //                             value2={this.state.value2}
        //                             imageUrlFix3={this.state.imageUrlFix3}
        //                             imageUrlFix4={this.state.imageUrlFix4}
        //                             opacity3={this.state.opacity3}
        //                             opacity4={this.state.opacity4}
        //                             hue3={this.state.hue3}
        //                             saturation3={this.state.saturation3}
        //                             value3={this.state.value3}
        //                             hue4={this.state.hue4}
        //                             saturation4={this.state.saturation4}
        //                             value4={this.state.value4}
        //                             rgbValue={(red, green, blue) => this.rgbValue(red, green, blue)}
        //                             showWidget={(e) => this.showWidget(e)}
        //                             deleteImage={(e) => this.deleteImage(e)}
        //                             deleteText={(e) => this.deleteText(e)}
        //                             text={(e) => this.text(e)}
        //                             effects={(e) => this.effects(e)}
        //                         />
        //                         <div className="demo-advisor">
        //                             <h5>This is a demo version, for buy your creation you must be logged in.</h5>
        //                         </div>
        //                     </div>
        //                     <div className="half-container" >
        //                         <TshirtStructure
        //                             blue={this.state.blue}
        //                             red={this.state.red}
        //                             green={this.state.green}
        //                             text1={this.state.text1}
        //                             textX1={this.state.textX1}
        //                             textY1={this.state.textY1}
        //                             textFill1={this.state.textFill1}
        //                             textFamily1={this.state.textFamily1}
        //                             textSize1={this.state.textSize1}
        //                             textStyle1={this.state.textStyle1}
        //                             text2={this.state.text2}
        //                             textX2={this.state.textX2}
        //                             textY2={this.state.textY2}
        //                             textFill2={this.state.textFill2}
        //                             textFamily2={this.state.textFamily2}
        //                             textSize2={this.state.textSize2}
        //                             textStyle2={this.state.textStyle2}
        //                             text3={this.state.text3}
        //                             textX3={this.state.textX3}
        //                             textY3={this.state.textY3}
        //                             textFill3={this.state.textFill3}
        //                             textFamily3={this.state.textFamily3}
        //                             textSize3={this.state.textSize3}
        //                             textStyle3={this.state.textStyle3}
        //                             text4={this.state.text4}
        //                             textX4={this.state.textX4}
        //                             textY4={this.state.textY4}
        //                             textFill4={this.state.textFill4}
        //                             textFamily4={this.state.textFamily4}
        //                             textSize4={this.state.textSize4}
        //                             textStyle4={this.state.textStyle4}
        //                             textRotation1={this.state.textRotation1}
        //                             textRotation2={this.state.textRotation2}
        //                             textRotation3={this.state.textRotation3}
        //                             textRotation4={this.state.textRotation4}
        //                             imageUrl1={this.state.imageUrl1}
        //                             imageUrl2={this.state.imageUrl2}
        //                             x1={this.state.x1}
        //                             y1={this.state.y1}
        //                             x2={this.state.x2}
        //                             y2={this.state.y2}
        //                             scaleX1={this.state.scaleX1}
        //                             scaleY1={this.state.scaleY1}
        //                             scaleX2={this.state.scaleX2}
        //                             scaleY2={this.state.scaleY2}
        //                             rotation1={this.state.rotation1}
        //                             rotation2={this.state.rotation2}
        //                             active1={this.state.active1}
        //                             active2={this.state.active2}
        //                             opacity1={this.state.opacity1}
        //                             opacity2={this.state.opacity2}
        //                             hue1={this.state.hue1}
        //                             saturation1={this.state.saturation1}
        //                             value1={this.state.value1}
        //                             hue2={this.state.hue2}
        //                             saturation2={this.state.saturation2}
        //                             value2={this.state.value2}
        //                             imageUrl3={this.state.imageUrl3}
        //                             imageUrl4={this.state.imageUrl4}
        //                             x3={this.state.x3}
        //                             y3={this.state.y3}
        //                             x4={this.state.x4}
        //                             y4={this.state.y4}
        //                             scaleX3={this.state.scaleX3}
        //                             scaleY3={this.state.scaleY3}
        //                             scaleX4={this.state.scaleX4}
        //                             scaleY4={this.state.scaleY4}
        //                             rotation3={this.state.rotation3}
        //                             rotation4={this.state.rotation4}
        //                             active3={this.state.active3}
        //                             active4={this.state.active4}
        //                             opacity3={this.state.opacity3}
        //                             opacity4={this.state.opacity4}
        //                             hue3={this.state.hue3}
        //                             saturation3={this.state.saturation3}
        //                             value3={this.state.value3}
        //                             hue4={this.state.hue4}
        //                             saturation4={this.state.saturation4}
        //                             value4={this.state.value4}
        //                             dragPosition={(e) => this.handleDragEnd(e)}
        //                             transform={(e) => this.handleTransform(e)}
        //                             dragText={(e) => this.handleDragEndText(e)}
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </React.Fragment>
        //     )
        // }
    }
}

export default withRouter(Canvas)