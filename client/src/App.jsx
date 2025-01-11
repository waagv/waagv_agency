import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AllProjectPage from "./pages/AllProjectPage.jsx";
import DashboardPage from "./pages/AdminDashboard/DashboardPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import HeroDetailsPage from "./pages/AdminDashboard/Hero/HeroDetailsPage.jsx";
import HeroCreatePage from "./pages/AdminDashboard/Hero/HeroCreatePage.jsx";
import HeroUpdatePage from "./pages/AdminDashboard/Hero/HeroUpdatePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/allprojects" element={<AllProjectPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />

                {/* Admin Dashboard Route */}
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/herodetails" element={<HeroDetailsPage />} />
                <Route path="/dashboard/createhero" element={<HeroCreatePage />} />
                <Route path="/dashboard/updatehero" element={<HeroUpdatePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;