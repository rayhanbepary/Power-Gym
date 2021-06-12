import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import logo from '../../img/logo.png';

const Navigation = () => {

    // sticky navbar
    $(window).scroll(function () {
        $('.nav-wrapper').toggleClass('sticky', $(this).scrollTop() > 0);
    })

    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light main-nav">
                            <Link className="navbar-brand logo" to="/">
                                <img src={logo} alt="logo" style={{ width: '50%', height: 'auto' }} />
                            </Link>
                            <button className="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <FaAlignRight className="nav-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/services">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/classes">Our Classes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blog">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/pricing">Pricing</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navigation;