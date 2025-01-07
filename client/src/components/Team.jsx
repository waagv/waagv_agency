import React, {useEffect} from "react";
import Slider from "react-slick";
import mozahid from "../assets/images/mozahid-bg.png";
import atikur from "../assets/images/atikur_rahman.png";
import image1 from "../assets/images/hero.png";
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

const Team = () => {

    useEffect(() => {
        ScrollReveal().reveal('.team .text', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });

        ScrollReveal().reveal('.team .slick-slider', {
            origin: 'top',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
        <section className="team py-5">
            <div className="container">
                <div className="text">
                    <h2>Our brilliant team</h2>
                    <p>The team that goes above and beyond for your success</p>
                </div>
                <Slider {...settings}>
                    <div className="team-details">
                        <img src={mozahid} alt="image"/>
                        <h5>Al Mozahid</h5>
                        <p>Founder & CEO | Front-end Developer</p>
                    </div>
                    <div className="team-details">
                        <img src={atikur} alt="image"/>
                        <h5>Atikur Rahman</h5>
                        <p>Co-Founder & CTO | Full-stack Developer</p>
                    </div>
                    <div className="team-details">
                        <img src={image1} alt="image"/>
                        <h5>Mark Straw</h5>
                        <p>Mern Developer</p>
                    </div>
                    <div className="team-details">
                        <img src={image1} alt="image"/>
                        <h5>Danis Lee</h5>
                        <p>Ui/Ux Designer</p>
                    </div>
                    <div className="team-details">
                        <img src={image1} alt="image"/>
                        <h5>Michell Mars</h5>
                        <p>Backend Developer</p>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Team;