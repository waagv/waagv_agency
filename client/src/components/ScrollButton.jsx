import React, { useEffect } from 'react';

const ScrollButton = () => {
    useEffect(() => {
        const scrollTobBtn = document.querySelector(".scrollToTop-btn");

        const handleScroll = () => {
            if (scrollTobBtn) {
                scrollTobBtn.classList.toggle("active", window.scrollY > 500);
            }
        };

        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener("scroll", handleScroll);

        if (scrollTobBtn) {
            scrollTobBtn.addEventListener('click', scrollToTop);
        }

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTobBtn) {
                scrollTobBtn.removeEventListener('click', scrollToTop);
            }
        };
    }, []);

    return (
        <div className="scrollToTop-btn">
            <i className="bi bi-arrow-up"></i>
        </div>
    );
};

export default ScrollButton;
