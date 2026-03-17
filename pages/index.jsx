import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinalMonochrome = () => {
    
    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706044", "1156706575"]; 

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* CAPA DE GRANO DE 35mm */}
            <div className="grain-overlay"></div>

            <header className="header-section">
                <div className="logo-container">
                    <span className="bracket">[</span>
                    <h1 className="main-logo">PRAKXIS</h1>
                    <span className="bracket">]</span>
                </div>
                
                <div className="hero-content">
                    <h2 className="tagline">
                        NARRATIVAS VISUALES <br />
                        <span className="bold-tag">CON RIGOR CIENTÍFICO.</span>
                    </h2>
                    <div className="brand-footer">
                        <span className="px-tag">[PX]</span>
                        <div className="line-divider"></div>
                        <span className="co-tag">COMUNICACIÓN_CIENTÍFICA</span>
                    </div>
                </div>
            </header>

            <main className="content-wrapper">
                
                {/* 01. PRENSA */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h3 className="section-title">Gestión de Prensa</h3>
                    </div>
                    <div className="glass-grid">
                        {notasPrensa.map((nota, idx) => (
                            <a key={idx} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-link">
                                <div className="press-img">
                                    <img src={nota.img} alt="" />
                                </div>
                                <div className="press-text-box">
                                    <span className="press-label">{nota.medio}</span>
                                    <h4 className="press-headline">{nota.titulo}</h4>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL (CON PREVIEW TIPO DOSIER) */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h3 className="section-title">Diseño Editorial</h3>
                    </div>
                    
                    <div className="editorial-preview-container">
                        <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="portfolio-preview-link">
                            <div className="portfolio-image-wrapper">
                                {/* Esta es la imagen que indicaste como preview */}
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Preview Portfolio Prakxis" className="preview-img" />
                                <div className="preview-overlay">
                                    <span className="view-text">ABRIR_DOSIER_V.2026</span>
                                </div>
                            </div>
                        </a>
                        <div className="editorial-info-box">
                            <p className="card-text">
                                Memorias institucionales y reportes de alta complejidad. 
                                Transformamos el dato técnico en narrativa visual estratégica.
                            </p>
                            <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="btn-brutalista">
                                VER PORTAFOLIO_COMPLETO [PDF]
                            </a>
                        </div>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <h3 className="section-title">Audiovisual</h3>
                    </div>
                    <div className="video-stack">
                        {videosVimeo.map((id) => (
                            <div key={id} className="video-container">
                                <iframe 
                                    src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`} 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <footer className="final-footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ESTÉTICA MONOCROMA</p>
            </footer>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700;800&display=swap');

                html, body {
                    background-color: #000;
                    margin: 0;
                    padding: 0;
                    color: #fff;
                    font-family: 'Chakra Petch', sans-serif !important;
                    overflow-x: hidden;
                }

                .main-container {
                    min-height: 100vh;
                    position: relative;
                    background-image: linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)), url("/images/fondo-prakxis.jpg");
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                }

                .grain-overlay {
                    position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    opacity: 0.04; z-index: 99; pointer-events: none; animation: grain 1s steps(10) infinite;
                }
                @keyframes grain { 0%, 100% { transform:translate(0,0) } 50% { transform:translate(5%, 5%) } }

                /* HEADER */
                .header-section { padding: 120px 20px 60px; text-align: center; position: relative; z-index: 100; }
                .main-logo { font-size: clamp(3rem, 12vw, 6rem); font-weight: 800; letter-spacing: -4px; margin: 0; font-family: 'Chakra Petch' !important; }
                .bracket { color: #fff; opacity: 0.3; font-weight: 200; font-size: 1.2em; }
                .tagline { font-size: clamp(1rem, 4vw, 1.8rem); letter-spacing: 7px; text-transform: uppercase; font-weight: 300; margin: 40px 0; font-family: 'Chakra Petch' !important; }
                .brand-footer { display: flex; align-items: center; gap: 15px; max-width: 500px; margin: 0 auto; opacity: 0.6; }
                .line-divider { height: 1px; flex-grow: 1; background: #fff; opacity: 0.2; }

                /* CONTENT */
                .content-wrapper { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .vertical-section { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 40px; }
                .section-number { opacity: 0.3; font-weight: 800; }
                .section-title { text-transform: uppercase; letter-spacing: 5px; font-size: 1.2rem; margin: 0; font-family: 'Chakra Petch' !important; }

                /* PRENSA */
                .press-link { display: flex; gap: 20px; text-decoration: none; color: #fff; background: rgba(0,0,0,0.4); padding: 20px; border: 1px solid rgba(255,255,255,0.05); margin-bottom: 15px; transition: 0.3s; }
                .press-link:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
                .press-img { width: 80px; height: 80px; filter: grayscale(1); }
                .press-label { font-size: 0.7rem; letter-spacing: 3px; opacity: 0.5; text-transform: uppercase; }
                .press-headline { font-size: 1.1rem; margin-top: 5px; font-weight: 400; font-family: 'Chakra Petch' !important; }

                /* PREVIEW PORTFOLIO (CLAVE) */
                .portfolio-preview-link { text-decoration: none; display: block; }
                .portfolio-image-wrapper { position: relative; width: 100%; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; background: #111; }
                .preview-img { width: 100%; height: auto; display: block; filter: grayscale(1); transition: 0.6s; }
                .portfolio-preview-link:hover .preview-img { filter: grayscale(0.5); transform: scale(1.02); }
                .preview-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); opacity: 0; transition: 0.3s; }
                .portfolio-preview-link:hover .preview-overlay { opacity: 1; }
                .view-text { border: 1px solid #fff; padding: 10px 20px; letter-spacing: 4px; font-size: 0.8rem; }

                .editorial-info-box { padding: 40px; text-align: center; background: rgba(255,255,255,0.02); }
                .btn-brutalista { display: inline-block; background: #fff; color: #000 !important; padding: 18px 40px; font-weight: 800; text-decoration: none; letter-spacing: 2px; font-size: 0.8rem; margin-top: 20px; font-family: 'Chakra Petch' !important; }

                /* AUDIOVISUAL */
                .video-container { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 40px; background: #000; }
                .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); }
                .video-container:hover iframe { filter: grayscale(0); }

                .final-footer { padding: 60px; text-align: center; opacity: 0.3; letter-spacing: 3px; font-size: 0.7rem; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinalMonochrome;