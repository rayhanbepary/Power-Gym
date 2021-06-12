import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { RiYoutubeFill, RiFacebookFill, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={`footer-wrapper ${window.location.pathname === '/' ? 'footer-margin' : 'footer-margin-none'}`}>
            <div className="container">
                <div className="row">

                    <div className="col-md-3 ">
                        <img src={logo} width="50%" alt=""/>
                        <p style={{color: "#fff", marginTop: "20px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when content of a page when.</p>
                    </div>

                    <div className="col-md-2">
                        <h6 style={{color: "#ffffff"}}>Need Help?</h6>
                        <ul>
                            <li>
                                <Link to="/" className="link">Help Center</Link>
                            </li>
                            <li>
                                <Link to="/" className="link">Email Support</Link>
                            </li>
                            <li>
                                <Link to="/" className="link">Live Chat</Link>
                            </li>
                            <li>
                                <Link to="/" className="link">Gift Certificates</Link>
                            </li>
                            <li>
                                <Link to="/" className="link">Send Us Feedback</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h6 style={{color: "#ffffff"}}>Digital Resources</h6>
                        <ul>
                            <li>
                                <Link to="/" className="link">Articles</Link>
                            </li>
                            <li>
                                <Link to="/" className="link">E-books</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h6 style={{color: "#ffffff"}}>Connect With Us</h6>
                        <ul className="social-icons">
                            <li>
                                <Link to="/" className="link"><RiYoutubeFill/></Link>
                            </li>
                            <li>
                                <Link to="/" className="link"><RiFacebookFill/></Link>
                            </li>
                            <li>
                                <Link to="/" className="link"><RiInstagramLine/></Link>
                            </li>
                            <li>
                                <Link to="/" className="link"><FaTwitter/></Link>
                            </li>
                            <li>
                                <Link to="/" className="link"><RiWhatsappLine/></Link>
                            </li>
                        </ul>
                        <Link to="/" className="forum">Forum</Link>
                    </div>

                    <div className="col-md-3 ">
                        <h6 style={{color: "#ffffff"}}>Join Our Newsletter</h6>
                        <p style={{color: "#fff", marginTop: "20px"}}>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>

                    <p className="copyright">&copy; {new Date().getFullYear()} Rayhan Bepary. All Rights Reserved.</p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;