import React, {useEffect} from 'react';
import ScrollReveal from "scrollreveal";

const Service = () => {

    useEffect(() => {
        ScrollReveal().reveal('.service .text', {
            origin: 'top',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.service .row', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    return (
        <section id="service" className="service py-5">
            <div className="container">
                <div className="text">
                    <h2>Services we provide</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus eligendi
                        explicabo in, inventore ipsa minima molestiae </p>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-3 gap-2">
                        <div className="service-card">
                            <span><i className="bi bi-lightbulb"></i></span>
                            <p>Services</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 gap-2">
                        <div className="service-card">
                            <span><i className="bi bi-lightbulb"></i></span>
                            <p>Services</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 gap-2">
                        <div className="service-card">
                            <span><i className="bi bi-lightbulb"></i></span>
                            <p>Services</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 gap-2">
                        <div className="service-card">
                            <span><i className="bi bi-lightbulb"></i></span>
                            <p>Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;