import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    
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

            {/* FUENTES Y RESET */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap');
                body {
                    margin: 0; padding: 0; background: #000; color: #fff;
                    font-family: 'Chakra Petch', sans-serif !important;
                }
                h1, h2, h3, h4, p, a, span {
                    font-family: 'Chakra Petch', sans-serif !important;
                    color: #ffffff !important;
                    text-decoration: none;
                }
            `}</style>

            <div className="grain-overlay"></div>

            {/* HEADER CON LOGO BLANCO (INVERTIDO POR CSS) */}
            <header className="site-header">
                <div className="logo-container">
                    <img 
                        src="/images/logo_prakxis.png" 
                        alt="PRAKXIS" 
                        className="main-logo" 
                    />
                </div>
                <div style={{ marginTop: '40px' }}>
                    <h2 className="hero-title">
                        NARRATIVAS VISUALES <br />
                        <span style={{ fontWeight: '700' }}>CON RIGOR CIENTÍFICO.</span>
                    </h2>
                    <p className="hero-subline">
                        <span style={{ fontWeight: '700' }}>[PX]</span> ——— <span>COMUNICACIÓN_CIENTÍFICA</span>
                    </p>
                </div>
            </header>

            <main className="main-content">
                
                {/* 01. PRENSA */}
                <section className="section-block">
                    <div className="section-header">
                        <span className="numb">01</span>
                        <h3>Gestión de Prensa</h3>
                    </div>
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

                {/* 02. DISEÑO EDITORIAL (CONTRASTE ALTO) */}
                <section className="section-block">
                    <div className="section-header">
                        <span className="numb">02</span>
                        <h3>Diseño Editorial</h3>
                    </div>
                    <div className="editorial-box">
                        <a href="/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="editorial-preview">
                            <div className="img-wrapper">
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Dosier" className="dossier-img" />
                                <div className="dossier-overlay">
                                    <span className="dossier-btn-label">ABRIR DOSIER</span>
                                </div>
                            </div>
                        </a>
                        <div className="editorial-info">
                            <p>Memorias institucionales y reportes técnicos. Visualización de datos y narrativa estratégica.</p>
                            <a href="/diseno/PRAKXIS_PORFOLIO.pdf" target="_blank" rel="noopener noreferrer" className="full-btn">
                                VER PORTAFOLIO_COMPLETO [PDF]
                            </a>
                        </div>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="section-block">
                    <div className="section-header">
                        <span className="numb">03</span>
                        <h3>Audiovisual</h3>
                    </div>
                    <div className="vimeo-stack">
                        {videosVimeo.map((v) => (
                            <div key={v} className="vimeo-container">
                                <iframe src={`https://player.vimeo.com/video/${v}?badge=0`} frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 04. CONTACTO BRUTALISTA */}
                <section className="section-block">
                    <div className="section-header">
                        <span className="numb">04</span>
                        <h3>Contacto</h3>
                    </div>
                    <div className="contact-clean">
                        <div className="c-row">
                            <span className="c-label">EMAIL_DIRECTO</span>
                            <a href="mailto:contacto@prakxis.cl" className="c-val">contacto@prakxis.cl</a>
                        </div>
                        <div className="c-row">
                            <span className="c-label">UBICACIÓN_RED</span>
                            <span className="c-val">TEMUCO / CHILE</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // BUILD_FINAL</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                
                /* FONDO DESENFOCADO */
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center; filter: blur(10px); transform: scale(1.1);
                }

                .grain-overlay {
                    position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png");
                    opacity: 0.04; z-index: 999; pointer-events: none; animation: grain 1s steps(10) infinite;
                }
                @keyframes grain { 0%, 100% { transform:translate(0,0) } 50% { transform:translate(5%, 5%) } }

                .site-header { padding: 80px 20px; text-align: center; position: relative; z-index: 100; }
                .logo-container { max-width: 400px; margin: 0 auto; }
                .main-logo { width: 100%; height: auto; filter: invert(100%); } /* Invierte logo negro a blanco */

                .hero-title { font-size: 1.8rem; letter-spacing: 6px; text-transform: uppercase; line-height: 1.4; }
                .hero-subline { margin-top: 30px; letter-spacing: 4px; font-size: 0.9rem; opacity: 0.8; }

                .main-content { max-width: 850px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 100px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 10px; margin-bottom: 30px; }
                .numb { opacity: 0.4; font-weight: 700; }
                h3 { text-transform: uppercase; letter-spacing: 4px; margin: 0; font-size: 1.1rem; }

                /* PRENSA HOVER COLOR */
                .press-item { display: flex; gap: 20px; background: rgba(255,255,255,0.03); padding: 15px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 15px; transition: 0.3s; }
                .press-item:hover { border-color: #fff; background: rgba(255,255,255,0.08); transform: translateX(5px); }
                .press-thumb { width: 80px; height: 80px; object-fit: cover; filter: grayscale(1); transition: 0.3s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                .press-txt { display: flex; flex-direction: column; justify-content: center; }
                .medio { font-size: 0.7rem; font-weight: 700; opacity: 0.6; letter-spacing: 2px; }
                .tit { font-size: 1rem; margin-top: 5px; }

                /* EDITORIAL */
                .img-wrapper { position: relative; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; background: #000; }
                .dossier-img { width: 100%; display: block; filter: grayscale(1) contrast(0.6); opacity: 0.5; transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0) contrast(1); opacity: 0.9; }
                .dossier-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
                .dossier-btn-label { background: #000; padding: 12px 30px; border: 1px solid #fff; letter-spacing: 4px; font-weight: 600; font-size: 0.8rem; }
                .editorial-info { padding: 40px; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); border-top: 0; }
                .full-btn { display: inline-block; background: #fff; color: #000 !important; padding: 15px 40px; font-weight: 700; margin-top: 20px; font-size: 0.8rem; letter-spacing: 2px; }

                /* VIDEO */
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
                .vimeo-container iframe { position: absolute; top:0; left:0; width:100%; height:100%; filter: grayscale(1); transition: 0.4s; }
                .vimeo-container:hover iframe { filter: grayscale(0); }

                /* CONTACTO */
                .contact-clean { text-align: center; padding: 40px 0; }
                .c-row { margin-bottom: 30px; }
                .c-label { display: block; font-size: 0.7rem; opacity: 0.5; letter-spacing: 3px; }
                .c-val { font-size: 1.4rem; display: block; margin-top: 10px; letter-spacing: 1px; }

                .footer { padding: 60px; text-align: center; opacity: 0.2; font-size: 0.7rem; letter-spacing: 3px; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;