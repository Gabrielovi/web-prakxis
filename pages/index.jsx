import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const form = useRef();
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    // LLAVE CORRECTA: xBzhZborPqwkBlFf7 (verificada en tu captura 12.25.04)
    const PUBLIC_KEY = "xBzhZborPqwkBlFf7";

    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, []);

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
        {
            title: "Reportaje: El Futuro del Agua",
            category: "Reportaje",
            description: "Una investigación profunda sobre la gestión hídrica en zonas áridas.",
            link: "#", 
            icon: "fas fa-file-alt"
        },
        {
            title: "Prakxis: Video Destacado",
            category: "Video",
            description: "Nuestra última producción visual sobre ciencia y narrativa en acción.",
            link: "https://www.youtube.com/embed/byLR2SCeWo8?start=99", 
            icon: "fas fa-play-circle"
        },
        {
            title: "Reportaje: Ciencia Ciudadana",
            category: "Reportaje",
            description: "Cómo las comunidades están transformando la recolección de datos.",
            link: "#",
            icon: "fas fa-microscope"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        setStatusMessage({ type: '', text: '' });

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
            console.error("Detalle del error:", error);
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ 
                type: 'error', 
                text: `Error: ${error.text || 'Revisa la conexión en EmailJS'}` 
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
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <h2 className="display-4 fw-bold mb-4">Ciencia y Narrativa en Acción</h2>
                                <p className="lead text-muted">En Prakxis, transformamos el conocimiento complejo en historias humanas. Creemos que la ciencia debe ser entendida por todos.</p>
                            </div>
                        </div>
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
                                            <div style={{ padding: '45px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
                                                <i className={`${item.icon} fa-3x`} style={{ color: '#2d5a27' }}></i>
                                            </div>
                                        )}
                                        <div className="card-body p-4">
                                            <span className="badge mb-3 badge-prakxis">{item.category}</span>
                                            <h4 className="card-title fw-bold mb-2">{item.title}</h4>
                                            <p className="card-text text-muted mb-4 small">{item.description}</p>
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
                            <div className="col-lg-6 text-center mb-5 text-white">
                                <h2 className="display-5 fw-bold mb-3">¿Listo para conectar?</h2>
                                <p>Cuéntanos sobre tu proyecto y descubramos cómo la narrativa puede potenciar tu ciencia.</p>
                            </div>
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <input type="text" name="from_name" className="form-control mb-3" placeholder="Tu nombre" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    <input type="email" name="reply_to" className="form-control mb-3" placeholder="Tu email" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    <textarea name="message" className="form-control mb-4" rows="4" placeholder="¿En qué podemos ayudarte?" required style={{ background: '#f8f9fa', padding: '12px' }}></textarea>
                                    
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

            <style jsx>{`
                .btn-proyecto-prakxis { background-color: #7ba293; color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 500; display: inline-block; }
                .card-prakxis { border-radius: 15px; overflow: hidden; transition: 0.3s; }
                .badge-prakxis { background-color: #2d5a27; color: #fff; padding: 5px 12px; border-radius: 5px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;