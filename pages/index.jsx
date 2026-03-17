import React from 'react';
import Head from 'next/head';

const IndexPrakxisPremium = () => {
    const colors = {
        bgMain: '#050608',    
        accent: '#00F2FF',    
        accentDark: '#004245',
        textWhite: '#FFFFFF',
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "CONOCIMIENTO", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "TERRITORIO", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706044", "1156706575"]; 

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Narrativas Visuales</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* SCANNER LINE ANIMATION */}
            <div className="scanner-line"></div>

            <header className="header-section">
                <div className="logo-container">
                    <span className="bracket">[</span>
                    <h1 className="main-logo">PRAKXIS</h1>
                    <span className="bracket">]</span>
                    <span className="dot">.</span>
                </div>
                
                <div className="hero-text">
                    <h2 className="tagline">
                        NARRATIVAS VISUALES <br />
                        <span className="bold-tag">CON RIGOR CIENTÍFICO.</span>
                    </h2>
                    <div className="brand-footer">
                        <span className="px-tag">[PX]</span>
                        <div className="line-divider"></div>
                        <span className="co-tag">[CO]MUNICACIÓN</span>
                    </div>
                </div>
            </header>

            <main className="content-wrapper">
                
                {/* SECTION: PRENSA */}
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
                                    <span className="read-more">READ_CASE_FILE [+]</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECTION: DISEÑO */}
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
                            <a href="/docs/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="cyber-button">
                                <span className="btn-glitch">VER PORTAFOLIO_DISEÑO</span>
                                <span className="btn-tag">PDF_EXT</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* SECTION: AUDIOVISUAL */}
                <section className="vertical-section">
                    <div className="section-header">
                        <span className="section-number">03</span>
                        <h3 className="section-title">Audiovisual</h3>
                    </div>
                    <div className="video-stack">
                        {videosVimeo.map((id) => (
                            <div key={id} className="video-frame">
                                <div className="frame-corners"></div>
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
                <p>© 2026 PRAKXIS_CORE_SYSTEM // TODOS LOS DERECHOS RESERVADOS</p>
            </footer>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700;800&display=swap');

                :root { --accent: #00F2FF; }

                body {
                    background-color: #050608;
                    margin: 0;
                    color: #FFFFFF;
                    font-family: 'Chakra Petch', sans-serif !important;
                    overflow-x: hidden;
                }

                .main-container {
                    min-height: 100vh;
                    background-image: 
                        radial-gradient(circle at 50% 50%, rgba(0, 242, 255, 0.05) 0%, transparent 50%),
                        linear-gradient(rgba(5, 6, 8, 0.9), rgba(5, 6, 8, 0.9)), 
                        url("/images/fondo-prakxis.jpg");
                    background-size: cover, cover, cover;
                    background-attachment: fixed;
                }

                /* LOGO & HEADER */
                .header-section { padding: 120px 20px 80px; textAlign: center; }
                .logo-container { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 20px; }
                .main-logo { font-size: clamp(3.5rem, 12vw, 6rem); font-weight: 800; letter-spacing: -4px; margin: 0; }
                .bracket { font-size: clamp(3rem, 10vw, 5rem); color: var(--accent); font-weight: 300; }
                .dot { color: var(--accent); font-size: clamp(3.5rem, 12vw, 6rem); }

                .tagline { font-size: clamp(1.2rem, 4vw, 1.8rem); font-weight: 300; letter-spacing: 8px; line-height: 1.5; color: #fff; margin-bottom: 40px; }
                .bold-tag { font-weight: 800; color: #fff; }

                .brand-footer { display: flex; align-items: center; justify-content: center; gap: 20px; max-width: 500px; margin: 0 auto; }
                .line-divider { height: 1px; flex-grow: 1; background: linear-gradient(90deg, transparent, var(--accent), transparent); }
                .px-tag { font-weight: 800; color: var(--accent); letter-spacing: 2px; }
                .co-tag { font-weight: 400; letter-spacing: 4px; font-size: 0.9rem; }

                /* SECTIONS */
                .content-wrapper { maxWidth: 900px; margin: 0 auto; padding: 0 20px 100px; }
                .vertical-section { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; }
                .section-number { color: var(--accent); font-weight: 800; font-size: 1.2rem; opacity: 0.5; }
                .section-title { font-size: 1.5rem; text-transform: uppercase; letter-spacing: 5px; margin: 0; font-weight: 400; }

                /* CARDS */
                .glass-grid { display: grid; gap: 25px; }
                .press-card { 
                    display: flex; gap: 20px; background: rgba(255,255,255,0.03); 
                    border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 4px;
                    text-decoration: none; color: inherit; transition: 0.4s; position: relative; overflow: hidden;
                }
                .press-card:hover { background: rgba(0, 242, 255, 0.05); border-color: var(--accent); transform: translateX(10px); }
                
                .press-img-box { width: 120px; height: 120px; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); position: relative; }
                .press-img-box img { width: 100%; height: 100%; objectFit: cover; filter: grayscale(100%) contrast(1.2); }
                .press-card:hover img { filter: grayscale(0%); }

                .press-label { color: var(--accent); font-size: 0.7rem; font-weight: 800; letter-spacing: 3px; }
                .press-title { font-size: 1.1rem; margin: 10px 0; line-height: 1.4; font-weight: 600; }
                .read-more { font-size: 0.6rem; letter-spacing: 2px; opacity: 0.5; }

                /* EDITORIAL */
                .editorial-box { 
                    background: rgba(255,255,255,0.02); border-left: 4px solid var(--accent);
                    padding: 50px; position: relative; backdrop-filter: blur(10px);
                }
                .editorial-text { font-size: 1.2rem; line-height: 1.8; margin-bottom: 40px; font-weight: 300; }

                /* BUTTON */
                .cyber-button { 
                    display: flex; align-items: center; justify-content: space-between;
                    background: var(--accent); color: #000; padding: 20px 30px; 
                    text-decoration: none; font-weight: 800; transition: 0.3s;
                }
                .cyber-button:hover { box-shadow: 0 0 30px rgba(0,242,255,0.5); transform: scale(1.02); }

                /* VIDEOS */
                .video-stack { display: grid; gap: 50px; }
                .video-frame { 
                    position: relative; padding-bottom: 56.25%; height: 0; 
                    border: 1px solid rgba(255,255,255,0.1); background: #000;
                }
                .video-frame iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
                .frame-corners::before, .frame-corners::after {
                    content: ''; position: absolute; width: 20px; height: 20px; border: 2px solid var(--accent); z-index: 5;
                }
                .frame-corners::before { top: -2px; left: -2px; border-right: 0; border-bottom: 0; }
                .frame-corners::after { bottom: -2px; right: -2px; border-left: 0; border-top: 0; }

                /* ANIMATION */
                .scanner-line {
                    position: fixed; top: 0; left: 0; width: 100%; height: 2px;
                    background: linear-gradient(90deg, transparent, var(--accent), transparent);
                    opacity: 0.2; z-index: 100; animation: scan 8s linear infinite;
                }
                @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }

                .final-footer { padding: 50px; text-align: center; font-size: 0.7rem; letter-spacing: 3px; opacity: 0.3; }

                @media (max-width: 600px) {
                    .press-card { flex-direction: column; }
                    .press-img-box { width: 100%; }
                    .editorial-box { padding: 30px; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisPremium;