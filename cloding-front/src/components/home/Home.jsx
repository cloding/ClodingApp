import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pageStructure">
                    <div className="container">
                        <div className="half-container home">
                            <h1>Create your clothes with coding!</h1>
                            <div className="text-home-center">
                                <p>Cloding is the first page that allows you to create and edit T-shirts, sweatshirts and pants directly with the programming. Give space to your imagination!</p>
                            </div>
                            <Link className="btn purple" to={"/designer"}>Designer</Link>
                        </div>
                        <div className="half-container home-right">
                            <img src="https://res.cloudinary.com/dgp1wgz95/image/upload/v1557993277/Cloding/wear/homeIPad_Tavola_disegno_1_ntd2ah.png" alt="ipad-model" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
