import React, { Component } from 'react';
import DesignService from "../../service/design-server";
import ProductOnCart from './ProductOnCart';

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tShirts: []
        }

        this.service = new DesignService();
    }

    componentDidMount() {
        this.service.allTShirt(this.props.user._id)
            .then(allTheTShirts => {
                const tShirts = allTheTShirts.tShirt
                this.setState({
                    ...this.state,
                    tShirts: tShirts
                })
            })

    }


    render() {
        let tShirtCart = this.state.tShirts.map((tShirt, i) => {
            return (
                <li key={i}>
                    <ProductOnCart tShirt={tShirt} userId={this.props.user._id} />
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
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
