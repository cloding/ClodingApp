import React, { Component } from 'react';
import DesignService from "../../service/design-server";
import ProductOnCart from './ProductOnCart';
import './Cart.css';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tShirts: [],
            toPay: 0
        }

        this.service = new DesignService();
    }

    componentDidMount() {
        this.service.allTShirt(this.props.user._id)
            .then(allTheTShirts => {
                const tShirts = allTheTShirts.tShirt
                let total = tShirts.reduce((a, b) => {
                    return a + b.price
                }, 0)

                this.setState({
                    ...this.state,
                    tShirts: tShirts,
                    toPay: total
                })
            })
    }

    totalAmounts(total) {
        this.setState({
            ...this.state,
            toPay: total
        })
    }

    buy(e) {
        e.preventDefault();
        this.service.buy(this.props.user._id, this.state.tShirts)
            .then(() => {
                this.setState({
                    ...this.service,
                    tShirts: [],
                    toPay: 0
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        let tShirtCart = this.state.tShirts.map((tShirt, i) => {
            return (
                <li key={i}>
                    <ProductOnCart tShirt={tShirt} user={this.props.user} totalAmounts={(total) => this.totalAmounts(total)} />
                </li>
            )
        })
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white cart-box padding-canvas">
                        <div className="cartContainer">
                            <ul>
                                {tShirtCart}
                            </ul>
                        </div>
                        <div className="cart-toPay">
                            <h4>Total amount: <span className="f700">{this.state.toPay}</span>€</h4>
                            <button className="btn orange cursor" onClick={(e) => this.buy(e)}>Buy</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
