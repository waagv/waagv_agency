import React, { useEffect, useState } from 'react';
import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";
import ContactStore from "../stores/ContactStore.js";

const Contact = () => {
    const initialFormValue = { fname: "", lname: "", email: "", number: "", message: "" };
    const [formValue, setFormValue] = useState(initialFormValue);
    const { contactList, contactListFormRequest } = ContactStore();

    const InputChange = (InputName, InputValue) => {
        setFormValue((FormValues) => ({
            ...FormValues,
            [InputName]: InputValue,
        }));
    };

    const formSubmit = async (e) => {
        e.preventDefault();

        if (ValidationHelper.IsEmpty(formValue.fname)) {
            toast.error("First Name is required!");
            return;
        } else if (ValidationHelper.IsEmpty(formValue.lname)) {
            toast.error("Last Name is required!");
            return;
        } else if (!ValidationHelper.IsEmail(formValue.email)) {
            toast.error("Valid email is required!");
            return;
        } else if (ValidationHelper.IsEmpty(formValue.number)) {
            toast.error("Contact Number is required!");
            return;
        } else if (!ValidationHelper.IsNumber(formValue.number)) {
            toast.error("Contact Number must be a valid number!");
            return;
        } else if (ValidationHelper.IsEmpty(formValue.message)) {
            toast.error("Message is required!");
            return;
        }

        try {
            await contactListFormRequest(formValue);
            toast.success("Message received successfully! Please check your email for reply!");
            setFormValue(initialFormValue);
        } catch (error) {
            // console.error(error);
            toast.error("Failed to submit the form.");
        }
    };

    useEffect(() => {
        if (!contactList) {
            console.log("No contact list available");
        }
    }, [contactList]);

    return (
        <section className="contact-form py-5">
            <div className="container">
                <div className="text">
                    <h2>
                        <span>Contact</span> Us
                    </h2>
                    <p>Share your valuable opinion with us.</p>
                </div>
                <div className="contact-box">
                    <form onSubmit={formSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <input
                                        value={formValue.fname}
                                        onChange={(e) => InputChange("fname", e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <input
                                        value={formValue.lname}
                                        onChange={(e) => InputChange("lname", e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <input
                                        value={formValue.email}
                                        onChange={(e) => InputChange("email", e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <input
                                        value={formValue.number}
                                        onChange={(e) => InputChange("number", e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder="Contact Number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                value={formValue.message}
                                onChange={(e) => InputChange("message", e.target.value)}
                                className="form-control"
                                rows="10"
                                placeholder="Your Message..."
                            ></textarea>
                        </div>
                        <div className="contact-button">
                            <button type="submit" className="btn button-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
