import React, { useState } from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    // Lógica del Juego
    const [score, setScore] = useState(0);
    const [target, setTarget] = useState({ x: 50, y: 50 });

    const handleHit = () => {
        setScore(s => s + 1);
        setTarget({
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10
        });
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap');
                html { scroll-behavior: smooth; }
                body {
                    margin: 0; padding: 0; background: #000;
                    font-family: 'Chakra Petch', sans-serif !important;
                    color: #fff;
                }
                h1, h2, h3, h4, p, a, span { font-family: 'Chakra Petch', sans-serif !important; color: #fff !important; text-decoration: none; }
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                <a href="#contacto" className="top-contact-btn">[ CONTACTO_DIRECTO ]</a>
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" />
                </div>
                <div style={{ marginTop: '50px' }}>
                    <h2 className="hero-title">NARRATIVAS VISUALES <br /> <span style={{ fontWeight: '700' }}>CON RIGOR CIENTÍFICO.</span></h2>
                    <p className="hero-subline"><span style={{ fontWeight: '700' }}>[PX]</span> ——— <span>COMUNICACIÓN_CIENTÍFICA</span></p>
                </div>
            </header>

            <main className="main-content">
                
                {/* 01. PRENSA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">01</span><h3>Gestión de Prensa</h3></div>
                    <div className="press-list">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="press-item">
                                <img src={nota.img} alt="" className="press-thumb" />
                                <div className="press-txt">
                                    <span className="medio">{nota.medio}</span>
                                    <span className="tit">{nota.titulo}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="editorial-preview">
                            <div className="img-wrapper">
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Dosier" className="dossier-img" />
                                <div className="dossier-overlay"><span className="dossier-btn-label">ABRIR DOSIER</span></div>
                            </div>
                        </a>
                        <div className="editorial-info">
                            <p>Memorias institucionales y reportes técnicos. Visualización de datos y narrativa estratégica.</p>
                            <a href="/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="full-btn">VER PORTAFOLIO_COMPLETO [PDF]</a>
                        </div>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        {["1156706044", "1156706575"].map((v) => (
                            <div key={v} className="vimeo-container">
                                <iframe src={`https://player.vimeo.com/video/${v}?badge=0`} frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* JUEGO (GUEGO) */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Guego_Experimental</h3></div>
                    <div className="game-area">
                        <div className="game-canvas">
                            <div className="score-display">DATA_COLLECTED: {score}</div>
                            <div 
                                className="game-target" 
                                onClick={handleHit}
                                style={{ left: `${target.x}%`, top: `${target.y}%` }}
                            >
                                <div className="target-cross"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 04. CONTACTO */}
                <section id="contacto" className="section-block">
                    <div className="section-header"><span className="numb">04</span><h3>Contacto</h3></div>
                    <div className="contact-clean">
                        <div className="c-row">
                            <span className="c-label">EMAIL_DIRECTO</span>
                            <a href="mailto:contacto@prakxis.cl" className="c-val">contacto@prakxis.cl</a>
                        </div>
                        <div className="c-row">
                            <span className="c-label">ESTADO_SISTEMA</span>
                            <span className="c-val">TEMUCO / DISPONIBLE_2026</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ANALOG_GRAIN_v3</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                
                /* FONDO: SIN DESENFOQUE, MANTENIENDO CALIDAD 35mm */
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                    filter: none; /* Eliminado el blur */
                }

                .grain-overlay {
                    position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    opacity: 0.06; z-index: 999; pointer-events: none; animation: grain 1s steps(10) infinite;
                }
                @keyframes grain { 0%, 100% { transform:translate(0,0) } 50% { transform:translate(5%, 5%) } }

                .site-header { padding: 100px 20px; text-align: center; position: relative; z-index: 100; }
                .top-contact-btn { position: absolute; top: 40px; right: 40px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.7rem; letter-spacing: 2px; }
                .logo-container { max-width: 420px; margin: 0 auto; }
                .main-logo { width: 100%; height: auto; filter: invert(100%); }
                .hero-title { font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; margin-top: 40px; }
                .hero-subline { letter-spacing: 4px; font-size: 0.9rem; opacity: 0.7; }

                .main-content { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }
                .numb { font-weight: 700; }
                h3 { text-transform: uppercase; letter-spacing: 4px; margin: 0; font-size: 1.2rem; }

                /* PRENSA */
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.2); padding: 20px; margin-bottom: 15px; background: rgba(0,0,0,0.4); transition: 0.3s; }
                .press-item:hover { border-color: #fff; transform: translateX(10px); background: #000; }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); }
                .press-item:hover .press-thumb { filter: grayscale(0); }

                /* EDITORIAL */
                .img-wrapper { position: relative; border: 1px solid #fff; overflow: hidden; }
                .dossier-img { width: 100%; display: block; filter: grayscale(1) brightness(0.5); transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0) brightness(1); }
                .dossier-btn-label { background: #000; padding: 15px 35px; border: 1px solid #fff; letter-spacing: 5px; font-weight: 700; }
                .editorial-info { padding: 40px; text-align: center; border: 1px solid #fff; border-top: 0; background: rgba(0,0,0,0.5); }
                .full-btn { display: inline-block; background: #fff; color: #000 !important; padding: 18px 40px; font-weight: 800; margin-top: 20px; }

                /* VIMEO */
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 30px; border: 1px solid #fff; }
                .vimeo-container iframe { position: absolute; top:0; left:0; width:100%; height:100%; filter: grayscale(1); }

                /* GUEGO */
                .game-canvas { width: 100%; height: 350px; border: 1px solid #fff; position: relative; background: rgba(0,0,0,0.8); cursor: crosshair; }
                .score-display { position: absolute; top: 15px; left: 15px; font-size: 0.7rem; letter-spacing: 3px; }
                .game-target { position: absolute; width: 40px; height: 40px; border: 1px solid #fff; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; animation: pulse 1s infinite; }
                @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
                .target-cross { width: 100%; height: 1px; background: #fff; position: relative; }
                .target-cross::after { content: ''; position: absolute; width: 1px; height: 40px; background: #fff; top: -20px; left: 20px; }

                /* CONTACTO */
                .contact-clean { text-align: center; padding: 60px 0; border: 1px solid #fff; background: rgba(0,0,0,0.6); }
                .c-row { margin-bottom: 40px; }
                .c-label { display: block; font-size: 0.7rem; opacity: 0.5; letter-spacing: 4px; }
                .c-val { font-size: 1.6rem; display: block; margin-top: 10px; }

                .footer { padding: 80px; text-align: center; opacity: 0.4; font-size: 0.7rem; letter-spacing: 4px; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;