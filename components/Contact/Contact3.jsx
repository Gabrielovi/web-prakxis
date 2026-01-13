import React, { useState } from 'react';
import { Map2 } from '..';

const Contact3 = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Send Message');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitButtonText('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setSubmitButtonText('Send Message');
        }
    };

    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-2 hover-border-wrapper">
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="p-4 p-lg-5 hover-border hover-border-active">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-telephone"></i>
                            </div>
                            <h5>Phone</h5>
                            {data.phoneNumbers.map((phone, index) => (
                                <p key={index}>{phone}</p>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="p-4 p-lg-5 hover-border">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-whatsapp"></i>
                            </div>
                            <h5>WhatsApp</h5>
                            {data.whatsApp.map((phone, index) => (
                                <p key={index}>{phone}</p>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="p-4 p-lg-5 hover-border">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <h5>Email</h5>
                            {data.emails.map((email, index) => (
                                <span key={index}>{email}</span>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="p-4 p-lg-5 hover-border">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <h5>Address</h5>
                            <span>{data.address}</span>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt-1">
                    <div className="col-12 col-xl-6">
                        <Map2 />
                    </div>
                    <div className="col-12 col-xl-6 text-xl-end">
                        <div className="contact-form">
                            <form className="form-style-2" method="post" id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="E-Mail"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button className="button button-lg button-rounded button-dark button-hover-slide" type="submit">
                                    <span data-text={submitButtonText}>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="submit-result">
                                {submitStatus === 'success' && (
                                    <span id="success">Thank you! Your Message has been sent.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span id="error">Something went wrong, Please try again!</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact3