import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/hero.png'
import AdminSidebar from "./AdminSidebar.jsx";

const AdminNavBar = () => {
    return (
        <section className="adminDashboard py-3 bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <AdminSidebar/>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <div className="profile">
                            <div className="dropdown-toggle" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><Link to='/' className="dropdown-item">Login</Link></li>
                                <li><Link to='/' className="dropdown-item">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminNavBar;