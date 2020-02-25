import React, { Fragment } from 'react';
import Logo from "../assets/images/logo.jpg"

const Header = () => {
    return (
        <Fragment>
            <div className="container-fluid bg-dark-blue">
                <div className="container">
                    <nav className="navbar navbar-expand-lg rounded-0">
                        <a className="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link text-white">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link yellow-btn">Account</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;