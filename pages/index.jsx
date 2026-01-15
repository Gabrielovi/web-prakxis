import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const form = useRef();
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const headerData = {
        menuItems: [
            { text: 'Inicio', href: '/' },
            { text: 'Nosotr@s', href: '#about' },
            { text: 'Contenido', href: '#contenido' },
            { text: 'Contacto', href: '#contact' }
        ],
        socialLinks: [{ iconClass: 'fab fa-instagram', href: 'https://instagram.com/prakxis' }]
    };

    const multimediaItems = [
        { title: "El Futuro del Agua", category: "Reportaje", description: "Gestión hídrica en zonas áridas.", icon: "fas fa-file-alt" },
        { title: "Prakxis: Video Destacado", category: "Video", description: "Ciencia y narrativa en acción.", link: "https://www.youtube.com/embed/byLR2SCeWo8?start=99", icon: "fas fa-play-circle" },
        { title: "Ciencia Ciudadana", category: "Reportaje", description: "Comunidades transformando datos.", icon: "fas fa-microscope" }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        setStatusMessage({ type: '', text: '' });

        // CAMBIO DE ESTRATEGIA: Parámetros directos y forzados
        const serviceID = 'service_f4cmbfs';
        const templateID = 'template_o2v2x2p';
        const publicKey = 'xBzhZborPqwkBlFf7';

        emailjs.sendForm(serviceID, templateID, e.target, publicKey)
            .then((result) => {
                console.log('¡ÉXITO!', result.text);
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'success', text: '¡MENSAJE ENVIADO! La revolución ha triunfado.' });
                e.target.reset();
            })
            .catch((error) => {
                console.error('FALLO CRÍTICO:', error);
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ 
                    type: 'error', 
                    text: `Error: ${error.text}. Intenta actualizar el servicio en el panel de EmailJS.` 
                });
            });
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

                <section id="about" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                    <div className="container text-center">
                        <h2 className="display-4 fw-bold mb-4">Ciencia y Narrativa en Acción</h2>
                        <p className="lead text-muted">Transformamos conocimiento complejo en historias humanas.</p>
                    </div>
                </section>

                <section id="contenido" style={{ padding: '80px 0', backgroundColor: '#f4f7f6' }}>
                    <div className="container">
                        <div className="row">
                            {multimediaItems.map((item, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card h-100 border-0 shadow-sm card-prakxis">
                                        {item.category === 'Video' ? (
                                            <div className="ratio ratio-16x9">
                                                <iframe src={item.link} title={item.title} allowFullScreen style={{ border: 'none' }}></iframe>
                                            </div>
                                        ) : (
                                            <div style={{ padding: '45px', backgroundColor: '#eee', textAlign: 'center' }}>
                                                <i className={`${item.icon} fa-3x`} style={{ color: '#2d5a27' }}></i>
                                            </div>
                                        )}
                                        <div className="card-body p-4 text-center">
                                            <span className="badge bg-success mb-2">{item.category}</span>
                                            <h4 className="h5 fw-bold">{item.title}</h4>
                                            <p className="small text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" style={{ padding: '100px 0', backgroundColor: '#2d5a27' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-5 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <h2 className="text-center mb-4" style={{ color: '#2d5a27' }}>Contáctanos</h2>
                                    <input type="text" name="from_name" className="form-control mb-3" placeholder="Tu nombre" required />
                                    <input type="email" name="reply_to" className="form-control mb-3" placeholder="Tu email" required />
                                    <textarea name="message" className="form-control mb-4" rows="4" placeholder="Tu mensaje" required></textarea>
                                    <button type="submit" className="btn w-100 py-3" style={{ backgroundColor: '#7ba293', color: '#fff', borderRadius: '30px', fontWeight: 'bold' }}>
                                        {submitButtonText}
                                    </button>
                                    {statusMessage.text && (
                                        <div className="text-center mt-3" style={{ color: statusMessage.type === 'success' ? 'green' : 'red', fontWeight: 'bold' }}>
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
                .card-prakxis { border-radius: 15px; overflow: hidden; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;