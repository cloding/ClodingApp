import React, { Component } from 'react';
import './Profile.css';
import Form from '../form/Form';
import AuthService from '../../service/auth-service';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            redirect: false
        };
        this.service = new AuthService();
    }

    componentDidMount() {

        this.service.findOne(this.props.user._id) 
            .then(theUser => {
                const User = theUser.data
                
                this.setState({
                    ...this.state,
                    user: User
                })
            })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.props.user)
    }

    // handleChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({ user: { ...this.props.user, [name]: value } });
    // }

    render() {
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white">
                        <div className="half-container">
                            <form onSubmit={this.handleFormSubmit}>
                                <Form label="Username" type="text" name="username" value={this.state.user.username} onchange={e => this.handleChange(e)} />
                                <Form label="Email" type="email" name="mail" value={this.state.user.mail} onchange={e => this.handleChange(e)} />
                                <Form label="Country" type="text" name="country" value={this.state.user.country} onchange={e => this.handleChange(e)} />
                                <Form label="Region" type="text" name="region" value={this.state.user.region} onchange={e => this.handleChange(e)} />
                                <Form label="City" type="text" name="city" value={this.state.user.city} onchange={e => this.handleChange(e)} />
                                <Form label="Address" type="text" name="direction" value={this.state.user.direction} onchange={e => this.handleChange(e)} />
                                <input type="submit" className="btn orange cursor" value="Save" />
                            </form>
                        </div>
                        <div className="half-container">
                            <h1>Home</h1>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
