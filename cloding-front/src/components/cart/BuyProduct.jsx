import React, { Component } from 'react';
import DesignService from '../../service/design-server';

export default class BuyProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.service = new DesignService();
    }

    moveToCart(e) {
        e.preventDefault();
        this.service.moveToCart(this.props.user._id, this.props.oldOrder._id)
            .then()
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>{this.props.oldOrder.designName}</h2>
                    <p>{this.props.oldOrder.type}</p>
                    <p>{this.props.oldOrder.quantity}</p>
                    <p>{this.props.oldOrder.price}</p>
                    <button className="btn red" onClick={(e) => this.moveToCart(e)}>Cart</button>
                </div>
            </React.Fragment>
        )
    }
}
