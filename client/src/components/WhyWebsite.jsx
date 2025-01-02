import React, {useEffect} from 'react';
import ScrollReveal from "scrollreveal";

const WhyWebsite = () => {

    useEffect(() => {
        ScrollReveal().reveal('.why h2', {
            origin: 'left',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.why .col-12', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    return (
        <section className='why py-5'>
            <div className="container">
                <h2>Why you should have a website?</h2>
                <div className="row">
                    <div className="col-12 col-lg-6 gap-2">
                        <div className="why-card">
                            <h4>Brand Building</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae consectetur
                                consequuntur dolor doloribus facere harum </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 gap-2">
                        <div className="why-card">
                            <h4>Brand Building</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae consectetur
                                consequuntur dolor doloribus facere harum </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 gap-2">
                        <div className="why-card">
                            <h4>Brand Building</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae consectetur
                                consequuntur dolor doloribus facere harum </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 gap-2">
                        <div className="why-card">
                            <h4>Brand Building</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae consectetur
                                consequuntur dolor doloribus facere harum </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWebsite;