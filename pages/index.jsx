import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        setStatusMessage({ type: '', text: '' });

        // CREDENCIALES VERIFICADAS EN TUS CAPTURAS
        const SERVICE_ID = 'service_f4cmbfs'; //
        const TEMPLATE_ID = 'template_o2v2x2p';
        const PUBLIC_KEY = 'xBzhZborPqwkBlFf7'; //

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'success', text: '¡LOGRADO! Mensaje enviado con éxito.' });
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ 
                    type: 'error', 
                    text: `Error: ${error.text || 'Consulta la consola'}` 
                });
            });
    };

    return (
        <div className="main-page-wrapper">
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Inicio', href: '/' },
                    { text: 'Nosotr@s', href: '#about' },
                    { text: 'Contenido', href: '#contenido' },
                    { text: 'Contacto', href: '#contact' }
                ],
                socialLinks: [{ iconClass: 'fab fa-instagram', href: 'https://instagram.com/prakxis' }]
            }} />
            
            <main>
                <Hero1 data={heroData.business} />

                <section id="contact" style={{ padding: '100px 0', backgroundColor: '#2d5a27' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-5 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <h2 className="text-center mb-4" style={{ color: '#2d5a27', fontWeight: 'bold' }}>¿Listo para conectar?</h2>
                                    <div className="mb-3">
                                        <input type="text" name="from_name" className="form-control" placeholder="Tu nombre" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name="reply_to" className="form-control" placeholder="Tu email" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?" required style={{ background: '#f8f9fa', padding: '12px' }}></textarea>
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

            <footer style={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#111', color: '#fff' }}>
                <p className="mb-0">© 2026 Prakxis - Science for Everyone</p>
            </footer>
        </div>
    );
};

export default IndexBusiness;