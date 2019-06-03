import React, { Component } from 'react'

export default class ImageControl extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="light-blue-2 controles-inside">
                    <div className="btn-control-box">
                        <input id={this.props.id} className="control-input" placeholder="Upload an image" defaultValue={this.props.imageUrl} />
                        <button id={`image${this.props.id}`} type="button" name={this.props.name} onClick={(e) => this.props.showWidget(e, this.props.side)} className="btn-control purple cursor"><i className="fas fa-plus" /></button>
                        <button id={`image${this.props.id}`} type="button" onClick={(e) => this.props.deleteImage(e, this.props.side)} className="btn-control red cursor"><i className="fas fa-trash"></i></button>
                    </div>
                    <div className="range-control">
                        <label htmlFor='opacity' >Opacity:</label>
                        <input id={`image${this.props.id}`} name='opacity' type="range" min="0" max="1" step="0.1" value={this.props.opacityValue} onChange={(e) => this.props.effects(e, this.props.side)} />
                        <label htmlFor='hue' >Hue:</label>
                        <input id={`image${this.props.id}`} name='hue' type="range" min="0" max="259" step="1" value={this.props.hueValue} onChange={(e) => this.props.effects(e, this.props.side)} />
                        <label htmlFor='saturation' >Saturation:</label>
                        <input id={`image${this.props.id}`} name='saturation' type="range" min="-2" max="10" step="0.5" value={this.props.saturationValue} onChange={(e) => this.props.effects(e, this.props.side)} />
                        <label htmlFor='value' >Value:</label>
                        <input id={`image${this.props.id}`} name='value' type="range" min="-2" max="2" step="0.1" value={this.props.valueValue} onChange={(e) => this.props.effects(e, this.props.side)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
