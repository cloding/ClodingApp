import React, { Component } from 'react'
import Form from '../form/Form';
import DesignService from '../../service/design-server';
import { Link } from 'react-router-dom';

export default class ProductOnCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: true,
            toPay: 0
        }

        this.service = new DesignService();
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            quantity: this.props.tShirt.quantity
        })
    }

    quantity(e) {
        e.preventDefault();
        const quantity = this.state.quantity;
        const designId = this.props.tShirt._id;

        this.service.addQuanity(quantity, designId)
            .then()
            .catch(err => console.log(err));

        const toPayOne = (quantity * 30);
        this.service.addMoneyToPay(designId, toPayOne)
            .then(() => {
                this.service.allTShirt(this.props.user._id)
                    .then(allTheTShirts => {
                        const tShirts = allTheTShirts.tShirt
                        let total = tShirts.reduce((a, b) => {
                            return a + b.price
                        }, 0)

                        this.props.totalAmounts(total)
                    })
            })
            .catch(error => console.log(error))

    }

    changeQuantiy(e) {
        this.setState({
            ...this.state,
            quantity: e.target.value
        })

    }

    delete(e) {
        e.preventDefault();
        this.service.delete(this.props.tShirt._id, this.props.user._id)
            .then(() => {
                this.service.allTShirt(this.props.user._id)
                    .then(allTheTShirts => {
                        const tShirts = allTheTShirts.tShirt
                        let total = tShirts.reduce((a, b) => {
                            return a + b.price
                        }, 0)

                        this.props.totalAmounts(total)
                    })
                this.setState({
                    ...this.state,
                    active: false
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.active ?

                        <div className="cart-product">
                            <div className="nameDesignList">
                                <h4>Name: <span className="f700">{this.props.tShirt.designName}</span></h4>
                            </div>
                            <h5>type: <span className="f700">{this.props.tShirt.type}</span></h5>
                            <form className="form-cart" onSubmit={(e) => this.quantity(e)} >
                                <Form labelCss="label-design-name" inputCss="input-design-name" label="Quantity" type="number" name="quantity" value={this.state.quantity} onchange={(e) => this.changeQuantiy(e)} ></Form>
                                <input type="submit" className="btn-quatity orange cursor" value="Add" />
                            </form>
                            <Link className="btn-cart purple" to={`/t-shirt/designer/${this.props.tShirt._id}`} >Edit</Link>
                            <button className="btn-cart red cursor" onClick={(e) => this.delete(e)}>Delete</button>
                        </div>

                        : null
                }
            </React.Fragment>
        )
    }
}
