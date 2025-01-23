import React from 'react';

const Login = () => {
    return (
        <section className="login py-5">
            <div className="container">
                <div className="text">
                    <h2>Login</h2>
                    <p>Share your valuable opinion with us.</p>
                </div>
                <div className="contact-box">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email
                                Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail"
                                   placeholder="Enter Email..." aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                            <input type="email" className="form-control" id="exampleInputPassword"
                                   placeholder="Enter Password..." aria-describedby="emailHelp"/>
                        </div>
                        <button aria-label="login button" type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;