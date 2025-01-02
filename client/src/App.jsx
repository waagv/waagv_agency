import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/contact" element={<ContactUsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;