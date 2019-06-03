import React, { Component } from 'react'
import { Image } from 'react-konva';
import Konva from 'konva';

export default class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            width: 100,
            height: 100
        };
    }


    componentWillUpdate() {
        const image = new window.Image();
        image.crossOrigin = "Anonymous";
        image.src = this.props.img;
        image.onload = () => {
            this.setState({
                ...this.state,
                image: image
            }, () => {
                this.myImage.cache();
                this.myImage.getLayer().batchDraw();
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.active ?

                        <Image
                            id={this.props.id}
                            name={this.props.imgName}
                            image={this.state.image}
                            x={this.props.x}
                            y={this.props.y}
                            width={this.state.width}
                            height={this.state.height}
                            scaleX={this.props.scaleX}
                            scaleY={this.props.scaleY}
                            rotation={this.props.rotation}
                            onDragEnd={(e) => this.props.dragPosition(e, this.props.side)}
                            opacity={parseFloat(this.props.opacity)}
                            hue={+(this.props.hue)}
                            saturation={parseFloat(this.props.saturation)}
                            value={parseFloat(this.props.value)}
                            filters={[Konva.Filters.HSV]}
                            ref={node => {
                                this.myImage = node;
                            }}
                            onTransform={(e) => this.props.transform(e, this.props.side)}
                            draggable
                        />
                        : null
                }
            </React.Fragment>
        )
    }
}
