import React, {useEffect} from "react";
import Slider from "react-slick";
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

const Testimonial = () => {

    useEffect(() => {
        ScrollReveal().reveal('.testimonial .text', {
            origin: 'right',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.testimonial .slick-slider', {
            origin: 'left',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
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
        <section className="testimonial py-5" id="testimonials">
            <div className="container">
                <div className="text">
                    <h2>Our Testimonials</h2>
                    <p>Creating a foundation of trust for lasting success</p>
                </div>
                <Slider {...settings}>
                    <div className="comment p-4 bg-light">
                        <span><i class="bi bi-quote"></i></span>
                        <p>The website WAAGV created for us is visually appealing and user-friendly. Their expertise and dedication were evident in every step of the process.</p>
                        <h5><span>-</span>Raaf Singloree</h5>
                    </div>
                    <div className="comment p-4 bg-light">
                        <span><i class="bi bi-quote"></i></span>
                        <p>They provided top-notch service. They were responsive, knowledgeable, and ensured the website met all our requirements. Excellent work!</p>
                        <h5><span>-</span>Nahin Sultan</h5>
                    </div>
                    <div className="comment p-4 bg-light">
                        <span><i class="bi bi-quote"></i></span>
                        <p>Paid close attention to my needs and ensured the website reflected my style and goals. They truly care about their clients.</p>
                        <h5><span>-</span>Berry Pomeroy</h5>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;