import React, {Component, useEffect} from "react";
import Slider from "react-slick";
import project1 from "../assets/images/project-1.webp";
import project2 from "../assets/images/project-2.webp";
import project3 from "../assets/images/project-3.webp";
import {Link} from "react-router-dom";
import ScrollReveal from "scrollreveal";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}

const Work = () => {

    useEffect(() => {
        ScrollReveal().reveal('.work .work-box', {
            origin: 'top',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.work .slick-slider', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='work'>
            <div className="container">
                <div>
                    <div className="work-box py-5">
                        <h2>Our Work</h2>
                        <p><q>Building websites that make an impact and drive growth</q></p>
                    </div>
                    <Slider {...settings}>
                        <div className="image-bg">
                            <Link target="blank" to='https://608e8c718ee80a405652c5d6--peaceful-wozniak-e797b8.netlify.app/'>
                                <img src={project1} loading="lazy" alt="image"/>
                                <p>Stock Room</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </Link>
                        </div>
                        <div className="image-bg">
                            <Link target="blank" to='https://al-mozahid.github.io/PH-Assignment-04/index.html'>
                                <img src={project2} loading="lazy" alt="image"/>
                                <p>Booking Flisht</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </Link>
                        </div>
                        <div className="image-bg">
                            <Link target="blank" to='https://superlative-cobbler-a4e027.netlify.app/'>
                                <img src={project3} loading="lazy" alt="image"/>
                                <p>Restaurant</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="image-bg">
                            <Link to='/'>
                                <img src={project1} alt="image"/>
                                <p>Booking App</p>
                                <div className="overlay">
                                    <p>Live Demo</p>
                                </div>
                            </Link>
                        </div> */}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Work;