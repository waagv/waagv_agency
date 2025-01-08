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
            <div className="container p-md-4 px-sm-5">
                <h2>Why you should have a website?</h2>
                <div className="row">
                    <div className="col-12 col-lg-6 gap-2">
                        <div className="why-card">
                            <h4>Generate Leads 24/7</h4>
                            <p>A website works around the clock to capture customer inquiries, answer common questions, and even process orders. This lead generation is crucial for businesses looking to convert visitors into long-term clients, even when your physical location is closed.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 gap-2 small_device">
                        <div className="why-card">
                            <h4>Showcase Products & Services</h4>
                            <p>A website provides an organized space to showcase your products, services, or portfolio. High-quality images, detailed descriptions, and testimonials can help educate potential customers and build excitement for your offerings. Grow smart with business.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 gap-2 small_device">
                        <div className="why-card">
                            <h4>Compete in Industry</h4>
                            <p>In a competitive market, having a website is essential for keeping up with or outperforming competitors. A professionally designed website with effective SEO strategies ensures that your business ranks higher on Google and attracts more customers than businesses without an online presence.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 gap-2 small_device">
                        <div className="why-card">
                            <h4>Scale Your Business</h4>
                            <p>As your business grows, a website provides the scalability to reach more customers and expand your services. E-commerce solutions, online booking systems, and integration with other digital tools enable your business to grow and manage larger volumes of traffic or sales seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWebsite;