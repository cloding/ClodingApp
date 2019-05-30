import React, { Component } from 'react'

export default class ImageControl extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="light-blue-2 controles-inside">
                    <div className="btn-control-box">
                        <input id={this.props.id} className="control-input" placeholder="Upload an image" defaultValue={this.props.imageUrl} />
                        <button id={this.props.id} type="button" name={this.props.name} onClick={(e) => this.props.showWidget(e)} className="btn-control purple cursor"><i className="fas fa-plus" /></button>
                        <button id={this.props.id} type="button" onClick={(e) => this.props.deleteImage(e)} className="btn-control red cursor"><i className="fas fa-trash"></i></button>
                    </div>
                    <div className="range-control">
                        <label htmlFor={this.props.opacityId}>Opacity:</label>
                        <input id={this.props.opacityId} type="range" min="0" max="1" step="0.1" value={this.props.opacityValue} onChange={(e) => this.props.effects(e)} />
                        <label htmlFor={this.props.hueId}>Hue:</label>
                        <input id={this.props.hueId} type="range" min="0" max="259" step="1" value={this.props.hueValue} onChange={(e) => this.props.effects(e)} />
                        <label htmlFor={this.props.saturationId}>Saturation:</label>
                        <input id={this.props.saturationId} type="range" min="-2" max="10" step="0.5" value={this.props.saturationValue} onChange={(e) => this.props.effects(e)} />
                        <label htmlFor={this.props.valueId}>Value:</label>
                        <input id={this.props.valueId} type="range" min="-2" max="2" step="0.1" value={this.props.valueValue} onChange={(e) => this.props.effects(e)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

{/* <div className="btn-control-box">
<h5 id="firstImage">First image</h5>
<button id="1" type="button" name="firstImage" onClick={(e) => this.props.showWidget(e)} className="btn-control purple cursor">Upload</button>
<button id="1" type="button" onClick={(e) => this.props.deleteImage(e)} className="btn-control red cursor">Delete</button>
</div>
<div className="range-control">
<label htmlFor="opacity1">Opacity:</label>
<input id="opacity1" type="range" min="0" max="1" step="0.1" value={this.props.opacity1} onChange={(e) => this.props.effects(e)} />
</div>
<div className="range-control">
<label htmlFor="Hue1">Hue:</label>
<input id="hue1" type="range" min="0" max="259" step="1" value={this.props.hue1} onChange={(e) => this.props.effects(e)} />
</div>
<div className="range-control">
<label htmlFor="saturation1">Saturation:</label>
<input id="saturation1" type="range" min="-2" max="10" step="0.5" value={this.props.saturation1} onChange={(e) => this.props.effects(e)} />
</div>
<div className="range-control">
<label htmlFor="value1">Value:</label>
<input id="value1" type="range" min="-2" max="2" step="0.1" value={this.props.value1} onChange={(e) => this.props.effects(e)} />
</div> */}
