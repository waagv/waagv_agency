import React, {useState} from 'react';
import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";

const Contact = () => {

    const initialFormValue = { fname: "", lname: "", email: "", number: "", message: ""};
    const [formValue, setFormValue] = useState(initialFormValue);

    const InputChange = (InputName, InputValue) => {
        setFormValue((FormValues) => ({
            ...FormValues,
            [InputName]: InputValue
        }));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (ValidationHelper.IsEmpty(formValue.fname)) {
            toast.error('First Name is required!');
            return;
        } else if (ValidationHelper.IsEmpty(formValue.lname)) {
            toast.error('Last Name is required!');
            return;
        } else if (!ValidationHelper.IsEmail(formValue.email)) {
            toast.error('Valid email is required!');
            return;
        } else if (ValidationHelper.IsEmpty(formValue.number)) {
            toast.error('Contact Number is required!');
            return;
        } else if (!ValidationHelper.IsNumber(formValue.number)) {
            toast.error('Contact Number must be a valid number!');
            return;
        } else if (ValidationHelper.IsEmpty(formValue.message)) {
            toast.error('Message is required!');
            return;
        }

        console.log(JSON.stringify(formValue));
        toast.success('Form submitted successfully!');
        setFormValue(initialFormValue);
    }

    return (
        <section className="contact-form py-5">
            <div className="container">
                <div className="text">
                    <h2><span>Contact</span> Us</h2>
                    <p>Share your valuable opinion with us.</p>
                </div>
                <div className="contact-box">
                    <form onSubmit={formSubmit}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputFirstName" className="form-label">First
                                        Name</label> */}
                                    <input value={formValue.fname} onChange={(e)=>InputChange('fname', e.target.value)} type="text" className="form-control" id="exampleInputFirstName"
                                           placeholder="First Name" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputLastName" className="form-label">Last Name</label> */}
                                    <input value={formValue.lname} onChange={(e)=>InputChange('lname', e.target.value)} type="text" className="form-control" id="exampleInputLastName"
                                           placeholder="Last Name" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputEmail" className="form-label">Email
                                        Address</label> */}
                                    <input value={formValue.email} onChange={(e)=>InputChange('email', e.target.value)} type="text" className="form-control" id="exampleInputEmail"
                                           placeholder="Email Address" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleInputContactNumber" className="form-label">Contact
                                        Number</label> */}
                                    <input value={formValue.number} onChange={(e)=>InputChange('number', e.target.value)} type="text" className="form-control" id="exampleInputContactNumber"
                                           placeholder="Contact Number" aria-describedby="emailHelp"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="exampleInputMessage" className="form-label">Message</label> */}
                            <textarea value={formValue.message} onChange={(e)=>InputChange('message', e.target.value)} className="form-control" cols="30" rows="10" id="exampleInputMessage"
                                      placeholder="Your Message..." aria-describedby="emailHelp"></textarea>
                        </div>
                        <div className="contact-button">
                            <button type="submit" className="btn button-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;