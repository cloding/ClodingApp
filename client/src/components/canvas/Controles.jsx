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
                            id={1}
                            side={this.props.side}
                            name="firstImage"
                            showWidget={(e, side) => this.props.showWidget(e, side)}
                            deleteImage={(e, side) => this.props.deleteImage(e, side)}
                            effects={(e, side) => this.props.effects(e, side)}
                            imageUrl={this.props.values.image1.imageUrlFix}
                            opacityValue={this.props.values.image1.opacity}
                            hueValue={this.props.values.image1.hue}
                            saturationValue={this.props.values.image1.saturation}
                            valueValue={this.props.values.image1.value}
                        />
                        <ImageControl
                            id={2}
                            side={this.props.side}
                            name="secondImage"
                            showWidget={(e, side) => this.props.showWidget(e, side)}
                            deleteImage={(e, side) => this.props.deleteImage(e, side)}
                            effects={(e, side) => this.props.effects(e, side)}
                            imageUrl={this.props.values.image2.imageUrlFix}
                            opacityValue={this.props.values.image2.opacity}
                            hueValue={this.props.values.image2.hue}
                            saturationValue={this.props.values.image2.saturation}
                            valueValue={this.props.values.image2.value}
                        />
                        <ImageControl
                            id={3}
                            side={this.props.side}
                            name="thirdImage"
                            showWidget={(e, side) => this.props.showWidget(e, side)}
                            deleteImage={(e, side) => this.props.deleteImage(e, side)}
                            effects={(e, side) => this.props.effects(e, side)}
                            imageUrl={this.props.values.image3.imageUrlFix}
                            opacityValue={this.props.values.image3.opacity}
                            hueValue={this.props.values.image3.hue}
                            saturationValue={this.props.values.image3.saturation}
                            valueValue={this.props.values.image3.value}
                        />
                        <ImageControl
                            id={4}
                            side={this.props.side}
                            name="fourthImage"
                            showWidget={(e, side) => this.props.showWidget(e, side)}
                            deleteImage={(e, side) => this.props.deleteImage(e, side)}
                            effects={(e, side) => this.props.effects(e, side)}
                            imageUrl={this.props.values.image4.imageUrlFix}
                            opacityValue={this.props.values.image4.opacity}
                            hueValue={this.props.values.image4.hue}
                            saturationValue={this.props.values.image4.saturation}
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
