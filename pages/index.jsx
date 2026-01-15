import React from 'react';

const IndexBusiness = () => {
    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1', // Calipso
        muted: '#45A29E'
    };

    const notasPrensa = [
        {
            titulo: "UFRO presentó plataforma georreferenciada de salud pública",
            url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/",
            medio: "Contacto Salud",
            img: "https://contactosalud.cl/wp-content/uploads/2024/05/UFRO-SALUD.jpg" // Miniatura de ejemplo
        },
        {
            titulo: "Nuevo libro 'Del despojo surge la esperanza'",
            url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233",
            medio: "Araucanía Noticias",
            img: "https://araucanianoticias.cl/wp-content/uploads/2024/01/libro-despojo.jpg" // Miniatura de ejemplo
        }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            {/* NAV CON LOGO Y BOTÓN CONECTEMOS */}
            <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.bg, position: 'sticky', top: 0, zIndex: 1000, borderBottom: `1px solid ${colors.bgSec}` }}>
                {/* Logo con fallback por si la ruta falla */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                        src="/images/logo/logo_01.png" 
                        alt="Prakxis" 
                        style={{ height: '35px', filter: 'brightness(0) invert(1)' }} 
                        onError={(e) => e.target.style.display='none'} 
                    />
                    <span style={{ color: colors.neon, fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>PRAKXIS</span>
                </div>

                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Prensa</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Audiovisual</a>
                    <a href="#contact" style={{ 
                        backgroundColor: colors.neon, 
                        color: colors.bg, 
                        padding: '8px 20px', 
                        borderRadius: '20px', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                    }}>Conectemos</a>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3.5rem', color: colors.neon, fontWeight: 'bold' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.7, marginTop: '10px' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. PRENSA CON MINIATURAS */}
                <section id="prensa" style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.neon, marginBottom: '40px', fontSize: '1.8rem' }}>Reportajes de Prensa</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" style={{ 
                                backgroundColor: colors.bgSec, borderRadius: '15px', textDecoration: 'none', overflow: 'hidden', border: `1px solid #333`, transition: '0.3s', display: 'block'
                            }} className="card-nota">
                                <div style={{ height: '180px', overflow: 'hidden' }}>
                                    <img src={nota.img} alt={nota.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <small style={{ color: colors.neon, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ color: 'white', marginTop: '10px', fontSize: '1.1rem', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.neon, marginBottom: '40px', fontSize: '1.8rem' }}>Producción Audiovisual</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }} className="scroll-custom">
                            {videosAudiovisual.map(id => (
                                <div key={id} style={{ minWidth: '85%', borderRadius: '15px', overflow: 'hidden', border: `1px solid #444` }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. CONTACTO CON IMAGEN DE FONDO (REEMPLAZO PLEXUS) */}
                <section id="contact" style={{ padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '30px', border: `1px solid ${colors.neon}`, backgroundColor: 'rgba(31, 40, 51, 0.9)', position: 'relative', zIndex: 2 }}>
                        <h3 style={{ color: colors.neon, textAlign: 'center', marginBottom: '30px', fontSize: '2.2rem' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: colors.neon, color: colors.bg, border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar</button>
                        </form>
                    </div>

                    {/* Imagen Estética debajo del formulario (en lugar del GIF pixelado) */}
                    <div style={{ 
                        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '400px', 
                        background: `linear-gradient(to top, ${colors.neon}22, transparent)`, 
                        zIndex: 1, pointerEvents: 'none' 
                    }}></div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${colors.bgSec}` }}>
                <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
                .card-nota:hover { border-color: #66FCF1 !important; transform: translateY(-5px); }
                .card-nota:hover img { opacity: 1 !important; }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '15px', marginBottom: '20px', backgroundColor: '#0B0C10', border: '1px solid #45A29E', color: '#C5C6C7', borderRadius: '12px', outline: 'none'
};

export default IndexBusiness;