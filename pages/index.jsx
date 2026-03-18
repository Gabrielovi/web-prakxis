import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    // --- LÓGICA MINI JUEGO "PRAKXIS RUNNER" (Táctil + Teclado) ---
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    
    // Lista de palabras aleatorias para el juego
    const prakxisWords = ["RIGOR", "CIENCIA", "DATOS", "VISUAL", "NARRATIVA", "ESTRATEGIA", "MEMORIA", "EVIDENCIA"];
    const [currentWord, setCurrentWord] = useState("");
    const [wordVisible, setWordVisible] = useState(false);

    const jump = (e) => {
        if (e) e.preventDefault(); // Evita scroll o zoom accidental en móvil
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            
            // Generar palabra aleatoria al saltar
            const randomWord = prakxisWords[Math.floor(Math.random() * prakxisWords.length)];
            setCurrentWord(randomWord);
            setWordVisible(true);
            
            // Ocultar palabra después de un tiempo
            setTimeout(() => setWordVisible(false), 800);
            
            setTimeout(() => setIsJumping(false), 500);
        } else if (!gameStarted || gameOver) {
            resetGame();
        }
    };

    const resetGame = () => {
        setScore(0);
        setObstaclePos(800);
        setGameOver(false);
        setGameStarted(true);
        setCurrentWord("");
        setWordVisible(false);
    };

    useEffect(() => {
        let timer;
        if (gameStarted && !gameOver) {
            timer = setInterval(() => {
                setObstaclePos((pos) => {
                    if (pos < -20) {
                        setScore(s => s + 1);
                        return 800;
                    }
                    if (pos > 10 && pos < 50 && !isJumping) {
                        setGameOver(true);
                    }
                    return pos - (window.innerWidth < 600 ? 7 : 10); // Más lento en móvil para jugabilidad
                });
            }, 20);
        }
        return () => clearInterval(timer);
    }, [gameStarted, gameOver, isJumping]);

    useEffect(() => {
        const handleKeyDown = (e) => { if (e.code === 'Space') jump(); };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isJumping, gameStarted, gameOver]);

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap');
                html { scroll-behavior: smooth; touch-action: manipulation; }
                body { margin: 0; padding: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; overflow-x: hidden; }
                h1, h2, h3, h4, p, a, span { color: #ffffff !important; text-decoration: none; }
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                <a href="#contacto" className="top-contact-btn">[ CONTACTO ]</a>
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" />
                </div>
                <div style={{ marginTop: '30px' }}>
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
                                <span className="tit">UFRO presentó plataforma de salud</span>
                            </div>
                        </a>
                        <a href="https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233" target="_blank" className="press-item">
                            <img src="/images/prensa/libro_despojo.jpg" alt="" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Araucanía Noticias</span>
                                <span className="tit">Libro: "Del despojo surge la esperanza"</span>
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
                                <div className="dossier-overlay"><span className="dossier-btn-label">VER PDF</span></div>
                            </div>
                        </a>
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">VER PORTAFOLIO_COMPLETO [PDF]</a>
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
                        <p style={{ marginTop: '10px', opacity: 0.5, fontSize: '0.8rem' }}>TEMUCO / DISPONIBLE_2026</p>
                    </div>
                </section>

                {/* --- JUEGO CON PALABRAS ALEATORIAS --- */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Laboratorio_Experimental</h3></div>
                    <div className="game-area" onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA EMPEZAR</div>}
                        {gameOver && <div className="game-overlay">SISTEMA CAÍDO. <br/> [PULSA PARA REINICIAR]</div>}
                        <div className="score-board">DATA_RECOVERED: {score}</div>
                        
                        {/* Palabra flotante */}
                        <div className={`floating-word ${wordVisible ? 'visible' : ''}`}>
                            {currentWord}
                        </div>
                        
                        <div className={`dino ${isJumping ? 'jumping' : ''}`}></div>
                        <div className="obstacle" style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ANALOG_GRAIN_v3.2</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.06; z-index: 999; pointer-events: none; }
                .site-header { padding: 60px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 300px; filter: invert(100%); }
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 8px 15px; font-size: 0.6rem; }
                .hero-title { font-size: 1.2rem; letter-spacing: 4px; margin-top: 30px; }
                
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 15px 60px; position: relative; z-index: 100; }
                .section-header h3 { font-size: 1rem; text-transform: uppercase; letter-spacing: 2px; }
                
                /* EFECTO COLOR HOVER */
                .press-item { display: flex; flex-direction: row; gap: 15px; border: 1px solid rgba(255,255,255,0.2); padding: 15px; background: rgba(0,0,0,0.4); }
                .press-thumb { width: 60px; height: 60px; object-fit: cover; filter: grayscale(1); transition: 0.3s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                .tit { font-size: 0.9rem; display: block; }
                
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.6; transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; }
                
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.2); }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .vimeo-container:hover iframe { filter: grayscale(0); }

                /* GAME CSS MOBILE OPTIMIZED */
                .game-area { width: 100%; height: 150px; background: rgba(255,255,255,0.05); border: 1px solid #fff; position: relative; overflow: hidden; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.85); z-index: 10; font-size: 0.7rem; text-align: center; }
                .score-board { position: absolute; top: 10px; right: 10px; font-size: 0.6rem; color: #fff; z-index: 5; }
                
                /* Palabra flotante */
                .floating-word { position: absolute; top: 40px; left: 80px; font-size: 0.8rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 3px; opacity: 0; transition: opacity 0.3s, transform 0.3s; transform: translateY(10px); z-index: 5; }
                .floating-word.visible { opacity: 1; transform: translateY(0); }
                
                .dino { width: 20px; height: 20px; background: #fff; position: absolute; bottom: 10px; left: 20px; transition: bottom 0.4s cubic-bezier(0.33, 1, 0.68, 1); z-index: 5; }
                .dino.jumping { bottom: 80px; }
                .obstacle { width: 10px; height: 20px; background: #ff0000; position: absolute; bottom: 10px; z-index: 5; }
                .ground { width: 100%; height: 1px; background: rgba(255,255,255,0.3); position: absolute; bottom: 10px; }
                
                .contact-clean { text-align: center; padding: 40px 10px; border: 1px solid #fff; background: rgba(0,0,0,0.4); }
                .c-val { font-size: 1.2rem; font-weight: 700; word-break: break-all; }
                .full-btn { display: block; text-align: center; background: #fff; color: #000 !important; padding: 15px; font-weight: 800; margin-top: 15px; font-size: 0.8rem; text-transform: uppercase; }
                .footer { padding: 80px; text-align: center; opacity: 0.4; font-size: 0.6rem; }
                
                @media (min-width: 600px) {
                    .hero-title { font-size: 1.8rem; letter-spacing: 6px; }
                    .main-logo { max-width: 420px; }
                    .c-val { font-size: 1.8rem; }
                    .main-content { padding: 0 20px 100px; }
                }
            `}</style>
        </div>
    );
};

export { IndexPrakxisFinal as default };