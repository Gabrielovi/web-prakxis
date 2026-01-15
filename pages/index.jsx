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
        const formData = new FormData(e.target);
        formData.append("access_key", "1c056454-ecb4-4447-ae36-84c91c6cf4bf"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'success', text: '¡MENSAJE ENVIADO! Nos contactaremos pronto.' });
                e.target.reset();
            } else {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'error', text: 'Error al enviar.' });
            }
        } catch (error) {
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ type: 'error', text: 'Error de red.' });
        }
    };

    return (
        <div className="main-page-wrapper">
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Inicio', href: '/' },
                    { text: 'Prensa', href: '#prensa' },
                    { text: 'Audiovisual', href: '#audiovisual' },
                    { text: 'Diseño', href: '#diseno' },
                    { text: 'Contacto', href: '#contact' }
                ]
            }} />
            
            <main>
                <div className="hero-button-wrapper" style={{ position: 'relative' }}>
                    <Hero1 data={heroData.business} />
                    <div style={{ textAlign: 'center', marginTop: '-120px', position: 'relative', zIndex: '10', paddingBottom: '100px' }}>
                        <a href="#contact" className="btn-proyecto-prakxis">Comienza un proyecto</a>
                    </div>
                </div>

                {/* 1. SECCIÓN: REPORTAJES DE PRENSA */}
                <section id="prensa" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="display-5 fw-bold mb-4" style={{ color: '#2d5a27' }}>Reportajes de Prensa</h2>
                                <p className="lead text-muted">Investigación y narrativa periodística sobre el medio ambiente. Analizamos la crisis hídrica y los desafíos territoriales con rigor y profundidad.</p>
                                <ul className="list-unstyled mt-4">
                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{color: '#7ba293'}}></i> Gestión de crisis hídrica</li>
                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{color: '#7ba293'}}></i> Conflictos socioambientales</li>
                                    <li className="mb-2"><i className="fas fa-check-circle me-2" style={{color: '#7ba293'}}></i> Crónicas de terreno</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="ratio ratio-16x9 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                    <iframe src="https://www.youtube.com/embed/VX789WILzkQ" title="Guardianes del Agua" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SECCIÓN: PRODUCCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '100px 0', backgroundColor: '#f4f7f6' }}>
                    <div className="container">
                        <div className="row align-items-center flex-lg-row-reverse">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="display-5 fw-bold mb-4" style={{ color: '#2d5a27' }}>Producción Audiovisual</h2>
                                <p className="lead text-muted">Documentales y piezas visuales de alto impacto. Traducimos el lenguaje científico en una experiencia cinematográfica que conecta con la sociedad.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="ratio ratio-16x9 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                    <iframe src="https://www.youtube.com/embed/byLR2SCeWo8?start=99" title="Audiovisual Prakxis" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SECCIÓN: DISEÑO Y CIENCIA */}
                <section id="diseno" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <i className="fas fa-microscope fa-4x mb-4" style={{ color: '#7ba293' }}></i>
                                <h2 className="display-5 fw-bold mb-4" style={{ color: '#2d5a27' }}>Diseño y Comunicación Científica</h2>
                                <p className="lead text-muted">Aterrizamos el conocimiento complejo. Diseñamos estrategias de comunicación y visualización de datos para que la ciencia sea accesible para todos los públicos.</p>
                                <div className="row mt-5">
                                    <div className="col-md-4"><h5 className="fw-bold">Infografías</h5></div>
                                    <div className="col-md-4"><h5 className="fw-bold">Branding Científico</h5></div>
                                    <div className="col-md-4"><h5 className="fw-bold">Ciencia Ciudadana</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '100px 0', backgroundColor: '#2d5a27' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form onSubmit={handleSubmit} className="p-5 bg-white shadow-lg" style={{ borderRadius: '20px' }}>
                                    <h2 className="text-center mb-4" style={{ color: '#2d5a27', fontWeight: 'bold' }}>Hablemos de tu proyecto</h2>
                                    <input type="hidden" name="subject" value="Nuevo contacto - Prakxis.com" />
                                    <div className="mb-3"><input type="text" name="name" className="form-control" placeholder="Nombre" required style={{ background: '#f8f9fa' }} /></div>
                                    <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" required style={{ background: '#f8f9fa' }} /></div>
                                    <div className="mb-4"><textarea name="message" className="form-control" rows="4" placeholder="Mensaje" required style={{ background: '#f8f9fa' }}></textarea></div>
                                    <button type="submit" className="btn w-100 py-3" style={{ backgroundColor: '#7ba293', color: '#fff', borderRadius: '30px', fontWeight: 'bold' }}>{submitButtonText}</button>
                                    {statusMessage.text && <div className="text-center mt-3" style={{ color: statusMessage.type === 'success' ? '#2d5a27' : 'red', fontWeight: 'bold' }}>{statusMessage.text}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-4 text-center bg-dark text-white">
                <p className="mb-0">© 2026 Prakxis - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .btn-proyecto-prakxis { background-color: #7ba293; color: white; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 500; display: inline-block; transition: 0.3s; }
                .btn-proyecto-prakxis:hover { background-color: #2d5a27; transform: translateY(-3px); }
            `}</style>
        </div>
    );
};

export default IndexBusiness;