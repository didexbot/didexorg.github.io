import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class Header extends Component {
    render() {
        return (
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">We make Web3</h1>
                            {/* <hr className="divider my-4" /> */}
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">Research <small> & </small> Development</p>
                            {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
                            <p className="text-white-75 font-weight-light mb-5">
                                {/* <FontAwesomeIcon icon={['fab', 'telegram']} /> */}
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
