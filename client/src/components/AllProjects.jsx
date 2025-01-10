import React from 'react';
import image1 from "../assets/images/hero.png";
import {Link} from "react-router-dom";

const AllProjects = () => {
    return (
        <section className="work py-5">
            <div className="container">
                <div className="text">
                    <h2>Most Recent Works</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="row project">
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllProjects;