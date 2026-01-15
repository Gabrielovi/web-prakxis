import React, { useState } from 'react';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1', // Calipso
        muted: '#45A29E'
    };

    // Aquí puedes agregar todos los videos que quieras
    const prensaVideos = ["VX789WILzkQ"]; 
    const audiovisualVideos = ["byLR2SCeWo8", "otra_id_de_video"]; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        const formData = new FormData(e.target);
        formData.append("access_key", "1c056454-ecb4-4447-ae36-84c91c6cf4bf"); 
        try {
            const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
            const data = await response.json();
            if (data.success) { setSubmitButtonText('¡Enviado!'); e.target.reset(); }
            else { setSubmitButtonText('Error'); }
        } catch (error) { setSubmitButtonText('Reintentar'); }
    };

    return (
        <div className="main-page-wrapper" style={{ backgroundColor: colors.bg, color: colors.text }}>
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Prensa', href: '#prensa' },
                    { text: 'Diseño', href: '#diseno' },
                    { text: 'Audiovisual', href: '#audiovisual' },
                    { text: 'Contacto', href: '#contact' }
                ]
            }} />
            
            <main>
                <Hero1 data={{
                    ...heroData.business,
                    title: "Ciencia que conecta",
                    subtitle: "Transformamos el conocimiento complejo en narrativas visuales de alto impacto."
                }} />

                {/* 1. SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <h2 className="display-5 fw-bold" style={{ color: colors.neon }}>Reportajes de Prensa</h2>
                                <p className="lead">Investigación y narrativa periodística de profundidad sobre el medio ambiente.</p>
                            </div>
                            <div className="col-lg-7">
                                <div className="video-slider">
                                    {prensaVideos.map((id) => (
                                        <div key={id} className="ratio ratio-16x9 rounded-4 overflow-hidden border border-secondary shadow-lg mb-3">
                                            <iframe src={`https://www.youtube.com/embed/${id}`} title="Prensa" allowFullScreen></iframe>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SECCIÓN DISEÑO (ESPACIO PARA PLEXUS O GRÁFICOS) */}
                <section id="diseno" style={{ padding: '100px 0', backgroundColor: colors.bgSec }}>
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold" style={{ color: colors.neon }}>Diseño y Visualización</h2>
                        <p className="lead mb-5">Convertimos datos científicos en experiencias estéticas y comprensibles.</p>
                        <div style={{ height: '300px', border: `1px dashed ${colors.neon}`, borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           <p style={{ color: colors.muted }}>[ Visualización de Datos / Efectos Generativos ]</p>
                        </div>
                    </div>
                </section>

                {/* 3. SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row align-items-center flex-lg-row-reverse">
                            <div className="col-lg-5">
                                <h2 className="display-5 fw-bold" style={{ color: colors.neon }}>Producción Audiovisual</h2>
                                <p className="lead">Documentales que conectan el rigor científico con la emoción social.</p>
                            </div>
                            <div className="col-lg-7">
                                <div className="video-horizontal-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }}>
                                    {audiovisualVideos.map((id) => (
                                        <div key={id} style={{ minWidth: '80%', flexShrink: 0 }} className="ratio ratio-16x9 rounded-4 overflow-hidden border border-secondary shadow-lg">
                                            <iframe src={`https://www.youtube.com/embed/${id}`} title="Audiovisual" allowFullScreen></iframe>
                                        </div>
                                    ))}
                                </div>
                                <small style={{ color: colors.muted }}>← Desliza para ver más videos</small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '100px 0', backgroundColor: colors.bgSec }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 p-5 rounded-5 border shadow-lg" style={{ borderColor: colors.neon }}>
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-center mb-4" style={{ color: colors.neon }}>Hablemos de Ciencia</h3>
                                    <input type="text" name="name" className="form-control mb-3 custom-input" placeholder="Nombre" required />
                                    <input type="email" name="email" className="form-control mb-3 custom-input" placeholder="Email" required />
                                    <textarea name="message" className="form-control mb-4 custom-input" placeholder="Tu mensaje" required rows="4"></textarea>
                                    <button type="submit" className="btn w-100 py-3 fw-bold" style={{ backgroundColor: colors.neon, color: colors.bg, borderRadius: '50px' }}>
                                        {submitButtonText}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
                .custom-input { background-color: #0B0C10 !important; border: 1px solid #45A29E !important; color: #C5C6C7 !important; }
                .custom-input:focus { border-color: #66FCF1 !important; box-shadow: 0 0 10px rgba(102, 252, 241, 0.2) !important; }
                .video-horizontal-scroll::-webkit-scrollbar { height: 6px; }
                .video-horizontal-scroll::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;