import React, { Component } from 'react';
import './Profile.css';
import Form from '../form/Form';
import AuthService from '../../service/auth-service';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: "",
                mail: "",
                country: "",
                region: "",
                city: "",
                direction: "",
                photouser: ""
            },
            redirect: false,
            photouserTemp: ""
        };
        this.service = new AuthService();
    }

    componentDidMount() {

        this.setState({
            ...this.state,
            user: this.props.user
        })

    }

    handleFormSubmit(e) {
        e.preventDefault();
        const username = this.state.user.username;
        const mail = this.state.user.mail;
        const country = this.state.user.country;
        const region = this.state.user.region;
        const city = this.state.user.city;
        const direction = this.state.user.direction;
        const photouser = this.state.user.photouser;
        const id = this.state.user._id;

        this.service.editProfile(username, mail, country, region, city, direction, photouser, id)
            .then(user => {
                this.props.editDates(user)
            })
            .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
    }

    checkUploadResult(result) {
        this.setState({
            ...this.state,
            photouserTemp: result.info.secure_url
        })
        if (result.event === 'success') {
            this.setState({ user: { ...this.state.user, photouser: result.info.secure_url } })
        }
    }

    showWidget() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_NAME,
            uploadPreset: process.env.REACT_APP_CLOUDINARY_PRESET
        }, (error, result) => { this.checkUploadResult(result) })
        widget.open();
    }

    render() {
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container white">
                        <div className="half-container overflow padding">
                            <h2>Edit profile</h2>
                            <form className="form-auth" onSubmit={e => this.handleFormSubmit(e)}>
                                <div className="input-edit-profile">
                                    <Form labelCss="dispay-none" placeholder="username" inputCss="input-auth" label="Username" type="text" name="username" value={this.state.user.username} onchange={e => this.handleChange(e)} />
                                    <Form labelCss="dispay-none" placeholder="e-mail" inputCss="input-auth" label="Email" type="email" name="mail" value={this.state.user.mail} onchange={e => this.handleChange(e)} />
                                    <Form labelCss="dispay-none" placeholder="country" inputCss="input-auth" label="Country" type="text" name="country" value={this.state.user.country} onchange={e => this.handleChange(e)} />
                                    <Form labelCss="dispay-none" placeholder="region" inputCss="input-auth" label="Region" type="text" name="region" value={this.state.user.region} onchange={e => this.handleChange(e)} />
                                    <Form labelCss="dispay-none" placeholder="city" inputCss="input-auth" label="City" type="text" name="city" value={this.state.user.city} onchange={e => this.handleChange(e)} />
                                    <Form labelCss="dispay-none" placeholder="address" inputCss="input-auth" label="Address" type="text" name="direction" value={this.state.user.direction} onchange={e => this.handleChange(e)} />
                                </div>
                                <input type="submit" className="btn orange cursor" value="Save" />
                            </form>
                        </div>
                        <div className="half-container photo-profile-container">
                            <div className="profile-page-image">
                                <div style={{ backgroundImage: `url(${this.state.user.photouser})` }} />
                                <button type="button" name="firstImage" onClick={() => this.showWidget()} className="btn light-blue cursor">Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
