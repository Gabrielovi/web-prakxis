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
                setSubmitButtonText('¡Mensaje Enviado!');
                e.target.reset();
            } else {
                setSubmitButtonText('Error al enviar');
            }
        } catch (error) {
            setSubmitButtonText('Reintentar');
        }
    };

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            {/* HEADER SIMPLE DE SEGURIDAD */}
            <nav style={{ padding: '20px', borderBottom: `1px solid ${colors.bgSec}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ color: colors.neon, margin: 0, fontWeight: 'bold', letterSpacing: '2px' }}>PRAKXIS</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none' }}>Prensa</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none' }}>Audiovisual</a>
                    <a href="#contact" style={{ color: colors.neon, textDecoration: 'none', fontWeight: 'bold' }}>Contacto</a>
                </div>
            </nav>
            
            <main>
                {/* HERO SECTION */}
                <section style={{ padding: '100px 20px', textAlign: 'center', background: `linear-gradient(180deg, ${colors.bg} 0%, ${colors.bgSec} 100%)` }}>
                    <h1 style={{ fontSize: '4rem', color: colors.neon, marginBottom: '20px' }}>Science for Everyone</h1>
                    <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', opacity: 0.8 }}>
                        Transformamos el conocimiento complejo en narrativas visuales de alto impacto.
                    </p>
                </section>

                {/* SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 style={{ color: colors.neon, fontSize: '2.5rem' }}>Reportajes de Prensa</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Investigación y narrativa periodística sobre el medio ambiente y gestión hídrica.</p>
                        </div>
                        <div style={{ flex: '1 1 400px', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.muted}`, boxShadow: `0 0 20px ${colors.bg}` }}>
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                    src="https://www.youtube.com/embed/VX789WILzkQ" 
                                    title="Guardianes del Agua" 
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '40px', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.muted}` }}>
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
                            <h2 style={{ color: colors.neon, fontSize: '2.5rem' }}>Producción Audiovisual</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Documentales que conectan el rigor científico con la emoción social.</p>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '100px 20px' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', backgroundColor: colors.bgSec, borderRadius: '20px', border: `1px solid ${colors.neon}` }}>
                        <form onSubmit={handleSubmit}>
                            <h2 style={{ textAlign: 'center', color: colors.neon, marginBottom: '30px' }}>Inicia un Proyecto</h2>
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Cómo podemos ayudarte?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: colors.neon,
                                color: colors.bg,
                                border: 'none',
                                borderRadius: '30px',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}>{submitButtonText}</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${colors.bgSec}` }}>
                <p>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    backgroundColor: '#0B0C10',
    border: '1px solid #45A29E',
    color: '#C5C6C7',
    borderRadius: '8px',
    outline: 'none'
};

export default IndexBusiness;