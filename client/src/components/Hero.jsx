import React, { useEffect } from 'react';
import image from '../assets/images/hero_image.svg';
import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal';

const Hero = () => {
    useEffect(() => {
        ScrollReveal().reveal('.hero .text h1', {
            origin: 'left',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.hero .text p', {
            origin: 'left',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.hero .text a', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.hero .hero-img', {
            origin: 'top',
            distance: '100px',
            duration: 1000,
            delay: 500,
            reset: false,
        });
    }, []);

    return (
        <section className="hero py-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="text sm_center">
                            <h1>Empowering your <br /> <span>online venture</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus eligendi
                                explicabo in, inventore ipsa minima molestiae </p>
                            <Link to='/' className="btn btn-success">Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-sm-5">
                        <div className="hero-img d-flex align-items-center justify-content-lg-end justify-content-sm-center">
                            <img className="img-fluid" src={image} alt="hero image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
