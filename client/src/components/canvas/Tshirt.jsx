import React, { Component } from 'react'
import Konva from 'konva';
import { Image } from 'react-konva';

export default class Tshirt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: null
        };
    }

    componentDidMount() {
        const image = new window.Image();
        image.crossOrigin = "Anonymous";
        image.src = this.props.shirt;
        image.onload = () => {
            this.setState({
                image: image
            }, () => {
                this.myImage.cache();
                this.myImage.getLayer().batchDraw();
            });
        };
    }

    render() {
        return (
            <React.Fragment>
                <Image
                    image={this.state.image}
                    x={30}
                    y={35}
                    width={426}
                    height={430}
                    filters={[Konva.Filters.RGB]}
                    red={this.props.red}
                    blue={this.props.blue}
                    green={this.props.green}
                    ref={node => {
                        this.myImage = node;
                    }}
                />
            </React.Fragment>
        )
    }
}
