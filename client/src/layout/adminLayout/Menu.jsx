import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <section className="menu">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseHero"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Hero
                        </button>
                    </h2>
                    <div
                        id="collapseHero"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul className="list-group">
                                <NavLink
                                    to="/dashboard/herodetails"
                                    className={({ isActive }) =>
                                        `list-group-item ${isActive ? 'active' : ''}`}
                                >
                                    Hero Details
                                </NavLink>
                                <NavLink
                                    to="/dashboard/createhero"
                                    className={({ isActive }) =>
                                        `list-group-item ${isActive ? 'active' : ''}`}
                                >
                                    Hero Create
                                </NavLink>
                                <NavLink
                                    to="/dashboard/updatehero"
                                    className={({ isActive }) =>
                                        `list-group-item ${isActive ? 'active' : ''}`}
                                >
                                    Hero Update
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
