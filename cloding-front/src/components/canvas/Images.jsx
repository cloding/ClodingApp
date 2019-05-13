import React, { Component } from 'react'
import { Image } from 'react-konva';
// import Konva from 'konva';

export default class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            x: 190,
            y: 150,
            scaleX: 1,
            scaleY: 1,
            width: 0,
            height: 0
        };
    }


    // static getDerivedStateFromProps(nextProps) {
    //     console.log(nextProps)
    //     // if (nextProps.imageUrl === "") {
    //     //     this.setState({
    //     //         ...this.state,
    //     //         image: nextProps.imageUrl
    //     //     })
    //     // }

    // }

    componentWillUpdate() {
        console.log(this.props.img)
        const image = new window.Image();
        image.crossOrigin = "Anonymous";
        image.src = this.props.img;
        image.onload = () => {
            this.setState({
                ...this.state,
                image: image,
                width: this.props.width,
                height: this.props.height
            }, () => {
                this.myImage.cache();
                this.myImage.getLayer().batchDraw();
            })
        }
        
    }

    handleDragEnd = e => {
        this.setState({
            x: e.target.x(),
            y: e.target.y()
        })
    }

    render() {
        console.log(this.state.image)
        console.log(this.state.width)
        return (
            <React.Fragment>
                <Image
                    name={this.props.imgName}
                    image={this.state.image}
                    x={this.state.x}
                    y={this.state.y}
                    width={this.state.width}
                    height={this.state.height}
                    scaleX={this.state.scaleX}
                    scaleY={this.state.scaleY}
                    onDragEnd={this.handleDragEnd}
                    // filters={[Konva.Filters.Blur]}
                    // blurRadius={+(this.props.blur)}
                    ref={node => {
                        this.myImage = node;
                    }}
                    // onTransform={(e) => this.handleTransform(e)}
                    draggable
                />
            </React.Fragment>
        )
    }
}
