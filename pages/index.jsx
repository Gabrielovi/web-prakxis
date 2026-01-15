import React, { useState } from 'react';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1',
        muted: '#45A29E'
    };

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
                setSubmitButtonText('¡Conexión Exitosa!');
                e.target.reset();
            } else {
                setSubmitButtonText('Error');
            }
        } catch (error) {
            setSubmitButtonText('Reintentar');
        }
    };

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            {/* MENÚ DE NAVEGACIÓN */}
            <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'rgba(11, 12, 16, 0.95)', zIndex: 1000 }}>
                <h2 style={{ color: colors.neon, margin: 0, fontWeight: 'bold', letterSpacing: '3px' }}>PRAKXIS</h2>
                <div style={{ display: 'flex', gap: '30px' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Prensa</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Audiovisual</a>
                    <a href="#contact" style={{ color: colors.neon, textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>Contacto</a>
                </div>
            </nav>
            
            <main>
                {/* HERO: CIENCIA QUE CONECTA */}
                <section style={{ padding: '120px 20px', textAlign: 'center', borderBottom: `1px solid ${colors.bgSec}` }}>
                    <h1 style={{ fontSize: '4.5rem', color: colors.neon, marginBottom: '20px', fontWeight: 'bold' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto', color: colors.text, opacity: 0.9 }}>
                        Transformamos el conocimiento complejo en narrativas visuales de alto impacto.
                    </p>
                </section>

                {/* SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '100px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ color: colors.neon, fontSize: '2.8rem', marginBottom: '20px' }}>Reportajes de Prensa</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>Investigación y narrativa periodística de profundidad sobre el medio ambiente y la gestión hídrica.</p>
                        </div>
                        <div style={{ flex: '1 1 500px', borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.muted}`, boxShadow: `0 20px 40px rgba(0,0,0,0.5)` }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/VX789WILzkQ" 
                                    title="Prensa" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '100px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '50px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 500px', borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.muted}` }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/byLR2SCeWo8" 
                                    title="Audiovisual" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ color: colors.neon, fontSize: '2.8rem', marginBottom: '20px' }}>Producción Audiovisual</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>Documentales y piezas visuales que conectan el rigor científico con la emoción social.</p>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '120px 20px' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '50px', backgroundColor: colors.bgSec, borderRadius: '30px', border: `1px solid ${colors.neon}`, boxShadow: `0 0 30px rgba(102, 252, 241, 0.1)` }}>
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ textAlign: 'center', color: colors.neon, marginBottom: '40px', fontSize: '2.2rem' }}>Hablemos de Ciencia</h2>
                            <input type="text" name="name" placeholder="Tu Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Tu Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Qué proyecto tienes en mente?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{
                                width: '100%',
                                padding: '18px',
                                backgroundColor: colors.neon,
                                color: colors.bg,
                                border: 'none',
                                borderRadius: '40px',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>{submitButtonText}</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '60px', textAlign: 'center', borderTop: `1px solid ${colors.bgSec}`, opacity: 0.6 }}>
                <p>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '25px',
    backgroundColor: '#0B0C10',
    border: '1px solid #45A29E',
    color: '#C5C6C7',
    borderRadius: '12px',
    outline: 'none',
    fontSize: '1rem'
};

export default IndexBusiness;