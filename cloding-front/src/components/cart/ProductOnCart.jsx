import React, { Component } from 'react'
import Form from '../form/Form';
import DesignService from '../../service/design-server';

export default class ProductOnCart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 1,
            active: true
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
        const userId = this.props.tShirt._id;

        this.service.addQuanity(quantity, userId)
            .then()
            .catch(err => console.log(err))
    }

    changeQuantiy(e) {
        this.setState({
            ...this.state,
            quantity: e.target.value
        })

    }

    delete(e) {
        e.preventDefault();
        this.service.delete(this.props.tShirt._id, this.props.userId)
            .then(() => {
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

                        <div>
                            <h2>{this.props.tShirt.designName}</h2>
                            <p>{this.props.tShirt.type}</p>
                            <form onSubmit={(e) => this.quantity(e)}>
                                <Form label="Quantity" type="number" name="quantity" value={this.props.tShirt.quantity} onchange={(e) => this.changeQuantiy(e)} ></Form>
                                <input type="submit" className="btn orange cursor" value="Add" />
                            </form>
                            <button className="btn red" onClick={(e) => this.delete(e)}>Delete</button>
                        </div>

                        : null
                }
            </React.Fragment>
        )
    }
}
