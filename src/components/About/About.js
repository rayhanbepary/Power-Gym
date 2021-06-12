import React from 'react';
import aboutImg from '../../img/about.jpg';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={aboutImg} width="100%" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="about-content">
                            <h2 className="about-header">About us</h2>
                            <h2 className="about-title-one">we are hear to dream!</h2>
                            <h2 className="about-title-two">our team is hear to surve you.</h2>
                            <p className="about-description">It is a long established fact that a reader will be distracted by the readable content of a page when.It is a long established fact that a reader will be distracted by the readable content of a page when.It is a long established fact that a reader will be distracted by the readable content of a page when.It is a long established fact that a reader will be distracted by the readable content of a page when.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-style"></div>
        </div>
    );
};

export default About;