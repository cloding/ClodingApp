import React, { Component } from 'react'
import Konva from 'konva';
import { Stage, Layer, Group, Transformer, Text } from 'react-konva';
import Tshirt from './Tshirt';
import Images from './Images';
import './Canvas.css';

export default class TshirtStructure extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                {
                    imgName: "image1",
                },
                {
                    imgName: "image2",
                },
                {
                    imgName: "image3",
                },
                {
                    imgName: "image4",
                }
            ],
            selectedShapeName: ""
        }

    }

    // mouseOver(e) {
    //     console.log("x:" + e.evt.layerX)
    //     console.log("y:" + e.evt.layerY)
    // }


    componentDidMount() {
        if (this.state.layer) {
            console.log('back');
        } else {
            this.myGroup.clipFunc(function (ctx) {
                ctx.lineTo(114, 80);
                ctx.lineTo(179, 55);
                ctx.moveTo(179, 55);
                ctx.bezierCurveTo(179, 100, 309, 100, 309, 54);
                ctx.lineTo(371, 75);
                ctx.lineTo(383, 84);
                ctx.lineTo(409, 120);
                ctx.lineTo(444, 181);
                ctx.lineTo(441, 188);
                ctx.lineTo(427, 201);
                ctx.lineTo(391, 222);
                ctx.lineTo(372, 230);
                ctx.lineTo(355, 206);
                ctx.lineTo(358, 440);
                ctx.lineTo(356, 442);
                ctx.lineTo(301, 445);
                ctx.lineTo(180, 445);
                ctx.lineTo(127, 440);
                ctx.lineTo(129, 403);
                ctx.lineTo(130, 329);
                ctx.lineTo(128, 209);
                ctx.lineTo(114, 233);
                ctx.lineTo(90, 223);
                ctx.lineTo(53, 199);
                ctx.lineTo(44, 191);
                ctx.lineTo(42, 184);
                ctx.lineTo(95, 95);
                ctx.lineTo(104, 86);
                ctx.lineTo(114, 80);
                // ctx.stroke();
            });
        }
    }


    componentDidUpdate() {

        const stage = this.transformer.getStage();
        const selectedShapeName = this.state.selectedShapeName;

        const selectedNode = stage.findOne('.' + selectedShapeName);

        if (selectedNode === this.transformer.node()) {
            return;
        }

        if (selectedNode) {
            this.transformer.attachTo(selectedNode);
        } else {
            this.transformer.detach();
        }
        this.transformer.getLayer().batchDraw();
    }

    handleStageMouseDown = e => {

        if (e.target === e.target.getStage()) {
            this.setState({
                ...this.state,
                selectedShapeName: ''
            });
            return;
        }
        const clickedOnTransformer =
            e.target.getParent().className === 'Transformer';
        if (clickedOnTransformer) {
            return;
        }

        const name = e.target.attrs.name;
        const rect = this.state.images.find(r => r.imgName === name);

        if (rect) {
            this.setState({
                ...this.state,
                selectedShapeName: name
            });
        } else {
            this.setState({
                ...this.state,
                selectedShapeName: ''
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <Stage width={480} height={480} onMouseDown={(e) => this.handleStageMouseDown(e)} >
                    <Layer>
                        <Tshirt
                            shirt={this.props.shirt}
                            filters={[Konva.Filters.RGB]}
                            blue={this.props.blue}
                            red={this.props.red}
                            green={this.props.green}
                        />
                    </Layer>
                    <Layer>
                        <Group ref={node => this.myGroup = node} >
                            <Images
                                side={this.props.side}
                                active={this.props.values.image1.active}
                                imgName={this.state.images[0].imgName}
                                img={this.props.values.image1.imageUrl}
                                x={this.props.values.image1.x}
                                y={this.props.values.image1.y}
                                scaleX={this.props.values.image1.scaleX}
                                scaleY={this.props.values.image1.scaleY}
                                rotation={this.props.values.image1.rotation}
                                opacity={this.props.values.image1.opacity}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.values.image1.hue}
                                saturation={this.props.values.image1.saturation}
                                value={this.props.values.image1.value}
                                dragPosition={(e, side) => this.props.dragPosition(e, side)}
                                transform={(e, side) => this.props.transform(e, side)}
                            />
                            <Images
                                side={this.props.side}
                                active={this.props.values.image2.active}
                                imgName={this.state.images[1].imgName}
                                img={this.props.values.image2.imageUrl}
                                x={this.props.values.image2.x}
                                y={this.props.values.image2.y}
                                scaleX={this.props.values.image2.scaleX}
                                scaleY={this.props.values.image2.scaleY}
                                rotation={this.props.values.image2.rotation}
                                opacity={this.props.values.image2.opacity}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.values.image2.hue}
                                saturation={this.props.values.image2.saturation}
                                value={this.props.values.image2.value}
                                dragPosition={(e, side) => this.props.dragPosition(e, side)}
                                transform={(e, side) => this.props.transform(e, side)}
                            />
                            <Images
                                side={this.props.side}
                                active={this.props.values.image3.active}
                                imgName={this.state.images[2].imgName}
                                img={this.props.values.image3.imageUrl}
                                x={this.props.values.image3.x}
                                y={this.props.values.image3.y}
                                scaleX={this.props.values.image3.scaleX}
                                scaleY={this.props.values.image3.scaleY}
                                rotation={this.props.values.image3.rotation}
                                opacity={this.props.values.image3.opacity}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.values.image3.hue}
                                saturation={this.props.values.image3.saturation}
                                value={this.props.values.image3.value}
                                dragPosition={(e, side) => this.props.dragPosition(e, side)}
                                transform={(e, side) => this.props.transform(e, side)}
                            />
                            <Images
                                side={this.props.side}
                                active={this.props.values.image4.active}
                                imgName={this.state.images[3].imgName}
                                img={this.props.values.image4.imageUrl}
                                x={this.props.values.image4.x}
                                y={this.props.values.image4.y}
                                scaleX={this.props.values.image4.scaleX}
                                scaleY={this.props.values.image4.scaleY}
                                rotation={this.props.values.image4.rotation}
                                opacity={this.props.values.image4.opacity}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.values.image4.hue}
                                saturation={this.props.values.image4.saturation}
                                value={this.props.values.image4.value}
                                dragPosition={(e, side) => this.props.dragPosition(e, side)}
                                transform={(e, side) => this.props.transform(e, side)}
                            />
                            <Text id="text1" x={+this.props.values.text1.textX} y={+this.props.values.text1.textY} fontSize={+this.props.values.text1.textSize} fontFamily={this.props.values.text1.textFamily} fill={this.props.values.text1.textFill} allign='center' fontStyle={this.props.values.text1.textStyle} text={this.props.values.text1.text} draggable rotation={+this.props.values.text1.textRotation} onDragEnd={(e) => this.props.dragText(e, this.props.side)} />
                            <Text id="text2" x={+this.props.values.text2.textX} y={+this.props.values.text2.textY} fontSize={+this.props.values.text2.textSize} fontFamily={this.props.values.text2.textFamily} fill={this.props.values.text2.textFill} allign='center' fontStyle={this.props.values.text2.textStyle} text={this.props.values.text2.text} draggable rotation={+this.props.values.text2.textRotation} onDragEnd={(e) => this.props.dragText(e, this.props.side)} />
                            <Text id="text3" x={+this.props.values.text3.textX} y={+this.props.values.text3.textY} fontSize={+this.props.values.text3.textSize} fontFamily={this.props.values.text3.textFamily} fill={this.props.values.text3.textFill} allign='center' fontStyle={this.props.values.text3.textStyle} text={this.props.values.text3.text} draggable rotation={+this.props.values.text3.textRotation} onDragEnd={(e) => this.props.dragText(e, this.props.side)} />
                            <Text id="text4" x={+this.props.values.text4.textX} y={+this.props.values.text4.textY} fontSize={+this.props.values.text4.textSize} fontFamily={this.props.values.text4.textFamily} fill={this.props.values.text4.textFill} allign='center' fontStyle={this.props.values.text4.textStyle} text={this.props.values.text4.text} draggable rotation={+this.props.values.text4.textRotation} onDragEnd={(e) => this.props.dragText(e, this.props.side)} />
                            <Transformer ref={node => this.transformer = node} />
                        </Group>
                    </Layer>
                </Stage>
            </React.Fragment>
        )
    }
}
