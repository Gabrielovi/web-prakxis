import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = ({ data, italic, removeTitle, dark }) => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');

        emailjs.sendForm(
            'service_69w8h6p',   // Tu Service ID
            'template_87y5vfq',  // Tu Template ID
            form.current,
            'W6v_Mh_9vSg_M1lXn'   // Tu Public Key
        )
        .then((result) => {
            setSubmitStatus('success');
            setSubmitButtonText('Enviar mensaje');
            form.current.reset(); 
        }, (error) => {
            setSubmitStatus('error');
            setSubmitButtonText('Enviar mensaje');
            console.log("Error de EmailJS:", error);
        });
    };

    return (
        <div className="section-spacing pb-0">
            <div className="container">
                {removeTitle ?? (
                    <h1 className="display-3 fw-medium text-center">
                        ¿Listo para <span className="text-highlight-gradient-1">conectar?</span>
                    </h1>
                )}
                <div className="row g-5 mt-1">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="contact-form">
                            <form ref={form} className="form-border-radius" id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input type="text" name="name" placeholder="Nombre" required />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input type="email" name="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <textarea name="message" placeholder="Tu mensaje" required></textarea>
                                <button
                                    className={`button button-lg button-rounded ${dark ? 'button-dark' : 'button-gradient-1'} button-hover-slide`}
                                    type="submit"
                                    style={{width: '100%'}}
                                >
                                    <span data-text={submitButtonText}>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="submit-result mt-3 text-center">
                                {submitStatus === 'success' && (
                                    <span style={{color: '#90EE90'}}>¡Gracias! Tu mensaje ha sido enviado.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span style={{color: '#FF6347'}}>Algo salió mal. Por favor intenta de nuevo.</span>
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
// cambio de prueba