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
                        <Tshirt filters={[Konva.Filters.RGB]} blue={this.props.blue} red={this.props.red} green={this.props.green} />
                    </Layer>
                    <Layer>
                        <Group ref={node => this.myGroup = node} >
                            <Images
                                active={this.props.active1}
                                imgName={this.state.images[0].imgName}
                                img={this.props.imageUrl1}
                                x={this.props.x1}
                                y={this.props.y1}
                                scaleX={this.props.scaleX1}
                                scaleY={this.props.scaleY1}
                                rotation={this.props.rotation1}
                                opacity={this.props.opacity1}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.hue1}
                                saturation={this.props.saturation1}
                                value={this.props.value1}
                                dragPosition={(e) => this.props.dragPosition(e)}
                                transform={(e) => this.props.transform(e)}
                            />
                            <Images
                                active={this.props.active2}
                                imgName={this.state.images[1].imgName}
                                img={this.props.imageUrl2}
                                x={this.props.x2}
                                y={this.props.y2}
                                scaleX={this.props.scaleX2}
                                scaleY={this.props.scaleY2}
                                rotation={this.props.rotation2}
                                opacity={this.props.opacity2}
                                filters={[Konva.Filters.HSV]}
                                hue={this.props.hue2}
                                saturation={this.props.saturation2}
                                value={this.props.value2}
                                dragPosition={(e) => this.props.dragPosition(e)}
                                transform={(e) => this.props.transform(e)}
                            />
                            <Text id="text1" x={+this.props.textX1} y={+this.props.textY1} fontSize={+this.props.textSize1} fontFamily={this.props.textFamily1} fill={this.props.textFill1} allign='center' fontStyle={this.props.textStyle1} text={this.props.text1} draggable onDragEnd={(e) => this.props.dragText(e)} />
                            <Text id="text2" x={+this.props.textX2} y={+this.props.textY2} fontSize={+this.props.textSize2} fontFamily={this.props.textFamily2} fill={this.props.textFill2} allign='center' fontStyle={this.props.textStyle2} text={this.props.text2} draggable onDragEnd={(e) => this.props.dragText(e)} />
                            <Text id="text3" x={+this.props.textX3} y={+this.props.textY3} fontSize={+this.props.textSize3} fontFamily={this.props.textFamily3} fill={this.props.textFill3} allign='center' fontStyle={this.props.textStyle3} text={this.props.text3} draggable onDragEnd={(e) => this.props.dragText(e)} />
                            <Transformer ref={node => this.transformer = node} />
                        </Group>
                    </Layer>
                </Stage>
            </React.Fragment>
        )
    }
}
