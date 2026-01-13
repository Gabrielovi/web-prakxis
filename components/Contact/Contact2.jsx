import React, { useState } from 'react';

const Contact1 = ({ data, gradient5 }) => {
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
                <div className="row g-5">
                    <div className="col-12 col-lg-4">
                        <h5>Phone</h5>
                        {data.phoneNumbers.map((phone, index) => (
                            <p key={index}>{phone}</p>
                        ))}
                        <div className="mt-3 mt-lg-4">
                            <h5>Email</h5>
                            <span>{data.email}</span>
                        </div>
                        <div className="mt-3 mt-lg-4">
                            <h5>Address</h5>
                            <span>{data.address}</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="contact-form">
                            <form className="form-border-radius" method="post" id="contactform" onSubmit={handleSubmit}>
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
                                <button
                                    className={`button button-lg button-rounded ${gradient5 ? 'button-gradient-5' : 'button-gradient-2' } button-hover-slide`}
                                    type="submit"
                                >
                                    <span data-text={submitButtonText}>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="submit-result">
                                {submitStatus === 'success' && (
                                    <span id="success">Thank you! Your Message has been sent.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span id="error">Something went wrong. Please try again!</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact1;
