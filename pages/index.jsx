import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    // --- LÓGICA DE LA SOPA DE LETRAS ---
    const wordsToFind = ["RIGOR", "CIENCIA", "DATOS", "VISUAL", "NARRATIVA", "EVIDENCIA"];
    const [foundWords, setFoundWords] = useState([]);
    const [selectedCells, setSelectedCells] = useState([]);

    // Grid de ejemplo (Debe coincidir con las palabras ocultas)
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
        if (selectedCells.includes(cellKey)) {
            setSelectedCells(selectedCells.filter(cell => cell !== cellKey));
        } else {
            setSelectedCells([...selectedCells, cellKey]);
        }
    };

    // Efecto simple para "chequear" palabras (puedes expandir esta lógica)
    useEffect(() => {
        // Aquí podrías validar si las selectedCells forman una palabra de la lista
        // Por simplicidad en este MVP, el usuario las marca manualmente
    }, [selectedCells]);

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
                /* FORZAR TÍTULOS EN BLANCO */
                h1, h2, h3, h4, p, a, span { 
                    font-family: 'Chakra Petch', sans-serif !important; 
                    color: #fff !important; 
                }
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
                                <span className="tit">UFRO presentó plataforma georreferenciada de salud pública</span>
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
                            <p>Memorias institucionales y reportes técnicos. Visualización de datos y narrativa estratégica.</p>
                            <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">VER PORTAFOLIO_COMPLETO [PDF]</a>
                        </div>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        <div className="vimeo-container">
                            <iframe src="https://player.vimeo.com/video/1156706044?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe>
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

                {/* JUEGO: SOPA DE LETRAS (BAJO CONTACTO) */}
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
                            {wordsToFind.map(word => (
                                <span key={word} className={`word-item ${foundWords.includes(word) ? 'strikethrough' : ''}`}>
                                    {word}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ANALOG_GRAIN_v3</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url("/images/fondo-prakxis.jpg");
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
                .main-logo { width: 100%; max-width: 420px; filter: invert(100%); }
                .hero-title { font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; margin-top: 40px; }

                .main-content { max-width: 900px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }

                /* PRENSA HOVER COLOR */
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.2); padding: 20px; transition: 0.3s; background: rgba(0,0,0,0.4); }
                .press-item:hover { border-color: #fff; background: #000; }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); transition: 0.5s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }

                /* EDITORIAL */
                .dossier-img { width: 100%; filter: grayscale(1) brightness(0.5); transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0) brightness(1); }
                .full-btn { display: inline-block; background: #fff; color: #000 !important; padding: 18px 40px; font-weight: 800; margin-top: 20px; }

                /* SOPA DE LETRAS BRUTALISTA */
                .wordsearch-container { background: rgba(255,255,255,0.05); border: 1px solid #fff; padding: 40px; display: flex; flex-direction: column; align-items: center; }
                .word-grid { display: flex; flex-direction: column; gap: 5px; margin-bottom: 30px; }
                .grid-row { display: flex; gap: 5px; }
                .grid-cell { 
                    width: 40px; height: 40px; border: 1px solid rgba(255,255,255,0.2); 
                    display: flex; align-items: center; justify-content: center; 
                    cursor: pointer; font-weight: 700; transition: 0.2s;
                }
                .grid-cell:hover { background: rgba(255,255,255,0.1); }
                .grid-cell.active { background: #fff; color: #000 !important; }
                
                .word-list { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
                .list-title { width: 100%; text-align: center; font-size: 0.7rem; letter-spacing: 3px; margin-bottom: 10px; opacity: 0.6; }
                .word-item { font-size: 0.8rem; letter-spacing: 2px; border: 1px solid rgba(255,255,255,0.3); padding: 5px 10px; }
                .strikethrough { text-decoration: line-through; opacity: 0.3; }

                .contact-clean { text-align: center; padding: 40px; border: 1px solid #fff; }
                .footer { padding: 80px; text-align: center; opacity: 0.4; font-size: 0.7rem; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;