import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="display-table">
                            <div className="table-cell">
                                <div className="hero-content">
                                    <h2 className="hero-title">The best fitness studio in town</h2>
                                    <p className="hero-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                    <Link to="/membership"><button className="join-us">join us</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="display-table">
                            <div className="table-cell">
                                <div className="hero-video" />
                                <Link to="/" className="play-btn"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Hero;