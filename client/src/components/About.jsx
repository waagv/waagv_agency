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
        <section className="about" id='aboutus'>
            <div className="container">
                <div className="row">
                    <div className="heading col-12 col-lg-3">
                        <h2>About<span>waagv</span></h2>
                    </div>
                    <div className="col-12 col-lg-9 px-sm-5">
                        <p>Empowering your business with expert web development solutions</p>
                        <p>At <b>WAAGV</b>, we are a leading web development agency committed to delivering advanced, high-performance web solutions for <b>your</b> businesses. As a trusted partner in Canada, we empower small and medium-sized businesses to grow your online presence, attract more customers, and increase profitability. Whether you’re in plumbing, roofing, real estate, legal services, or e-commerce, we create professional websites that drive results and set your business up for long-term success
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;