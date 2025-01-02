import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import ScrollButton from "../components/ScrollButton.jsx";

const Layout = (props) => {
    return (
        <>
            <ScrollButton/>
            <NavBar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;