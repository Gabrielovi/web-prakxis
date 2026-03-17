import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        accent: '#00F2FF',    
        textWhite: '#FFFFFF',
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    // ACTUALIZADO: Solo los 2 videos solicitados
    const videosVimeo = ["1156706044", "1156706575"]; 

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <header style={{ padding: '100px 20px 60px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: '800', letterSpacing: '-3px', margin: 0, color: colors.textWhite }}>
                    (PRAKXIS)<span style={{ color: colors.accent }}>.</span>
                </h1>
                
                <div style={{ marginTop: '40px', textTransform: 'uppercase' }}>
                    <h2 style={{ 
                        fontSize: 'clamp(1.4rem, 5vw, 2.2rem)', 
                        fontWeight: '400', 
                        letterSpacing: '6px', 
                        lineHeight: '1.4', 
                        margin: '0 auto', 
                        maxWidth: '900px',
                        color: '#FFFFFF'
                    }}>
                        NARRATIVAS VISUALES <br />
                        CON <span style={{ fontWeight: '700' }}>RIGOR CIENTÍFICO.</span>
                    </h2>
                    <p style={{ marginTop: '30px', fontSize: '1.2rem', letterSpacing: '4px', color: '#FFFFFF' }}>
                        <span style={{ fontWeight: '700', color: colors.accent }}>[PX]</span> ——— <span style={{ fontWeight: '700' }}>[CO]</span>MUNICACIÓN
                    </p>
                </div>
            </header>

            <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 100px', position: 'relative', zIndex: 10 }}>
                
                {/* 1. PRENSA (PRIMERO) */}
                <section className="vertical-section">
                    <div className="glass-card">
                        <h3 className="section-title">Gestión de Prensa</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {notasPrensa.map((nota, idx) => (
                                <a key={idx} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-link">
                                    <div className="press-img">
                                        <img src={nota.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: colors.accent, marginBottom: '5px', fontWeight: '700' }}>{nota.medio}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.4', color: '#FFFFFF' }}>{nota.titulo}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. DISEÑO (SEGUNDO) */}
                <section className="vertical-section" style={{ marginTop: '60px' }}>
                    <div className="glass-card">
                        <h3 className="section-title">Diseño Editorial</h3>
                        <p style={{ marginBottom: '30px', lineHeight: '1.8', fontSize: '1.1rem', color: '#FFFFFF', textAlign: 'center' }}>
                            Especialistas en memorias institucionales y reportes científicos de alto impacto visual y técnico.
                        </p>
                        <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="btn-portafolio">
                            VER PORTAFOLIO DISEÑO
                        </a>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL (TERCERO) */}
                <section className="vertical-section" style={{ marginTop: '60px' }}>
                    <h3 className="section-title">Audiovisual</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {videosVimeo.map((id) => (
                            <div key={id} className="video-container">
                                <iframe 
                                    src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`} 
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <style jsx global>{`
                html, body {
                    background-color: #0A0B0D;
                    margin: 0;
                    font-family: 'Chakra Petch', sans-serif !important;
                }

                .main-container {
                    min-height: 100vh;
                    position: relative;
                    background-image: linear-gradient(rgba(10, 11, 13, 0.92), rgba(10, 11, 13, 0.88)), url("/images/fondo-prakxis.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                .vertical-section { width: 100%; }

                .glass-card { 
                    background: rgba(255, 255, 255, 0.02); 
                    backdrop-filter: blur(20px); 
                    border: 1px solid rgba(255, 255, 255, 0.1); 
                    border-radius: 30px; 
                    padding: 40px; 
                }

                .section-title { 
                    font-size: 1.2rem; 
                    color: #00F2FF; 
                    margin-bottom: 35px; 
                    text-transform: uppercase; 
                    letter-spacing: 4px; 
                    font-weight: 700;
                    text-align: center;
                }

                .btn-portafolio { 
                    display: block;
                    text-align: center;
                    background: #00F2FF; 
                    color: #000; 
                    padding: 22px; 
                    border-radius: 15px; 
                    text-decoration: none; 
                    font-weight: 800; 
                    font-size: 14px; 
                    text-transform: uppercase; 
                    transition: 0.3s;
                }

                .video-container {
                    position: relative; 
                    padding-bottom: 56.25%; 
                    height: 0; 
                    border-radius: 20px; 
                    overflow: hidden; 
                    border: 1px solid rgba(255, 255, 255, 0.1); 
                }

                .press-link {
                    display: flex; 
                    gap: 20px; 
                    text-decoration: none; 
                    padding: 20px; 
                    border-radius: 15px; 
                    background: rgba(255,255,255,0.03); 
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .press-img {
                    min-width: 80px; 
                    height: 80px; 
                    border-radius: 10px; 
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;