import React from 'react';
import Head from 'next/head';

const IndexPrakxisMonochrome = () => {
    
    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "CONOCIMIENTO", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "TERRITORIO", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706044", "1156706575"]; 

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Narrativas Visuales Científicas</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* CAPA DE GRANO DE 35mm (ANIMADA) */}
            <div className="grain-overlay"></div>

            <header className="header-section">
                <div className="logo-container">
                    <span className="bracket">[</span>
                    <h1 className="main-logo">PRAKXIS</h1>
                    <span className="bracket">]</span>
                </div>
                
                <div className="hero-text">
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
                
                {/* SECTION 01: PRENSA */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h3 className="section-title">Gestión de Prensa</h3>
                    </div>
                    <div className="glass-grid">
                        {notasPrensa.map((nota, idx) => (
                            <a key={idx} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-card">
                                <div className="press-img-box">
                                    <img src={nota.img} alt="" />
                                    <div className="img-overlay"></div>
                                </div>
                                <div className="press-info">
                                    <span className="press-label">{nota.medio}</span>
                                    <h4 className="press-title">{nota.titulo}</h4>
                                    <span className="read-more">[ VER_CASO // [+] ]</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECTION 02: DISEÑO EDITORIAL */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h3 className="section-title">Diseño Editorial</h3>
                    </div>
                    <div className="editorial-box">
                        <div className="editorial-content">
                            <p className="editorial-text">
                                Memorias institucionales, reportes científicos y visualización de datos de alta complejidad. 
                                Transformamos el conocimiento técnico en herramientas de posicionamiento estratégico.
                            </p>
                            <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="monochrome-button">
                                <span>VER PORTAFOLIO_DISEÑO [PDF]</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* SECTION 03: AUDIOVISUAL */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <h3 className="section-title">Audiovisual</h3>
                    </div>
                    <div className="video-stack">
                        {videosVimeo.map((id) => (
                            <div key={id} className="video-frame">
                                <div className="frame-overlay"></div>
                                <iframe 
                                    src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0&player_id=0&app_id=58479`} 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 04: CONTACTO (NUEVA BRUTALISTA) */}
                <section className="vertical-section contact-section">
                    <div className="section-header">
                        <span className="section-number">04</span>
                        <h3 className="section-title">Contacto</h3>
                    </div>
                    
                    <div className="contact-grid">
                        <div className="contact-image-box">
                            {/* IMAGEN DE CONTACTO SOLICITADA */}
                            <img src="/images/contacto-prakxis.jpg" alt="Prakxis Contacto" className="contact-img"/>
                            <div className="contact-img-grain"></div>
                        </div>
                        
                        <div className="contact-info-box">
                            <div className="info-block">
                                <span className="info-label">EMAIL_DIRECTO</span>
                                <a href="mailto:contacto@prakxis.cl" className="info-value">contacto@prakxis.cl</a>
                            </div>
                            <div className="info-block">
                                <span className="info-label">UBICACIÓN_RED</span>
                                <span className="info-value">TEMUCO / CHILE</span>
                            </div>
                            <div className="info-block">
                                <span className="info-label">SISTEMA_ESTADO</span>
                                <span className="info-value status-active">ONLINE [CORE_SYSTEM_ACTIVE]</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="final-footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // TODOS LOS DERECHOS RESERVADOS // ESTÉTICA MONOCROMA V.1.0</p>
            </footer>

            <style jsx global>{`
                /* IMPORTACIÓN DE CHAKRA PETCH (OBLIGATORIA) */
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700;800&display=swap');

                body {
                    background-color: #000000;
                    margin: 0;
                    color: #FFFFFF;
                    font-family: 'Chakra Petch', sans-serif !important;
                    overflow-x: hidden;
                    -webkit-font-smoothing: antialiased;
                }

                .main-container {
                    min-height: 100vh;
                    position: relative;
                }

                /* --- CAPA DE GRANO DE 35mm --- */
                .grain-overlay {
                    position: fixed;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    background-size: 200px;
                    opacity: 0.04; /* Grano sutil pero presente */
                    z-index: 50;
                    pointer-events: none;
                    animation: grain-animation 1s steps(10) infinite;
                }

                @keyframes grain-animation {
                    0%, 100% { transform:translate(0, 0) }
                    10% { transform:translate(-5%, -10%) }
                    30% { transform:translate(3%, -15%) }
                    50% { transform:translate(12%, 9%) }
                    70% { transform:translate(-9%, 4%) }
                    90% { transform:translate(8%, 2%) }
                }

                /* --- HEADER & LOGO MONOCROMO --- */
                .header-section { padding: 140px 20px 80px; textAlign: center; }
                .logo-container { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 25px; }
                .main-logo { font-size: clamp(3.5rem, 12vw, 6.5rem); font-weight: 800; letter-spacing: -5px; margin: 0; color: #FFFFFF; }
                .bracket { font-size: clamp(3rem, 10vw, 5rem); color: #FFFFFF; font-weight: 200; opacity: 0.3; }

                .tagline { font-size: clamp(1.2rem, 4vw, 1.9rem); font-weight: 300; letter-spacing: 9px; line-height: 1.6; color: #fff; margin-bottom: 50px; text-transform: uppercase;}
                .bold-tag { font-weight: 800; color: #fff; }

                .brand-footer { display: flex; align-items: center; justify-content: center; gap: 20px; max-width: 600px; margin: 0 auto; text-transform: uppercase; }
                .line-divider { height: 1px; flex-grow: 1; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); }
                .px-tag { font-weight: 800; color: #FFFFFF; letter-spacing: 3px; }
                .co-tag { font-weight: 400; letter-spacing: 5px; font-size: 0.85rem; opacity: 0.7; }

                /* --- SECTIONS & TITLES --- */
                .content-wrapper { maxWidth: 900px; margin: 0 auto; padding: 0 20px 120px; position: relative; z-index: 60; }
                .vertical-section { margin-bottom: 140px; }
                .section-header { display: flex; align-items: center; gap: 15px; margin-bottom: 50px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
                .section-number { color: #FFFFFF; font-weight: 800; font-size: 1.1rem; opacity: 0.3; }
                .section-title { font-size: 1.4rem; text-transform: uppercase; letter-spacing: 6px; margin: 0; font-weight: 400; }

                /* --- CARDS & BLOCKS --- */
                .glass-grid { display: grid; gap: 30px; }
                .press-card { 
                    display: flex; gap: 25px; background: #080808; 
                    border: 1px solid rgba(255,255,255,0.05); padding: 25px; border-radius: 2px;
                    text-decoration: none; color: inherit; transition: 0.5s; position: relative;
                }
                .press-card:hover { background: #111111; border-color: rgba(255,255,255,0.2); transform: translateY(-5px); }
                
                .press-img-box { width: 130px; height: 130px; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); position: relative; background: #000; overflow: hidden;}
                .press-img-box img { width: 100%; height: 100%; objectFit: cover; filter: grayscale(100%); transition: 0.5s; }
                .press-card:hover img { filter: grayscale(0%); transform: scale(1.05); }

                .press-label { color: #FFFFFF; font-size: 0.7rem; font-weight: 800; letter-spacing: 4px; opacity: 0.6; text-transform: uppercase; }
                .press-title { font-size: 1.15rem; margin: 12px 0; line-height: 1.5; font-weight: 500; color: #FFFFFF; }
                .read-more { font-size: 0.65rem; letter-spacing: 3px; opacity: 0.4; text-transform: uppercase; }

                /* --- EDITORIAL MONOCROMO --- */
                .editorial-box { 
                    background: #080808; border: 1px solid rgba(255,255,255,0.05);
                    padding: 60px; position: relative; text-align: center;
                }
                .editorial-text { font-size: 1.25rem; line-height: 1.9; margin-bottom: 50px; font-weight: 300; color: #FFFFFF; }

                /* --- BUTTON BRUTALISTA --- */
                .monochrome-button { 
                    display: inline-block; background: #FFFFFF; color: #000000 !important; 
                    padding: 22px 50px; text-decoration: none; font-weight: 800; 
                    transition: 0.3s; font-size: 0.85rem; letter-spacing: 3px; text-transform: uppercase;
                }
                .monochrome-button:hover { background: #CCCCCC; transform: scale(1.03); }

                /* --- VIDEO MONOCROMO --- */
                .video-stack { display: grid; gap: 60px; }
                .video-frame { 
                    position: relative; padding-bottom: 56.25%; height: 0; 
                    border: 1px solid rgba(255,255,255,0.1); background: #000; transition: 0.5s;
                }
                .video-frame iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(100%); transition: 0.5s; }
                .video-frame:hover iframe { filter: grayscale(0%); }
                .frame-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.1); z-index: 2; pointer-events: none; }

                /* --- NUEVA SECCIÓN CONTACTO BRUTALISTA --- */
                .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
                .contact-image-box { 
                    position: relative; width: 100%; height: 100%; min-height: 350px;
                    border: 1px solid rgba(255,255,255,0.1); background: #111; overflow: hidden;
                }
                .contact-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }
                .contact-img-grain {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    opacity: 0.08; pointer-events: none;
                }
                
                .contact-info-box { display: flex; flexDirection: column; gap: 35px; }
                .info-label { font-size: 0.7rem; letter-spacing: 4px; color: #FFFFFF; opacity: 0.5; text-transform: uppercase; }
                .info-value { font-size: 1.3rem; font-weight: 500; color: #FFFFFF; text-decoration: none; display: block; margin-top: 10px; word-break: break-all; }
                .info-value.status-active { color: #55FF55; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px; }

                /* --- FOOTER MONOCROMO --- */
                .final-footer { padding: 80px 50px 50px; text-align: center; font-size: 0.7rem; letter-spacing: 3px; opacity: 0.3; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 100px; }

                /* --- RESPONSIVE --- */
                @media (max-width: 800px) {
                    .contact-grid { grid-template-columns: 1fr; gap: 40px; }
                    .contact-image-box { min-height: 250px; }
                }

                @media (max-width: 600px) {
                    .press-card { flex-direction: column; gap: 15px; text-align: center;}
                    .press-img-box { width: 100%; }
                    .editorial-box { padding: 40px 25px; }
                    .header-section { padding: 100px 20px 60px; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisMonochrome;