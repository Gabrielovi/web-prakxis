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

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700;800&display=swap');

                html {
                    scroll-behavior: smooth; /* Permite el desplazamiento suave */
                }

                body {
                    margin: 0; padding: 0; background: #000; color: #fff;
                    font-family: 'Chakra Petch', sans-serif !important;
                    -webkit-font-smoothing: antialiased;
                }

                h1, h2, h3, h4, p, a, span, div {
                    font-family: 'Chakra Petch', sans-serif !important;
                    color: #FFFFFF !important;
                }
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                {/* --- BOTÓN DE CONTACTO SUPERIOR (NUEVO) --- */}
                <a href="#contacto" className="top-contact-btn">
                    [ CONTACTO_DIRECTO ]
                </a>

                <div className="logo-wrap">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo-img" />
                </div>
                <div style={{ marginTop: '50px' }}>
                    <h2 className="hero-tagline">
                        NARRATIVAS VISUALES <br />
                        <span style={{ fontWeight: '800' }}>CON RIGOR CIENTÍFICO.</span>
                    </h2>
                    <p className="hero-subline">
                        <span style={{ fontWeight: '800' }}>[PX]</span> ——— <span className="co-label">COMUNICACIÓN_CIENTÍFICA</span>
                    </p>
                </div>
            </header>

            <main className="content-wrapper">
                
                {/* 01. PRENSA */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h3 className="section-title">Gestión de Prensa</h3>
                    </div>
                    <div className="press-grid">
                        {notasPrensa.map((nota, idx) => (
                            <a key={idx} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-card">
                                <div className="press-img-container">
                                    <img src={nota.img} alt="" className="press-img-main" />
                                </div>
                                <div className="press-content">
                                    <span className="press-label-top">{nota.medio}</span>
                                    <h4 className="press-headline">{nota.titulo}</h4>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">02</span>
                        <h3 className="section-title">Diseño Editorial</h3>
                    </div>
                    <div className="portfolio-preview-box">
                        <a href="/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                            <div className="portfolio-image-wrapper">
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Dosier" className="portfolio-img" />
                                <div className="portfolio-overlay">
                                    <span className="view-dossier-text">ABRIR DOSIER</span>
                                </div>
                            </div>
                        </a>
                        <div className="editorial-footer">
                            <p className="editorial-desc">
                                Memorias institucionales y reportes técnicos de alta complejidad. <br/>
                                Visualización de datos y narrativa estratégica.
                            </p>
                            <a href="/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-monocromo">
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
                            <div key={id} className="video-item">
                                <iframe src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0`} frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04. SECCIÓN DE CONTACTO (CON ID PARA SCROLL) */}
                <section id="contacto" className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">04</span>
                        <h3 className="section-title">Contacto</h3>
                    </div>
                    <div className="contact-info-direct">
                        <div className="contact-item-direct">
                            <span className="contact-label-direct">EMAIL_DIRECTO</span>
                            <a href="mailto:contacto@prakxis.cl" className="contact-value-direct">contacto@prakxis.cl</a>
                        </div>
                        <div className="contact-item-direct">
                            <span className="contact-label-direct">UBICACIÓN_RED</span>
                            <span className="contact-value-direct">TEMUCO / CHILE</span>
                        </div>
                        <div className="contact-item-direct">
                            <span className="contact-label-direct">ESTADO_SISTEMA</span>
                            <span className="contact-value-direct" style={{color: '#fff', opacity: 0.6}}>DISPONIBLE_2026</span>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="footer-site">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // BUILD_FINAL_FIXED_CONTACT</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                    filter: blur(10px); transform: scale(1.1);
                }

                .grain-overlay {
                    position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    opacity: 0.04; z-index: 999; pointer-events: none; animation: grain 1s steps(10) infinite;
                }
                @keyframes grain { 0%, 100% { transform:translate(0,0) } 50% { transform:translate(5%, 5%) } }

                /* HEADER & LOGO INVERTIDO */
                .site-header { padding: 120px 20px 60px; text-align: center; position: relative; z-index: 100; }
                
                /* --- ESTILOS DEL BOTÓN DE CONTACTO SUPERIOR --- */
                .top-contact-btn {
                    position: absolute;
                    top: 40px;
                    right: 40px;
                    background: transparent;
                    color: #FFFFFF !important;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 12px 24px;
                    text-decoration: none;
                    font-size: 0.8rem;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    z-index: 110;
                }

                .top-contact-btn:hover {
                    background: #FFFFFF;
                    color: #000000 !important;
                    border-color: #FFFFFF;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
                }

                .logo-wrap { max-width: 450px; margin: 0 auto; }
                .main-logo-img { width: 100%; height: auto; display: block; filter: invert(100%); }

                .content-wrapper { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .hero-tagline { font-size: clamp(1.1rem, 4vw, 1.8rem); font-weight: 300; letter-spacing: 8px; text-transform: uppercase; line-height: 1.6; }
                .hero-subline { margin-top: 40px; font-size: 1.1rem; letter-spacing: 4px; }
                .co-label { font-weight: 400; letter-spacing: 5px; font-size: 0.85rem; }

                .vertical-section { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 10px; margin-bottom: 40px; }
                .section-number { font-weight: 800; font-size: 1.1rem; opacity: 0.4; }
                .section-title { text-transform: uppercase; letter-spacing: 5px; font-size: 1.2rem; margin: 0; }

                /* PRENSA */
                .press-grid { display: grid; gap: 20px; }
                .press-card { display: flex; gap: 25px; text-decoration: none; background: rgba(255,255,255,0.03); padding: 25px; border: 1px solid rgba(255,255,255,0.1); transition: 0.4s; }
                .press-img-main { width: 110px; height: 110px; object-fit: cover; filter: grayscale(100%); transition: 0.5s; }
                .press-card:hover { border-color: #FFFFFF; background: rgba(255,255,255,0.08); transform: translateX(10px); }
                .press-card:hover .press-img-main { filter: grayscale(0%); }
                .press-label-top { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 4px; display: block; margin-bottom: 10px; }
                .press-headline { font-size: 1.2rem; font-weight: 400; margin: 0; line-height: 1.4; }

                /* PORTAFOLIO */
                .portfolio-image-wrapper { position: relative; border: 1px solid rgba(255,255,255,0.2); background: #000; overflow: hidden; }
                .portfolio-img { width: 100%; height: auto; display: block; filter: grayscale(100%) contrast(0.5); opacity: 0.4; transition: 0.6s ease; }
                .portfolio-link:hover .portfolio-img { filter: grayscale(0%) contrast(1); opacity: 0.9; transform: scale(1.02); }
                .portfolio-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
                .view-dossier-text { background: #000; padding: 18px 45px; border: 1px solid #fff; letter-spacing: 6px; font-weight: 700; font-size: 0.9rem; }
                .editorial-footer { padding: 50px; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); border-top: 0; }
                .editorial-desc { font-weight: 300; line-height: 1.8; margin-bottom: 40px; font-size: 1.15rem; }
                .btn-monocromo { display: inline-block; background: #fff; color: #000 !important; padding: 22px 60px; font-weight: 800; text-decoration: none; letter-spacing: 3px; text-transform: uppercase; font-size: 0.85rem; }

                /* CONTACTO */
                .contact-info-direct { display: flex; flex-direction: column; gap: 40px; text-align: center; max-width: 600px; margin: 0 auto; }
                .contact-item-direct { padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
                .contact-label-direct { font-size: 0.75rem; letter-spacing: 5px; opacity: 0.5; display: block; text-transform: uppercase;}
                .contact-value-direct { font-size: 1.5rem; font-weight: 400; text-decoration: none; display: block; margin-top: 10px; word-break: break-all; }

                /* VIDEO */
                .video-item { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.1); background: #000; margin-bottom: 50px; }
                .video-item iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(100%); transition: 0.5s; }
                .video-item:hover iframe { filter: grayscale(0%); }

                .footer-site { padding: 100px 20px 60px; text-align: center; opacity: 0.3; letter-spacing: 4px; font-size: 0.7rem; position: relative; z-index: 100; }

                @media (max-width: 768px) {
                    .top-contact-btn { top: 20px; right: 20px; padding: 8px 16px; font-size: 0.7rem; letter-spacing: 2px; }
                    .contact-value-direct { font-size: 1.2rem; }
                    .press-card { flex-direction: column; }
                    .press-img-main { width: 100%; height: 180px; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinalMonochrome;