import React, { Component } from 'react';
import DesignService from "../../service/design-server";
import ProductOnCart from './ProductOnCart';

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
                    <div className="container white">
                        <div className="cartContainer">
                            <ul>
                                {tShirtCart}
                            </ul>
                        </div>
                        <p>To pay: {this.state.toPay}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
