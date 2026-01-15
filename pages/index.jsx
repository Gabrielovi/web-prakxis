import React from 'react';

const IndexBusiness = () => {
    // Paleta de Colores Versión Blanca (Científica/Limpia)
    const colors = {
        bg: '#FFFFFF',
        bgSec: '#F4F7F6', // Un gris verdoso muy tenue
        text: '#1F2833',
        neon: '#45A29E', // Un calipso más profundo para lectura sobre blanco
        accent: '#66FCF1', // Calipso brillante para botones
        border: '#E1E4E8'
    };

    const notasPrensa = [
        {
            titulo: "UFRO presentó plataforma georreferenciada de salud pública",
            url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/",
            medio: "Contacto Salud",
            img: "https://contactosalud.cl/wp-content/uploads/2024/05/UFRO-SALUD.jpg" 
        },
        {
            titulo: "Nuevo libro 'Del despojo surge la esperanza'",
            url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233",
            medio: "Araucanía Noticias",
            img: "https://araucanianoticias.cl/wp-content/uploads/2024/01/libro-despojo.jpg" 
        }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            {/* NAV BLANCO */}
            <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.9)', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                        src="/images/logo/logo_01.png" 
                        alt="Prakxis" 
                        style={{ height: '35px' }} 
                        onError={(e) => e.target.style.display='none'} 
                    />
                    <span style={{ color: colors.text, fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>PRAKXIS</span>
                </div>

                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Prensa</a>
                    <a href="#diseno" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Diseño</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Audiovisual</a>
                    <a href="#contact" style={{ 
                        backgroundColor: colors.accent, 
                        color: '#1F2833', 
                        padding: '8px 20px', 
                        borderRadius: '20px', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                    }}>Conectemos</a>
                </div>
            </nav>

            <main>
                {/* HERO BLANCO */}
                <section style={{ padding: '120px 20px', textAlign: 'center', background: `linear-gradient(180deg, #FFFFFF 0%, ${colors.bgSec} 100%)` }}>
                    <h1 style={{ fontSize: '3.5rem', color: colors.text, fontWeight: 'bold' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.2rem', color: colors.neon, marginTop: '10px', fontWeight: '500' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. ESPACIO PRENSA */}
                <section id="prensa" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.text, marginBottom: '40px', fontSize: '1.8rem', borderLeft: `5px solid ${colors.accent}`, paddingLeft: '15px' }}>Reportajes de Prensa</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" style={{ 
                                backgroundColor: 'white', borderRadius: '15px', textDecoration: 'none', overflow: 'hidden', border: `1px solid ${colors.border}`, transition: '0.3s', display: 'block', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }} className="card-nota">
                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                    <img src={nota.img} alt={nota.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <small style={{ color: colors.neon, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ color: colors.text, marginTop: '10px', fontSize: '1.1rem', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. ESPACIO DISEÑO (RECUPERADO) */}
                <section id="diseno" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ color: colors.text, marginBottom: '20px', fontSize: '1.8rem' }}>Diseño y Visualización</h2>
                        <p style={{ color: colors.neon, marginBottom: '40px' }}>Convertimos datos en piezas estéticas de comunicación.</p>
                        <div style={{ 
                            height: '400px', 
                            backgroundColor: 'white', 
                            borderRadius: '20px', 
                            border: `1px solid ${colors.border}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02)'
                        }}>
                             <span style={{ color: colors.border, letterSpacing: '3px', fontWeight: 'bold' }}>PORTAFOLIO DISEÑO</span>
                        </div>
                    </div>
                </section>

                {/* 3. ESPACIO AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.text, marginBottom: '40px', fontSize: '1.8rem', borderLeft: `5px solid ${colors.accent}`, paddingLeft: '15px' }}>Producción Audiovisual</h2>
                    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }} className="scroll-custom">
                        {videosAudiovisual.map(id => (
                            <div key={id} style={{ minWidth: '85%', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.border}`, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN CONECTEMOS (LIMPIA) */}
                <section id="contact" style={{ padding: '100px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '30px', backgroundColor: 'white', border: `1px solid ${colors.border}`, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: colors.text, textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem', fontWeight: 'bold' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{ 
                                width: '100%', 
                                padding: '15px', 
                                backgroundColor: colors.accent, 
                                color: '#1F2833', 
                                border: 'none', 
                                borderRadius: '30px', 
                                fontWeight: 'bold', 
                                cursor: 'pointer',
                                transition: '0.3s'
                            }}>Enviar Mensaje</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${colors.border}`, backgroundColor: 'white' }}>
                <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
                .card-nota:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.1); }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '15px', marginBottom: '20px', backgroundColor: '#F9FAFB', border: '1px solid #E1E4E8', color: '#1F2833', borderRadius: '12px', outline: 'none'
};

export default IndexBusiness;