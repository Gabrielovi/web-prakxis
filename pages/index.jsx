import React, { useState } from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const wordsToFind = ["RIGOR", "CIENCIA", "DATOS", "VISUAL", "NARRATIVA", "EVIDENCIA"];
    const [selectedCells, setSelectedCells] = useState([]);

    const grid = [
        ['R', 'I', 'G', 'O', 'R', 'X', 'P', 'Q', 'Z'],
        ['C', 'I', 'E', 'N', 'C', 'I', 'A', 'W', 'V'],
        ['X', 'D', 'A', 'T', 'O', 'S', 'L', 'M', 'I'],
        ['N', 'A', 'R', 'R', 'A', 'T', 'I', 'V', 'A'],
        ['E', 'V', 'I', 'D', 'E', 'N', 'C', 'I', 'A'],
        ['V', 'I', 'S', 'U', 'A', 'L', 'B', 'K', 'Y']
    ];

    const handleCellClick = (r, c) => {
        const cellKey = `${r}-${c}`;
        setSelectedCells(prev => 
            prev.includes(cellKey) ? prev.filter(cell => cell !== cellKey) : [...prev, cellKey]
        );
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
                body { margin: 0; padding: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; }
                h1, h2, h3, h4, p, a, span { color: #ffffff !important; text-decoration: none; }
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
                        <a href="https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/" target="_blank" className="press-item">
                            <img src="/images/prensa/ufro_salud.jpg" alt="" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Contacto Salud</span>
                                <span className="tit">UFRO presentó plataforma de salud pública</span>
                            </div>
                        </a>
                        <a href="https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233" target="_blank" className="press-item">
                            <img src="/images/prensa/libro_despojo.jpg" alt="" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Araucanía Noticias</span>
                                <span className="tit">Nuevo libro: "Del despojo surge la esperanza"</span>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="editorial-preview">
                            <div className="img-wrapper">
                                <img src="/images/prensa/preview-portfolio.jpg" alt="Dosier" className="dossier-img" />
                                <div className="dossier-overlay"><span className="dossier-btn-label">ABRIR DOSIER</span></div>
                            </div>
                        </a>
                        <div className="editorial-info">
                            <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">VER PORTAFOLIO_COMPLETO [PDF]</a>
                        </div>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        <div className="vimeo-container"><iframe src="https://player.vimeo.com/video/1156706044" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
                        <div className="vimeo-container" style={{ marginTop: '20px' }}><iframe src="https://player.vimeo.com/video/1156706575" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
                    </div>
                </section>

                {/* 04. CONTACTO */}
                <section id="contacto" className="section-block">
                    <div className="section-header"><span className="numb">04</span><h3>Contacto</h3></div>
                    <div className="contact-clean">
                        <a href="mailto:contacto@prakxis.cl" className="c-val">contacto@prakxis.cl</a>
                        <p style={{ marginTop: '10px', opacity: 0.6, fontSize: '0.8rem' }}>TEMUCO / DISPONIBLE_2026</p>
                    </div>
                </section>

                {/* SOPA DE LETRAS LIMPIA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Laboratorio_Palabras</h3></div>
                    <div className="wordsearch-container">
                        <div className="word-grid">
                            {grid.map((row, rIdx) => (
                                <div key={rIdx} className="grid-row">
                                    {row.map((letter, cIdx) => (
                                        <div 
                                            key={cIdx} 
                                            className={`grid-cell ${selectedCells.includes(`${rIdx}-${cIdx}`) ? 'active' : ''}`}
                                            onClick={() => handleCellClick(rIdx, cIdx)}
                                        >
                                            {letter}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="word-list">
                            <p className="list-title">[ CONCEPTOS_A_DECODIFICAR ]</p>
                            <div className="tags-container">
                                {wordsToFind.map(word => (
                                    <span key={word} className="word-item">{word}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.05; z-index: 999; pointer-events: none; }
                .site-header { padding: 100px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 420px; filter: invert(100%); }
                .top-contact-btn { position: absolute; top: 40px; right: 40px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.7rem; letter-spacing: 2px; }
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 100px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 30px; }
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.2); padding: 20px; margin-bottom: 15px; background: rgba(0,0,0,0.4); }
                .press-thumb { width: 80px; height: 80px; object-fit: cover; filter: grayscale(1); }
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.5; transition: 0.4s; }
                .full-btn { display: inline-block; background: #fff; color: #000 !important; padding: 15px 30px; font-weight: 800; margin-top: 20px; }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.2); }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
                
                /* SOPA DE LETRAS SIMPLE */
                .wordsearch-container { background: rgba(255,255,255,0.05); border: 1px solid #fff; padding: 40px; text-align: center; }
                .word-grid { display: inline-flex; flex-direction: column; gap: 5px; margin-bottom: 30px; }
                .grid-row { display: flex; gap: 5px; }
                .grid-cell { width: 35px; height: 35px; border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; font-weight: 700; font-size: 0.9rem; }
                .grid-cell.active { background: #fff; color: #000 !important; }
                .tags-container { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
                .word-item { font-size: 0.7rem; border: 1px solid rgba(255,255,255,0.3); padding: 4px 10px; opacity: 0.7; }
                
                .contact-clean { text-align: center; padding: 40px; border: 1px solid #fff; }
                .footer { padding: 40px; text-align: center; opacity: 0.3; font-size: 0.7rem; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;