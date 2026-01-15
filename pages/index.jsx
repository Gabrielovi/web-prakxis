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
            medio: "Contacto Salud"
        },
        {
            titulo: "Nuevo libro 'Del despojo surge la esperanza'",
            url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233",
            medio: "Araucanía Noticias"
        }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            {/* NAV CON LOGO Y BOTÓN CONECTEMOS */}
            <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(11,12,16,0.95)', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `1px solid ${colors.bgSec}` }}>
                <img src="/images/logo/logo_01.png" alt="Prakxis Logo" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Prensa</a>
                    <a href="#diseno" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Diseño</a>
                    <a href="#audiovisual" style={{ color: colors.text, textDecoration: 'none', fontSize: '14px' }}>Audiovisual</a>
                    <a href="#contact" style={{ 
                        backgroundColor: colors.neon, 
                        color: colors.bg, 
                        padding: '8px 18px', 
                        borderRadius: '20px', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        fontSize: '14px'
                    }}>Conectemos</a>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '120px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', color: colors.neon, fontWeight: 'bold', marginBottom: '10px' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. PRENSA */}
                <section id="prensa" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.neon, marginBottom: '40px' }}>1. Reportajes de Prensa</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" style={{ 
                                padding: '25px', backgroundColor: colors.bgSec, borderRadius: '15px', textDecoration: 'none', border: `1px solid ${colors.bgSec}`, transition: '0.3s'
                            }} className="card-nota">
                                <small style={{ color: colors.neon }}>{nota.medio}</small>
                                <h3 style={{ color: 'white', marginTop: '10px', fontSize: '1.2rem' }}>{nota.titulo}</h3>
                                <p style={{ color: colors.muted, marginTop: '15px', fontSize: '14px' }}>Leer artículo →</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. DISEÑO */}
                <section id="diseno" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.neon, marginBottom: '20px' }}>2. Diseño y Visualización</h2>
                        <p style={{ marginBottom: '40px' }}>Estética aplicada a la complejidad de los datos.</p>
                        <div style={{ padding: '40px', border: `1px dashed ${colors.muted}`, borderRadius: '20px', textAlign: 'center' }}>
                            <p style={{ color: colors.muted }}>Galería de visualizaciones en desarrollo...</p>
                        </div>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.neon, marginBottom: '40px' }}>3. Producción Audiovisual</h2>
                    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }} className="scroll-custom">
                        {videosAudiovisual.map(id => (
                            <div key={id} style={{ minWidth: '85%', borderRadius: '20px', overflow: 'hidden', border: `1px solid ${colors.muted}` }}>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACTO + PLEXUS DEBAJO */}
                <section id="contact" style={{ padding: '100px 0 0 0' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '30px', border: `1px solid ${colors.neon}`, backgroundColor: colors.bgSec, position: 'relative', zIndex: 2 }}>
                        <h3 style={{ color: colors.neon, textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{ width: '100%', padding: '18px', backgroundColor: colors.neon, color: colors.bg, border: 'none', borderRadius: '40px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem' }}>Enviar</button>
                        </form>
                    </div>

                    {/* EL PLEXUS JUSTO DEBAJO */}
                    <div style={{ width: '100%', height: '350px', marginTop: '-50px', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                        <img 
                            src="/images/plexus.gif" 
                            alt="Plexus Background" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
                        />
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: colors.bg }}>
                <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
                .card-nota:hover { border-color: #66FCF1 !important; transform: translateY(-5px); }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '15px', marginBottom: '20px', backgroundColor: '#0B0C10', border: '1px solid #45A29E', color: '#C5C6C7', borderRadius: '12px', outline: 'none'
};

export default IndexBusiness;