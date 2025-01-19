import React from 'react';
import image1 from "../assets/images/project-1.webp";
import image2 from "../assets/images/project-2.webp";
import image3 from "../assets/images/project-3.webp";
import {Link} from "react-router-dom";

const AllProjects = () => {
    return (
        <section className="work py-5">
            <div className="container">
                <div className="text">
                    <h2>Most Recent Works</h2>
                    <p>Building websites that make an impact and drive growth</p>
                </div>
                <div className="row project">
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image1} alt="image"/>
                                <p>Stock Room</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image2} alt="image"/>
                                <p>Booking Flight</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4 project-box">
                        <Link to='/'>
                            <div className="image-bg">
                                <img src={image3} alt="image"/>
                                <p>Restaurant</p>
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