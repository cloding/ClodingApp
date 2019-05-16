import React, { Component } from 'react'
import DesignService from "../../service/design-server";
import BuyProduct from './BuyProduct';

export default class Buy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            oldOrders: [],
            payments: 0
        }

        this.service = new DesignService();
    }

    componentDidMount() {
        this.service.allOldOrders(this.props.user._id)
            .then(allOldOrders => {

                const orders = allOldOrders.buy
                let total = orders.reduce((a, b) => {
                    return a + b.price
                }, 0)

                this.setState({
                    ...this.state,
                    oldOrders: orders,
                    payments: total
                })
            })
    }


    render() {
        let oldOrders = this.state.oldOrders.map((oldOrder, i) => {
            return (
                <li key={i}>
                    <BuyProduct oldOrder={oldOrder} user={this.props.user} />
                </li>
            )
        })
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white cart-box padding-canvas">
                        <div className="cartContainer">
                            <ul>
                                {oldOrders}
                            </ul>
                        </div>
                        <div className="cart-toPay">
                            <h4>Total orders: <span className="f700">{this.state.payments}€</span></h4>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
