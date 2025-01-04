import React, {useEffect} from 'react';
import ScrollReveal from "scrollreveal";

const About = () => {

    useEffect(() => {
        ScrollReveal().reveal('.about .heading h2', {
            origin: 'top',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.about .col-12', {
            origin: 'right',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    return (
        <section id="aboutus" className="about py-5">
            <div className="container">
                <div className="row">
                    <div className="heading col-12 col-lg-3">
                        <h2>About<span>waagv</span></h2>
                    </div>
                    <div className="col-12 col-lg-9">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae deleniti dicta eos dolor sit amet, consectetur adipisicing elit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae deleniti dicta eos dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;