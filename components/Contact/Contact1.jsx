import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = ({ data, italic, removeTitle, dark }) => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Send Message');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Sending...');

        emailjs.sendForm(
            'service_69w8h6p',   // Tu Service ID
            'template_87y5vfq',  // Tu Template ID
            form.current,
            'W6v_Mh_9vSg_M1lXn'   // Tu Public Key
        )
        .then((result) => {
            setSubmitStatus('success');
            setSubmitButtonText('Send Message');
            form.current.reset(); // Limpia el formulario
        }, (error) => {
            setSubmitStatus('error');
            setSubmitButtonText('Send Message');
        });
    };

    return (
        <div className="section-spacing pb-0">
            <div className="container">
                {removeTitle ?? (
                    italic ? (
                        <h1 className="display-3 fw-normal font-family-tertiary fst-italic text-dark-30 text-center">Get in Touch</h1>
                    ) : dark ? (
                        <h1 className="display-3 fw-semi-bold uppercase text-center">Get in Touch</h1>
                    ) : (
                        <h1 className="display-3 fw-medium text-center">
                            Get in <span className="text-highlight-gradient-1">Touch</span>
                        </h1>
                    )
                )}
                <div className="row g-5 mt-1">
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
                            <form ref={form} className="form-border-radius" id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="name" placeholder="Name" required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="email" name="email" placeholder="E-Mail" required />
                                    </div>
                                </div>
                                <input type="text" name="subject" placeholder="Subject" required />
                                <textarea name="message" placeholder="Message" required></textarea>
                                <button
                                    className={`button button-lg button-rounded ${dark ? 'button-dark' : 'button-gradient-1'} button-hover-slide`}
                                    type="submit"
                                >
                                    <span data-text={submitButtonText}>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="submit-result">
                                {submitStatus === 'success' && (
                                    <span id="success" style={{color: 'green'}}>¡Gracias! Tu mensaje ha sido enviado con éxito.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span id="error" style={{color: 'red'}}>Algo salió mal. ¡Por favor intenta de nuevo!</span>
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