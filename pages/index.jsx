import React, { useState, useEffect } from 'react';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    // Tu paleta de colores elegida
    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1',
        muted: '#45A29E'
    };

    // Lógica del Formulario
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
                setSubmitButtonText('¡Enviado!');
                e.target.reset();
            } else {
                setSubmitButtonText('Error');
            }
        } catch (error) {
            setSubmitButtonText('Reintentar');
        }
    };

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh' }}>
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Prensa', href: '#prensa' },
                    { text: 'Audiovisual', href: '#audiovisual' },
                    { text: 'Contacto', href: '#contact' }
                ]
            }} />
            
            <main>
                <Hero1 data={heroData.business} />

                {/* SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '80px 0', borderBottom: `1px solid ${colors.bgSec}` }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                                <h2 className="display-5 fw-bold" style={{ color: colors.neon }}>Narrativa de Datos</h2>
                                <p className="lead">Investigación periodística con rigor científico y estética digital.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="ratio ratio-16x9 rounded-4 shadow-lg border border-secondary overflow-hidden">
                                    <iframe src="https://www.youtube.com/embed/VX789WILzkQ" title="Guardianes" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 0', backgroundColor: colors.bgSec }}>
                    <div className="container">
                        <div className="row align-items-center flex-lg-row-reverse">
                            <div className="col-lg-6 mb-4">
                                <h2 className="display-5 fw-bold" style={{ color: colors.neon }}>Producción Audiovisual</h2>
                                <p className="lead">Documentales que conectan el rigor científico con la emoción social.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="ratio ratio-16x9 rounded-4 shadow-lg border border-dark overflow-hidden">
                                    <iframe src="https://www.youtube.com/embed/byLR2SCeWo8" title="Audiovisual" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 p-5 rounded-5 shadow-lg" style={{ backgroundColor: colors.bgSec, border: `1px solid ${colors.neon}` }}>
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-center mb-4" style={{ color: colors.neon }}>Inicia la Conversación</h3>
                                    <input type="text" name="name" className="form-control mb-3 custom-input" placeholder="Nombre" required />
                                    <input type="email" name="email" className="form-control mb-3 custom-input" placeholder="Email" required />
                                    <textarea name="message" className="form-control mb-4 custom-input" placeholder="¿Qué conectamos hoy?" required rows="4"></textarea>
                                    <button type="submit" className="btn w-100 py-3 fw-bold" style={{ backgroundColor: colors.neon, color: colors.bg, borderRadius: '50px' }}>
                                        {submitButtonText}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-5 text-center" style={{ borderTop: `1px solid ${colors.bgSec}` }}>
                <p className="mb-0">© 2026 Prakxis - Science for Everyone</p>
            </footer>

            <style jsx global>{`
                .custom-input {
                    background-color: #0B0C10 !important;
                    border: 1px solid #45A29E !important;
                    color: #C5C6C7 !important;
                }
                .custom-input:focus {
                    border-color: #66FCF1 !important;
                    box-shadow: 0 0 10px rgba(102, 252, 241, 0.2) !important;
                }
            `}</style>
        </div>
    );
};

export default IndexBusiness;