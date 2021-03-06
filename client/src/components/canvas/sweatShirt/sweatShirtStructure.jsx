import React, { Component } from 'react'
import Konva from 'konva';
import { Stage, Layer, Group, Transformer, Text } from 'react-konva';
import Tshirt from '../Tshirt';
import Images from '../Images';
import '../Canvas.css';

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
        const group = this.props.group;
        this.myGroup.clipFunc(function (ctx) {
            ctx.lineTo(group[0], group[1]);
            ctx.lineTo(group[2], group[3]);
            ctx.lineTo(group[4], group[5]);
            ctx.lineTo(group[6], group[7]);
            ctx.lineTo(group[8], group[9]);
            ctx.lineTo(group[10], group[11]);
            ctx.lineTo(group[12], group[13]);
            ctx.lineTo(group[14], group[15]);
            ctx.lineTo(group[16], group[17]);
            ctx.lineTo(group[18], group[19]);
            ctx.lineTo(group[20], group[21]);
            ctx.lineTo(group[22], group[23]);
            ctx.lineTo(group[24], group[25]);
            ctx.lineTo(group[26], group[27]);
            ctx.lineTo(group[28], group[29]);
            ctx.lineTo(group[30], group[31]);
            ctx.lineTo(group[32], group[33]);
            ctx.lineTo(group[34], group[35]);
            ctx.lineTo(group[36], group[37]);
            ctx.lineTo(group[38], group[39]);
            ctx.lineTo(group[40], group[41]);
            ctx.lineTo(group[42], group[43]);
            ctx.lineTo(group[44], group[45]);
            ctx.lineTo(group[46], group[47]);
            ctx.lineTo(group[48], group[49]);
            ctx.lineTo(group[50], group[51]);
            ctx.lineTo(group[52], group[53]);
            ctx.lineTo(group[54], group[55]);
            ctx.lineTo(group[56], group[57]);
            ctx.lineTo(group[58], group[59]);
            ctx.lineTo(group[60], group[61]);
            ctx.lineTo(group[62], group[63]);
            ctx.lineTo(group[64], group[65]);
            ctx.lineTo(group[66], group[67]);
            ctx.lineTo(group[68], group[69]);
            ctx.lineTo(group[70], group[71]);
            ctx.lineTo(group[72], group[73]);
            ctx.lineTo(group[74], group[75]);
            ctx.lineTo(group[76], group[77]);
            ctx.lineTo(group[78], group[79]);
            ctx.lineTo(group[80], group[81]);
            ctx.lineTo(group[82], group[83]);
            ctx.lineTo(group[84], group[85]);
            ctx.lineTo(group[86], group[87]);
            ctx.lineTo(group[88], group[89]);
            ctx.lineTo(group[90], group[91]);
            ctx.lineTo(group[92], group[93]);
            ctx.lineTo(group[94], group[95]);
            ctx.lineTo(group[96], group[97]);
            ctx.lineTo(group[98], group[99]);
            ctx.lineTo(group[100], group[101]);
            ctx.lineTo(group[102], group[103]);
            ctx.lineTo(group[104], group[105]);
            ctx.lineTo(group[106], group[107]);
            ctx.lineTo(group[108], group[109]);
            ctx.lineTo(group[110], group[111]);
            ctx.lineTo(group[112], group[113]);
            ctx.lineTo(group[114], group[115]);
            ctx.lineTo(group[116], group[117]);
            ctx.lineTo(group[118], group[119]);
            ctx.lineTo(group[120], group[121]);
            ctx.lineTo(group[122], group[123]);
            ctx.lineTo(group[124], group[125]);
            ctx.lineTo(group[126], group[127]);
            ctx.lineTo(group[128], group[129]);
            ctx.lineTo(group[130], group[131]);
            ctx.lineTo(group[132], group[133]);
            ctx.lineTo(group[134], group[135]);
            ctx.lineTo(group[136], group[137]);
            ctx.lineTo(group[138], group[139]);
            ctx.lineTo(group[140], group[141]);
            ctx.lineTo(group[142], group[143]);
            ctx.lineTo(group[144], group[145]);
            ctx.lineTo(group[146], group[147]);
            ctx.lineTo(group[148], group[149]);
            ctx.lineTo(group[150], group[151]);
            
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
                        <Tshirt
                            x={103}
                            y={35}
                            width={274.5}
                            height={430}
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
