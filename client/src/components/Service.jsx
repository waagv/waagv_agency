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
        <section className="service">
            <div className="container">
                {/* <div className="text">
                    <h2>Services we provide</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ducimus eligendi
                        explicabo in, inventore ipsa minima molestiae </p>
                </div> */}
                <div className="row p-md-5 p-sm-5">
                    <div className="service-card-parent col-12 col-lg-3 col-md-6 col-sm-6 gap-2">
                        <div className="service-card">
                            <span><i class="bi bi-code-slash"></i></span>
                            <p>Web design &<br/>development</p>
                        </div>
                    </div>
                    <div className="service-card-parent col-12 col-lg-3 col-md-6 col-sm-6 gap-2">
                        <div className="service-card">
                            <span><i class="bi bi-tools"></i></span>
                            <p>Web<br/>revitalization</p>
                        </div>
                    </div>
                    <div className="service-card-parent col-12 col-lg-3 col-md-6 col-sm-6 gap-2">
                        <div className="service-card">
                            <span><i class="bi bi-pencil-square"></i></span>
                            <p>Responsive<br/>design</p>
                        </div>
                    </div>
                    <div className="service-card-parent col-12 col-lg-3 col-md-6 col-sm-6 gap-2">
                        <div className="service-card">
                            <span><i class="bi bi-bug-fill"></i></span>
                            <p>Website<br/>bug fixing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;