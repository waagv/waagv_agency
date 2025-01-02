import React from 'react';
import Layout from "../layout/Layout.jsx";
import Hero from "../components/Hero.jsx";
import Service from "../components/Service.jsx";
import About from "../components/About.jsx";
import WhyWebsite from "../components/WhyWebsite.jsx";
import Work from "../components/Work.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Team from "../components/Team.jsx";
import Chat from "../components/Chat.jsx";

const HomePage = () => {
    return (
        <Layout>
            <Hero/>
            <Service/>
            <About/>
            <WhyWebsite/>
            <Work/>
            <Testimonial/>
            <Team/>
            <Chat/>
        </Layout>
    );
};

export default HomePage;