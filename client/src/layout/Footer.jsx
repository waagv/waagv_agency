import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
                <img src="" alt="footer logo"/>
                <div className="row d-flex justify-content-between align-items-center mt-5">
                    <div className="col-12 col-lg-4">
                        <div className="contact d-flex align-items-center gap-5">
                            <span><i className="bi bi-geo-alt"></i></span>
                            <div className="text">
                                <h4>Address</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="contact d-flex justify-content-lg-center align-items-center gap-5">
                            <span><i className="bi bi-phone-flip"></i></span>
                            <div className="text">
                                <h4>Phone</h4>
                                <p>+8801993996162 </p>
                                <p>+8801993996162 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="contact d-flex justify-content-lg-end align-items-center gap-5">
                            <span><i className="bi bi-envelope-open"></i></span>
                            <div className="text">
                                <h4>Email</h4>
                                <p>agency@gmail.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="icon-box d-flex justify-content-center">
                    <div className="icon mt-4">
                        <Link to="/">
                            <span><i className="bi bi-facebook"></i></span>
                        </Link>
                        <Link to="/">
                            <span><i className="bi bi-linkedin"></i></span>
                        </Link>
                        <Link to="/">
                            <span><i className="bi bi-whatsapp"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;