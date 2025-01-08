import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/images/waagv-logo.webp";

const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header sticky-top ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <Link to='/' className="navbar-brand nav-logo">
                        <img src={logo} alt="nav logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink to='/' className={({isActive}) => isActive ? 'navActive' : 'pending'}
                                         aria-current="page">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                {/*<NavLink to='/about' className={({isActive}) => isActive ? 'navActive' : 'pending'}*/}
                                {/*         aria-current="page">About Us</NavLink>*/}
                                <a href="#aboutus">About us</a>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/allprojects'
                                         className={({isActive}) => isActive ? 'navActive' : 'pending'}
                                         aria-current="page">Projects</NavLink>
                            </li>

                            <li className="nav-item">
                                {/*<NavLink to='/service' className={({isActive}) => isActive ? 'navActive' : 'pending'}*/}
                                {/*         aria-current="page">Service</NavLink>*/}
                                <a href="#service">Service</a>
                            </li>

                        </ul>
                    </div>
                    <div className="cta-button">
                        <Link to='/' className='btn btn-nav button-primary'>Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;