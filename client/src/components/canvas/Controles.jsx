import React, { Component } from 'react'
import ColorsTable from './ColorsTable';
import TextControl from './TextControl';
import ImageControl from './ImageControl';


export default class Controles extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="control-structure">
                    <div className="light-blue controles-box">
                        <div className="colors-table light-blue-2">
                            <ColorsTable red={this.props.red} green={this.props.green} blue={this.props.blue} rgbValue={(red, green, blue) => this.props.rgbValue(red, green, blue)} />
                        </div>
                    </div>

                    <div className="light-blue controles-grid" >
                        <ImageControl
                            id="1"
                            name="firstImage"
                            showWidget={(e) => this.props.showWidget(e)}
                            deleteImage={(e) => this.props.deleteImage(e)}
                            effects={(e) => this.props.effects(e)}
                            imageUrl={this.props.values.image1.imageUrlFix}
                            opacityId="opacity1"
                            opacityValue={this.props.values.image1.opacity}
                            hueId="hue1"
                            hueValue={this.props.values.image1.hue}
                            saturationId="saturation1"
                            saturationValue={this.props.values.image1.saturation}
                            valueId="value1"
                            valueValue={this.props.values.image1.value}
                        />
                        <ImageControl
                            id="2"
                            name="secondImage"
                            showWidget={(e) => this.props.showWidget(e)}
                            deleteImage={(e) => this.props.deleteImage(e)}
                            effects={(e) => this.props.effects(e)}
                            imageUrl={this.props.values.image2.imageUrlFix}
                            opacityId="opacity2"
                            opacityValue={this.props.values.image2.opacity}
                            hueId="hue2"
                            hueValue={this.props.values.image2.hue}
                            saturationId="saturation2"
                            saturationValue={this.props.values.image2.saturation}
                            valueId="value2"
                            valueValue={this.props.values.image2.value}
                        />
                        <ImageControl
                            id="3"
                            name="thirdImage"
                            showWidget={(e) => this.props.showWidget(e)}
                            deleteImage={(e) => this.props.deleteImage(e)}
                            effects={(e) => this.props.effects(e)}
                            imageUrl={this.props.values.image3.imageUrlFix}
                            opacityId="opacity3"
                            opacityValue={this.props.values.image3.opacity}
                            hueId="hue3"
                            hueValue={this.props.values.image3.hue}
                            saturationId="saturation3"
                            saturationValue={this.props.values.image3.saturation}
                            valueId="value3"
                            valueValue={this.props.values.image3.value}
                        />
                        <ImageControl
                            id="4"
                            name="fourthImage"
                            showWidget={(e) => this.props.showWidget(e)}
                            deleteImage={(e) => this.props.deleteImage(e)}
                            effects={(e) => this.props.effects(e)}
                            imageUrl={this.props.values.image4.imageUrlFix}
                            opacityId="opacity4"
                            opacityValue={this.props.values.image4.opacity}
                            hueId="hue4"
                            hueValue={this.props.values.image4.hue}
                            saturationId="saturation4"
                            saturationValue={this.props.values.image4.saturation}
                            valueId="value4"
                            valueValue={this.props.values.image4.value}
                        />
                    </div>
                    <div className="light-blue controles-grid" >
                        <TextControl
                            id={1}
                            side={this.props.side}
                            text={this.props.values.text1.text}
                            deleteText={(e, side) => this.props.deleteText(e, side)}
                            textChange={(e, side) => this.props.text(e, side)}
                            fillValue={this.props.values.text1.textFill}
                            familyValue={this.props.values.text1.textFamily}
                            sizeValue={this.props.values.text1.textSize}
                            styleValue={this.props.values.text1.textStyle}
                            rotationValue={this.props.values.text1.textRotation}
                        />
                        <TextControl
                            id={2}
                            side={this.props.side}
                            text={this.props.values.text2.text}
                            deleteText={(e, side) => this.props.deleteText(e, side)}
                            textChange={(e, side) => this.props.text(e, side)}
                            fillValue={this.props.values.text2.textFill}
                            familyValue={this.props.values.text2.textFamily}
                            sizeValue={this.props.values.text2.textSize}
                            styleValue={this.props.values.text2.textStyle}
                            rotationValue={this.props.values.text2.textRotation}
                        />
                        <TextControl
                            id={3}
                            side={this.props.side}
                            text={this.props.values.text3.text}
                            deleteText={(e, side) => this.props.deleteText(e, side)}
                            textChange={(e, side) => this.props.text(e, side)}
                            fillValue={this.props.values.text3.textFill}
                            familyValue={this.props.values.text3.textFamily}
                            sizeValue={this.props.values.text3.textSize}
                            styleValue={this.props.values.text3.textStyle}
                            rotationValue={this.props.values.text3.textRotation}
                        />
                        <TextControl
                            id={4}
                            side={this.props.side}
                            text={this.props.values.text4.text}
                            deleteText={(e, side) => this.props.deleteText(e, side)}
                            textChange={(e, side) => this.props.text(e, side)}
                            fillValue={this.props.values.text4.textFill}
                            familyValue={this.props.values.text4.textFamily}
                            sizeValue={this.props.values.text4.textSize}
                            styleValue={this.props.values.text4.textStyle}
                            rotationValue={this.props.values.text4.textRotation}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
