import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact1 = ({ data, italic, removeTitle, dark }) => {
    const form = useRef();
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const handleSubmit = (e) => {
        // Si el evento existe, evitamos que recargue la página
        if (e && e.preventDefault) e.preventDefault();
        
        console.log("¡Click detectado! Iniciando envío..."); 
        setSubmitButtonText('Enviando...');

        // Los IDs que ya verificamos que son correctos
        emailjs.sendForm(
            'service_69w8h6p',   
            'template_87y5vfq',  
            form.current,
            'W6v_Mh_9vSg_M1lXn'  
        )
        .then(() => {
            console.log("¡ENVÍO EXITOSO!");
            setSubmitStatus('success');
            setSubmitButtonText('Enviar mensaje');
            if (form.current) form.current.reset();
        })
        .catch((error) => {
            console.error('ERROR EN EL ENVÍO:', error);
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
                            {/* Vinculamos el formulario a la referencia 'form' */}
                            <form ref={form} id="contactform">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="from_name" placeholder="Nombre" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" name="reply_to" placeholder="Email" required />
                                    </div>
                                </div>
                                <textarea name="message" placeholder="Tu mensaje" required></textarea>
                                
                                {/* Botón con onClick forzado y zIndex para que nada lo tape */}
                                <button 
                                    className="button button-lg button-gradient-1" 
                                    type="button" 
                                    onClick={() => handleSubmit()}
                                    style={{ zIndex: 9999, position: 'relative', cursor: 'pointer' }}
                                >
                                    <span>{submitButtonText}</span>
                                </button>
                            </form>

                            <div className="text-center mt-3">
                                {submitStatus === 'success' && <span style={{color: 'green', fontWeight: 'bold'}}>¡Mensaje enviado con éxito!</span>}
                                {submitStatus === 'error' && <span style={{color: 'red', fontWeight: 'bold'}}>Error al enviar. Revisa la consola.</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact1;