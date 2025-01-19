import React from 'react';
import {Link} from "react-router-dom";
import image from "../assets/images/yellow_png.webp";

const Footer = () => {
    return (
        <footer className="footer py-5">
            <div className="container">
                <img className='footer-logo' src={image} alt="footer logo"/>
                <div className="row d-flex justify-content-between align-items-center mt-5">
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="contact d-flex justify-content-lg-start align-items-center gap-4">
                            <span><i className="bi bi-phone-flip"></i></span>
                            <div className="text">
                                <h4>Phone</h4>
                                <p>+1 ( 204 ) 890 6579</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6">
                        <div className="contact d-flex justify-content-lg-start align-items-center gap-4">
                            <span><i className="bi bi-envelope-open"></i></span>
                            <div className="text">
                                <h4>Email</h4>
                                <p>waagvit@gmail.com </p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_address col-12 col-lg-4 col-md-6">
                        <div className="contact d-flex justify-content-lg-start align-items-center gap-4 ">
                            <span><i className="bi bi-geo-alt"></i></span>
                            <div className="text">
                                <h4>Address</h4>
                                <p>1789 Pembina Hwy, Winnipeg, MB </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="icon-box d-flex justify-content-center">
                    <div className="icon mt-4">
                        <Link aria-label="linkedin profile" target='blank' to="https://www.linkedin.com/company/waagv">
                            <span><i className="bi bi-linkedin"></i></span>
                        </Link>
                        <Link aria-label="twitter X profile" target='blank' to="https://x.com/waagvit">
                            <span><i className="bi bi-twitter-x"></i></span>
                        </Link>
                        <Link aria-label="instagram profile" target='blank' to="https://www.instagram.com/waagvit/">
                            <span><i className="bi bi-instagram"></i></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;