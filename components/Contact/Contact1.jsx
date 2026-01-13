import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = ({ data, italic, removeTitle, dark }) => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');

        // Estos IDs deben ser EXACTAMENTE los de tu panel de EmailJS
        emailjs.sendForm(
            'service_69w8h6p',   
            'template_87y5vfq',  
            form.current,
            'W6v_Mh_9vSg_M1lXn'  
        )
        .then(() => {
            setSubmitStatus('success');
            setSubmitButtonText('Enviar mensaje');
            form.current.reset();
        })
        .catch((error) => {
            console.error('FAILED...', error);
            setSubmitStatus('error');
            setSubmitButtonText('Enviar mensaje');
        });
    };

    return (
        <div className="section-spacing pb-0">
            <div className="container">
                <h1 className="display-3 fw-medium text-center">¿Listo para conectar?</h1>
                <div className="row g-5 mt-1">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        <div className="contact-form">
                            {/* IMPORTANTE: El atributo 'ref' debe estar aquí */}
                            <form ref={form} id="contactform" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="from_name" placeholder="Nombre" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="reply_to" placeholder="Email" required />
                                    </div>
                                </div>
                                <textarea name="message" placeholder="Tu mensaje" required></textarea>
                                <button className="button button-lg button-gradient-1" type="submit">
                                    <span>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                {submitStatus === 'success' && <span style={{color: 'green'}}>¡Mensaje enviado con éxito!</span>}
                                {submitStatus === 'error' && <span style={{color: 'red'}}>Error al enviar. Revisa la consola.</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact1;

// Versión final corregida