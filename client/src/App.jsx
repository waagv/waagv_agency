import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AllProjectPage from "./pages/AllProjectPage.jsx";
import Dashboard from "./pages/AdminDashboard/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/allprojects" element={<AllProjectPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;