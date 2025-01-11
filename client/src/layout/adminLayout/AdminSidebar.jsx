import React from 'react';
import logo from "../../assets/images/hero.png";
import Menu from "./Menu.jsx";
import {Link} from "react-router-dom";

const AdminSidebar = () => {
    return (
        <section className="sidebar">
            <div className="btn btn-outline-dark" data-bs-toggle="offcanvas"
                 data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i
                className="bi bi-menu-button"></i>
            </div>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1"
                 id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <div className="logo">
                        <Link to="/dashboard">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <h5>Admin Dashboard</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Menu/>
                </div>
            </div>
        </section>
    );
};

export default AdminSidebar;