import React, { useState } from 'react';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        setStatusMessage({ type: '', text: '' });

        const formData = new FormData(e.target);
        
        // TU NUEVA LLAVE DE WEB3FORMS
        formData.append("access_key", "1c056454-ecb4-4447-ae36-84c91c6cf4bf"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'success', text: '¡MENSAJE ENVIADO! Revisaremos tu propuesta pronto.' });
                e.target.reset();
            } else {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'error', text: 'Error al enviar. Intenta de nuevo.' });
            }
        } catch (error) {
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ type: 'error', text: 'Error de red. Revisa tu conexión.' });
        }
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
                {/* 1. SECCIÓN HERO */}
                <div className="hero-button-wrapper" style={{ position: 'relative' }}>
                    <Hero1 data={heroData.business} />
                    <div style={{ textAlign: 'center', marginTop: '-120px', position: 'relative', zIndex: '10', paddingBottom: '100px' }}>
                        <a href="#contact" className="btn-proyecto-prakxis">Comienza un proyecto</a>
                    </div>
                </div>

                {/* 2. SECCIÓN NOSOTROS */}
                <section id="about" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
                    <div className="container text-center">
                        <h2 className="display-4 fw-bold mb-4">Ciencia y Narrativa en Acción</h2>
                        <p className="lead text-muted">En Prakxis, transformamos el conocimiento complejo en historias humanas.</p>
                    </div>
                </section>

                {/* 3. SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '100px 0', backgroundColor: '#2d5a27' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-5 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <h2 className="text-center mb-4" style={{ color: '#2d5a27', fontWeight: 'bold' }}>Contáctanos</h2>
                                    
                                    <input type="hidden" name="subject" value="Nuevo mensaje desde Prakxis.com" />
                                    
                                    <div className="mb-3">
                                        <input type="text" name="name" className="form-control" placeholder="Tu nombre" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" name="email" className="form-control" placeholder="Tu email" required style={{ background: '#f8f9fa', padding: '12px' }} />
                                    </div>
                                    <div className="mb-4">
                                        <textarea name="message" className="form-control" rows="4" placeholder="¿Cómo podemos ayudarte?" required style={{ background: '#f8f9fa', padding: '12px' }}></textarea>
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

            <style jsx>{`
                .btn-proyecto-prakxis { background-color: #7ba293; color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 500; display: inline-block; transition: 0.3s; }
                .btn-proyecto-prakxis:hover { background-color: #2d5a27; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;