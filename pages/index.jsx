import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisGlitchAbstracto = () => {
    // --- LÓGICA JUEGO "KERNEL GLITCH" ---
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [currentGlitch, setCurrentGlitch] = useState("");
    const [wordVisible, setWordVisible] = useState(false);

    const generateAbstractGlitch = () => {
        const sourceText = document.body.innerHTML || "";
        const cleanSource = (sourceText + " => { } [ ] < /> # _ 01 × ∆").replace(/<[^>]*>/g, '');
        const chars = cleanSource.split('').filter(c => c.trim().length > 0);
        let glitch = "";
        for(let i = 0; i < 6; i++) { glitch += chars[Math.floor(Math.random() * chars.length)]; }
        const triggers = ["_", "/", "::", "ø", "!", "?", "null"];
        return glitch.trim().toUpperCase() + triggers[Math.floor(Math.random() * triggers.length)];
    };

    const jump = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            setCurrentGlitch(generateAbstractGlitch());
            setWordVisible(true);
            setTimeout(() => setWordVisible(false), 700);
            setTimeout(() => setIsJumping(false), 500);
        } else if (!gameStarted || gameOver) { resetGame(); }
    };

    const resetGame = () => { setScore(0); setObstaclePos(800); setGameOver(false); setGameStarted(true); };

    useEffect(() => {
        let timer;
        if (gameStarted && !gameOver) {
            timer = setInterval(() => {
                setObstaclePos((pos) => {
                    if (pos < -20) { setScore(s => s + 1); return 800; }
                    if (pos > 10 && pos < 50 && !isJumping) setGameOver(true);
                    return pos - (window.innerWidth < 600 ? 9 : 14);
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
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" />
                </div>
            </header>

            <main className="main-content">
                {/* 01. PRENSA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">01</span><h3>Gestión de Prensa</h3></div>
                    <div className="press-list">
                        <a href="https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/" target="_blank" className="press-item">
                            <img src="/images/prensa/ufro_salud.jpg" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Contacto Salud</span>
                                <span className="tit">UFRO presentó plataforma de salud pública</span>
                            </div>
                        </a>
                        <a href="https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233" target="_blank" className="press-item">
                            <img src="/images/prensa/libro_despojo.jpg" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Araucanía Noticias</span>
                                <span className="tit">Libro historias de vida de mujeres sindicalistas</span>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <a href="/docs/diseno/portfolio.pdf" target="_blank" className="editorial-preview-gif">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/TV_static.gif" className="background-gif-noise" />
                        <div className="dossier-overlay-center">
                            <span className="dossier-btn-label">ABRIR_DOSIER.RAW [PDF]</span>
                        </div>
                    </a>
                </section>

                {/* 03. AUDIOVISUAL (CONTENEDOR ÚNICO) */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="av-folder">
                        <div className="video-noise-overlay"></div>
                        <div className="vimeo-stack">
                            <div className="vimeo-container">
                                <iframe src="https://player.vimeo.com/video/1156706044?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                            <div className="vimeo-container">
                                <iframe src="https://player.vimeo.com/video/1156706575?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                        </div>
                        <div className="folder-label">ARCHIVOS_VÍDEO.MP4</div>
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

                {/* JUEGO: SINTETIZADOR DE ENTROPÍA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Glitch</h3></div>
                    <div className="game-area" onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">EJECUTAR_ENTROPÍA</div>}
                        {gameOver && <div className="game-overlay">SYSTEM_FAILURE</div>}
                        <div className="score-board">REBOOTS: {score}</div>
                        <div className={`glitch-text ${wordVisible ? 'visible' : ''}`}>{currentGlitch}</div>
                        <div className={`dino ${isJumping ? 'jumping' : ''}`}></div>
                        <div className="obstacle" style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.98)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.1; z-index: 999; pointer-events: none; }
                .site-header { padding: 60px 20px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 240px; filter: invert(100%); }
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 15px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 70px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 30px; }
                
                /* PRENSA */
                .press-item { display: flex; gap: 15px; border: 1px solid rgba(255,255,255,0.1); padding: 15px; background: rgba(0,0,0,0.4); margin-bottom: 10px; }
                .press-thumb { width: 60px; height: 60px; object-fit: cover; filter: grayscale(1); }
                
                /* DOSSIER GIF */
                .editorial-preview-gif { display: block; position: relative; width: 100%; height: 160px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
                .background-gif-noise { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: grayscale(1); opacity: 0.3; transition: 0.5s; }
                .dossier-overlay-center { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.5); z-index: 2; }
                .dossier-btn-label { font-size: 0.7rem; border: 1px solid #fff; padding: 10px 20px; letter-spacing: 2px; }

                /* AUDIOVISUAL: CARPETA ÚNICA */
                .av-folder { position: relative; border: 1px solid rgba(255,255,255,0.1); padding: 10px; background: rgba(0,0,0,0.5); transition: 0.4s; overflow: hidden; }
                .video-noise-overlay { 
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ec/TV_static.gif"); 
                    opacity: 0.15; z-index: 5; pointer-events: none; transition: 0.4s;
                }
                .vimeo-stack { display: flex; flex-direction: column; gap: 10px; }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .folder-label { font-size: 0.6rem; color: #fff; margin-top: 10px; opacity: 0.4; letter-spacing: 2px; text-align: right; }

                .av-folder:hover { border-color: #fff; }
                .av-folder:hover .video-noise-overlay { opacity: 0; }
                .av-folder:hover iframe { filter: grayscale(0); }

                /* GAME AREA */
                .game-area { width: 100%; height: 150px; background: rgba(255,255,255,0.01); border: 1px solid #fff; position: relative; overflow: hidden; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.6rem; letter-spacing: 4px; }
                .glitch-text { position: absolute; top: 30%; left: 50%; transform: translateX(-50%); font-size: 2.2rem; font-weight: 900; color: #fff; opacity: 0; font-family: monospace; text-shadow: 2px 2px #ff0000, -2px -2px #0000ff; }
                .glitch-text.visible { opacity: 1; animation: blink 0.15s infinite; }
                .dino { width: 20px; height: 20px; border: 1px solid #fff; position: absolute; bottom: 15px; left: 30px; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); }
                .dino.jumping { bottom: 80px; }
                .obstacle { width: 8px; height: 30px; background: #fff; position: absolute; bottom: 15px; }
                .ground { width: 100%; height: 1px; background: rgba(255,255,255,0.3); position: absolute; bottom: 15px; }

                @keyframes blink { 0% { opacity: 0.5; transform: translateX(-52%); } 50% { opacity: 1; transform: translateX(-48%); } 100% { opacity: 0.8; } }
                .contact-clean { text-align: center; padding: 40px; border: 1px solid #fff; }
                .c-val { font-size: 1.1rem; font-weight: 700; }
                .footer { padding: 40px; text-align: center; opacity: 0.3; font-size: 0.6rem; }
                
                @media (min-width: 600px) {
                    .main-logo { max-width: 320px; }
                    .vimeo-stack { flex-direction: row; gap: 10px; }
                    .vimeo-container { width: 50%; padding-bottom: 28.125%; }
                    .editorial-preview-gif { height: 220px; }
                    .c-val { font-size: 1.5rem; }
                }
            `}</style>
        </div>
    );
};

export { IndexPrakxisGlitchAbstracto as default };