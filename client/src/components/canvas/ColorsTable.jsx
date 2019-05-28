import React, { Component } from 'react';
import colorJson from '../../colors/colors.json'

export default class ColorsTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: []
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            colors : colorJson
        })
    }


    render() {
        return (
            <React.Fragment>   
                    {
                        this.state.colors.map((color, i) => {
                            let colorSelected = false
                            if (color.red === this.props.red && color.green === this.props.green && color.blue === this.props.blue) {colorSelected = true}
                            return <div key={i} className={"color-cube cursor " + (colorSelected ? 'selected-color' : null)} style={{ backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})` }} onClick={() => this.props.rgbValue(color.red, color.green, color.blue)} ></div>
                        })
                    }
            </React.Fragment>
        )
    }
}
