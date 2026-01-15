import React, { useState } from 'react';

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1', // Tu calipso elegido
        muted: '#45A29E'
    };

    // IDs de tus videos de YouTube
    const videosPrensa = ["VX789WILzkQ"];
    const videosAudiovisual = ["byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            {/* MENU SIMPLE */}
            <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(11,12,16,0.9)', position: 'sticky', top: 0, zIndex: 100 }}>
                <h2 style={{ color: colors.neon, margin: 0, fontSize: '1.5rem', letterSpacing: '2px' }}>PRAKXIS</h2>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none' }}>Prensa</a>
                    <a href="#diseno" style={{ color: colors.text, textDecoration: 'none' }}>Diseño</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none' }}>Audiovisual</a>
                </div>
            </nav>

            <main>
                {/* HERO: CIENCIA QUE CONECTA */}
                <section style={{ padding: '100px 20px', textAlign: 'center', background: `linear-gradient(180deg, #0B0C10 0%, #1F2833 100%)` }}>
                    <h1 style={{ fontSize: '4rem', color: colors.neon, fontWeight: 'bold' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '20px auto', opacity: 0.8 }}>
                        Transformamos el conocimiento complejo en narrativas visuales de alto impacto.
                    </p>
                </section>

                {/* 1. ESPACIO PRENSA */}
                <section id="prensa" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.neon, borderLeft: `4px solid ${colors.neon}`, paddingLeft: '15px', marginBottom: '40px' }}>Reportajes de Prensa</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }} className="scroll-custom">
                            {videosPrensa.map(id => (
                                <div key={id} style={{ minWidth: '100%', maxWidth: '800px', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.muted}` }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. ESPACIO DISEÑO */}
                <section id="diseno" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ color: colors.neon, marginBottom: '30px' }}>Diseño y Visualización</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto 40px' }}>Estética científica aplicada a la comunicación de datos y conceptos complejos.</p>
                        <div style={{ height: '300px', border: `1px dashed ${colors.neon}`, borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg }}>
                            <span style={{ color: colors.muted, letterSpacing: '5px' }}>VISUALIZACIÓN GENERATIVA</span>
                        </div>
                    </div>
                </section>

                {/* 3. ESPACIO AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.neon, borderLeft: `4px solid ${colors.neon}`, paddingLeft: '15px', marginBottom: '40px', textAlign: 'right' }}>Producción Audiovisual</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px', flexDirection: 'row-reverse' }} className="scroll-custom">
                            {videosAudiovisual.map(id => (
                                <div key={id} style={{ minWidth: '100%', maxWidth: '800px', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.muted}` }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p style={{ textAlign: 'right', color: colors.muted, marginTop: '10px' }}>← Desliza para ver más</p>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '100px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '20px', border: `1px solid ${colors.neon}`, backgroundColor: colors.bg }}>
                        <h3 style={{ color: colors.neon, textAlign: 'center', marginBottom: '30px' }}>Hablemos de Ciencia</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Qué proyecto tienes en mente?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: colors.neon, color: colors.bg, border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar Mensaje</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
                <p>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '12px', marginBottom: '20px', backgroundColor: '#0B0C10', border: '1px solid #45A29E', color: '#C5C6C7', borderRadius: '8px', outline: 'none'
};

export default IndexBusiness;