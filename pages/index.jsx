import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgGlass: 'rgba(255, 255, 255, 0.01)', 
        textTitle: '#FFFFFF', 
        textBody: '#E5E7EB',  
        accent: '#00F2FF',    
        borderGlass: 'rgba(255, 255, 255, 0.12)',
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156701041", "1156695276"];

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <header style={{ padding: '80px 20px 40px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '800', letterSpacing: '-2px', margin: 0, color: colors.textTitle }}>
                    (PRAKXIS)<span style={{ color: colors.accent }}>.</span>
                </h1>
                
                {/* NUEVA BAJADA ESTILO CAPTURA */}
                <div style={{ marginTop: '30px', textTransform: 'uppercase' }}>
                    <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', fontWeight: '300', letterSpacing: '4px', lineHeight: '1.2', margin: '0 auto', maxWidth: '800px' }}>
                        NARRATIVAS VISUALES <br />
                        CON <span style={{ fontWeight: '700' }}>RIGOR CIENTÍFICO.</span>
                    </h2>
                    <p style={{ marginTop: '25px', fontSize: '1.1rem', letterSpacing: '2px', color: colors.textBody }}>
                        <span style={{ fontWeight: '700', color: colors.accent }}>[PX]</span> ——— <span style={{ fontWeight: '700' }}>[CO]</span>MUNICACIÓN
                    </p>
                </div>
            </header>

            <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px', position: 'relative', zIndex: 10 }}>
                <div className="grid-layout">
                    
                    {/* AUDIOVISUAL */}
                    <div className="glass-card">
                        <h3 className="section-title">Audiovisual</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            {videosVimeo.map((id) => (
                                <div key={id} className="video-container">
                                    <iframe src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DISEÑO Y PRENSA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <div className="glass-card">
                            <h3 className="section-title">Diseño Editorial</h3>
                            <p style={{ marginBottom: '25px', lineHeight: '1.7', fontSize: '1.05rem' }}>
                                Especialistas en memorias institucionales y reportes científicos de alto impacto.
                            </p>
                            <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="btn-portafolio">
                                VER PORTAFOLIO DISEÑO
                            </a>
                        </div>

                        <div className="glass-card">
                            <h3 className="section-title">Gestión de Prensa</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {notasPrensa.map((nota, idx) => (
                                    <a key={idx} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-link">
                                        <div className="press-img">
                                            <img src={nota.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: colors.accent, marginBottom: '5px', fontWeight: '700' }}>{nota.medio}</div>
                                            <div style={{ fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4' }}>{nota.titulo}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx global>{`
                html, body, div, span, h1, h2, h3, p, a {
                    font-family: 'Chakra Petch', sans-serif !important;
                }

                .main-container {
                    background-color: #0A0B0D;
                    min-height: 100vh;
                    color: #FFFFFF;
                    position: relative;
                    overflow-x: hidden;
                    background-image: linear-gradient(rgba(10, 11, 13, 0.85), rgba(10, 11, 13, 0.85)), url("/images/fondo-prakxis.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    width: 100%;
                }

                .grid-layout {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 40px;
                }

                .glass-card { 
                    background: rgba(255, 255, 255, 0.01); 
                    backdrop-filter: blur(15px); 
                    -webkit-backdrop-filter: blur(15px); 
                    border: 1px solid rgba(255, 255, 255, 0.12); 
                    border-radius: 24px; 
                    padding: 40px; 
                }

                .section-title { 
                    font-size: 1.1rem; 
                    color: #00F2FF; 
                    margin-bottom: 30px; 
                    text-transform: uppercase; 
                    letter-spacing: 3px; 
                    font-weight: 700; 
                }

                .btn-portafolio { 
                    display: inline-block; 
                    background: #00F2FF; 
                    color: #000; 
                    padding: 18px 35px; 
                    border-radius: 12px; 
                    text-decoration: none; 
                    font-weight: 800; 
                    font-size: 13px; 
                    text-transform: uppercase; 
                    transition: 0.3s;
                }

                .btn-portafolio:hover { 
                    transform: translateY(-3px); 
                    box-shadow: 0 5px 20px rgba(0, 242, 255, 0.4); 
                }

                .video-container {
                    position: relative; 
                    padding-bottom: 56.25%; 
                    height: 0; 
                    border-radius: 12px; 
                    overflow: hidden; 
                    border: 1px solid rgba(255, 255, 255, 0.12); 
                    background: #000;
                }

                .press-link {
                    display: flex; 
                    gap: 15px; 
                    text-decoration: none; 
                    color: inherit; 
                    padding: 12px; 
                    border-radius: 12px; 
                    background: rgba(255,255,255,0.03); 
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    transition: 0.3s;
                }

                .press-link:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: #00F2FF;
                }

                .press-img {
                    min-width: 70px; 
                    height: 70px; 
                    background: #111; 
                    border-radius: 8px; 
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;