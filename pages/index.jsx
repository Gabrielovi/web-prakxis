import React, { useState } from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const [word1, setWord1] = useState("RIGOR");
    const [word2, setWord2] = useState("VISUAL");
    const [isGlitching, setIsGlitching] = useState(false);

    const lista1 = ["RIGOR", "CIENCIA", "DATOS", "EVIDENCIA", "ESTRATEGIA", "MEMORIA"];
    const lista2 = ["VISUAL", "NARRATIVO", "ESTÉTICO", "BRUTALISTA", "CRÍTICO", "SISTÉMICO"];

    const decodificar = () => {
        setIsGlitching(true);
        setTimeout(() => {
            setWord1(lista1[Math.floor(Math.random() * lista1.length)]);
            setWord2(lista2[Math.floor(Math.random() * lista2.length)]);
            setIsGlitching(false);
        }, 300);
    };

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap');
                html { scroll-behavior: smooth; }
                body { margin: 0; padding: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; color: #fff; }
                a, button { cursor: pointer; }
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
                        {[
                            { t: "UFRO presentó plataforma de salud pública", u: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", m: "Contacto Salud", i: "/images/prensa/ufro_salud.jpg" },
                            { t: "Nuevo libro 'Del despojo surge la esperanza'", u: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", m: "Araucanía Noticias", i: "/images/prensa/libro_despojo.jpg" }
                        ].map((nota, i) => (
                            <a key={i} href={nota.u} target="_blank" rel="noopener noreferrer" className="press-item">
                                <img src={nota.i} alt="" className="press-thumb" />
                                <div className="press-txt">
                                    <span className="medio">{nota.m}</span>
                                    <span className="tit">{nota.t}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL - RUTA ACTUALIZADA A /docs/diseno/portfolio.pdf */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="editorial-preview">
                            <div className="img-wrapper">
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Dosier" className="dossier-img" />
                                <div className="dossier-overlay"><span className="dossier-btn-label">ABRIR DOSIER</span></div>
                            </div>
                        </a>
                        <div className="editorial-info">
                            <p>Memorias institucionales y reportes técnicos de alta complejidad.</p>
                            <a href="/docs/diseno/portfolio.pdf" target="_blank" rel="noopener noreferrer" className="full-btn">VER PORTAFOLIO_COMPLETO [PDF]</a>
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

                {/* JUEGO: DECODIFICADOR */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Concept_Decoder_v1.0</h3></div>
                    <div className="decoder-box">
                        <div className={`decoder-display ${isGlitching ? 'glitch' : ''}`}>
                            <span className="word">{word1}</span>
                            <span className="separator">_</span>
                            <span className="word">{word2}</span>
                        </div>
                        <button className="decode-btn" onClick={decodificar}>[ RE_GENERAR_CONCEPTO ]</button>
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
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ANALOG_FIX_FINAL_v2</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
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
                .hero-title { font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; margin-top: 40px; line-height: 1.4; }
                .main-content { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.2); padding: 20px; margin-bottom: 15px; background: rgba(0,0,0,0.4); }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); }
                .img-wrapper { border: 1px solid #fff; overflow: hidden; position: relative; }
                .dossier-img { width: 100%; display: block; filter: grayscale(1) brightness(0.4); }
                .dossier-btn-label { background: #000; padding: 15px 35px; border: 1px solid #fff; letter-spacing: 5px; font-weight: 700; }
                .editorial-info { padding: 40px; text-align: center; border: 1px solid #fff; border-top: 0; background: rgba(0,0,0,0.5); }
                .full-btn { display: inline-block; background: #fff; color: #000 !important; padding: 18px 40px; font-weight: 800; margin-top: 20px; letter-spacing: 2px; }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; margin-bottom: 30px; border: 1px solid #fff; }
                .vimeo-container iframe { position: absolute; top:0; left:0; width:100%; height:100%; filter: grayscale(1); }
                .decoder-box { background: rgba(255,255,255,0.05); border: 1px solid #fff; padding: 60px 20px; text-align: center; }
                .decoder-display { margin-bottom: 40px; min-height: 80px; display: flex; align-items: center; justify-content: center; gap: 10px; }
                .word { font-size: 2.5rem; font-weight: 800; letter-spacing: 5px; }
                .decode-btn { background: transparent; border: 1px solid #fff; color: #fff; padding: 15px 30px; font-weight: 700; letter-spacing: 3px; font-family: 'Chakra Petch'; }
                .glitch { animation: glitch-anim 0.2s infinite; opacity: 0.5; }
                @keyframes glitch-anim { 0% { transform: translate(2px, 0); } 50% { transform: translate(-2px, 0); } }
                .contact-clean { text-align: center; padding: 60px 0; border: 1px solid #fff; background: rgba(0,0,0,0.6); }
                .c-val { font-size: 1.6rem; display: block; margin-top: 10px; }
                .footer { padding: 80px; text-align: center; opacity: 0.4; font-size: 0.7rem; letter-spacing: 4px; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;