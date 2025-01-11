import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import ScrollButton from "../components/ScrollButton.jsx";
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <ScrollButton/>
            <NavBar/>
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </>
    );
};

export default Layout;