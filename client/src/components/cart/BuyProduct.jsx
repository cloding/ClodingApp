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
                <div className="cart-product">
                    <div className="nameDesignList">
                        <h4>Name: <span className="f700">{this.props.oldOrder.designName}</span></h4>
                    </div>
                    <h5 className="cart-type">type: <span className="f700">{this.props.oldOrder.type}</span></h5>
                    <p className="label-design-name">Quantity: <span className="f700">{this.props.oldOrder.quantity}</span></p>
                    <p className="label-design-name">Price: <span className="f700">{this.props.oldOrder.price}</span>€</p>
                    <button className="btn-cart orange cursor" onClick={(e) => this.moveToCart(e)}>Cart</button>
                </div>
            </React.Fragment >
        )
    }
}
