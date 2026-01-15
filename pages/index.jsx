import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    // LLAVE CORREGIDA SEGÚN CAPTURA 12.25.04: xBzhZborPqwkBlFf7
    const PUBLIC_KEY = "xBzhZborPqwkBlFf7";

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        setStatusMessage({ type: '', text: '' });

        // IDs VERIFICADOS: service_f4cmbfs | template_o2v2x2p
        emailjs.sendForm(
            'service_f4cmbfs', 
            'template_o2v2x2p', 
            e.target, 
            PUBLIC_KEY
        )
        .then(() => {
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ type: 'success', text: '¡Mensaje enviado con éxito!' });
            e.target.reset();
        })
        .catch((error) => {
            console.error("Error detectado:", error);
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ 
                type: 'error', 
                text: `Error: ${error.text || 'Revisa la conexión de tu servicio Gmail'}` 
            });
        });
    };

    const headerData = {
        menuItems: [
            { text: 'Inicio', href: '/' },
            { text: 'Nosotr@s', href: '#about' },
            { text: 'Contenido', href: '#contenido' },
            { text: 'Contacto', href: '#contact' }
        ],
        socialLinks: [{ iconClass: 'fab fa-instagram', href: 'https://instagram.com/prakxis' }]
    };

    return (
        <div className="main-page-wrapper">
            <HeaderTransparentLight data={headerData} />
            <main>
                <div className="hero-button-wrapper" style={{ position: 'relative' }}>
                    <Hero1 data={heroData.business} />
                    <div style={{ textAlign: 'center', marginTop: '-120px', position: 'relative', zIndex: '10', paddingBottom: '100px' }}>
                        <a href="#contact" className="btn-proyecto-prakxis">Comienza un proyecto</a>
                    </div>
                </div>

                <section id="contact" style={{ padding: '100px 0', backgroundColor: '#2d5a27', color: '#fff' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <h2 className="text-center mb-4" style={{ color: '#2d5a27' }}>¿Listo para conectar?</h2>
                                    <div className="mb-3">
                                        <input type="text" name="from_name" className="form-control" placeholder="Tu nombre" required style={{ background: '#f8f9fa', border: '1px solid #eee', padding: '12px' }} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name="reply_to" className="form-control" placeholder="Tu email" required style={{ background: '#f8f9fa', border: '1px solid #eee', padding: '12px' }} />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" className="form-control" rows="4" placeholder="Tu mensaje" required style={{ background: '#f8f9fa', border: '1px solid #eee', padding: '12px' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn w-100 py-3" style={{ backgroundColor: '#7ba293', color: '#fff', borderRadius: '30px', fontWeight: 'bold' }}>
                                        {submitButtonText}
                                    </button>
                                    {statusMessage.text && (
                                        <div className="text-center mt-3" style={{ color: statusMessage.type === 'success' ? '#2d5a27' : 'red', fontWeight: 'bold' }}>
                                            {statusMessage.text}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <style jsx>{`
                .btn-proyecto-prakxis { background-color: #7ba293; color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 500; display: inline-block; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;