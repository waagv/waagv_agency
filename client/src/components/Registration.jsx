import React from 'react';

const Registration = () => {
    return (
        <section className="registration py-5">
            <div className="container">
                <div className="text">
                    <h2>Registration</h2>
                    <p>Share your valuable opinion with us.</p>
                </div>
                <div className="contact-box">
                    <form>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputFirstName" className="form-label">First
                                        Name</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName"
                                           placeholder="Enter First Name..." aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputLastName"
                                           placeholder="Enter Last Name..." aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail" className="form-label">Email
                                        Address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail"
                                           placeholder="Enter Email..." aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputContactNumber" className="form-label">Contact
                                        Number</label>
                                    <input type="email" className="form-control" id="exampleInputContactNumber"
                                           placeholder="Enter Number..." aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                            <input type="email" className="form-control" id="exampleInputPassword"
                                   placeholder="Enter Password..." aria-describedby="emailHelp"/>
                        </div>
                        <button aria-label="register button" type="submit" className="btn btn-success">Register</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Registration;