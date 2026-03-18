import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisGenerativo = () => {
    // --- LÓGICA MINI JUEGO "GLITCH RUNNER" ---
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [currentGlitch, setCurrentGlitch] = useState("");
    const [wordVisible, setWordVisible] = useState(false);

    // FUNCIÓN GENERATIVA: Extrae palabras de la página y las mezcla
    const generateGlitchWord = () => {
        // Obtenemos todo el texto del body y lo limpiamos
        const allText = document.body.innerText || "";
        const words = allText.split(/\s+/).filter(w => w.length > 3);
        
        // Añadimos términos técnicos del script
        const techTerms = ["querySelector", "useEffect", "glitch", "const", "return", "system", "px_core", "void"];
        const combinedPool = [...words, ...techTerms];

        // Mezclamos dos partes aleatorias
        const part1 = combinedPool[Math.floor(Math.random() * combinedPool.length)].substring(0, 4);
        const part2 = combinedPool[Math.floor(Math.random() * combinedPool.length)].substring(0, 4);
        
        return `${part1.toUpperCase()}_${part2.toLowerCase()}`;
    };

    const jump = (e) => {
        if (e) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            
            // Generamos la palabra mutante
            setCurrentGlitch(generateGlitchWord());
            setWordVisible(true);
            
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
                    if (pos > 10 && pos < 50 && !isJumping) setGameOver(true);
                    return pos - (window.innerWidth < 600 ? 8 : 12);
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
                h1, h2, h3, h4, p, a, span { color: #ffffff !important; }
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

                {/* --- JUEGO GENERATIVO --- */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Sintetizador_de_Datos</h3></div>
                    <div className="game-area" onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA GENERAR SECUENCIA</div>}
                        {gameOver && <div className="game-overlay">SISTEMA REBOOTING... <br/> [PULSA PARA REINICIAR]</div>}
                        <div className="score-board">RECOMBINACIONES: {score}</div>
                        
                        <div className={`floating-glitch ${wordVisible ? 'visible' : ''}`}>
                            {currentGlitch}
                        </div>
                        
                        <div className={`dino ${isJumping ? 'jumping' : ''}`}></div>
                        <div className={`obstacle ${gameOver ? 'hit' : ''}`} style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE // GENERATIVE_MODE_v4</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.08; z-index: 999; pointer-events: none; }
                .site-header { padding: 60px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 300px; filter: invert(100%); }
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 8px 15px; font-size: 0.6rem; letter-spacing: 2px; }
                
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 15px 60px; position: relative; z-index: 100; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 30px; }
                
                /* HOVER EFFECTS */
                .press-item { display: flex; gap: 15px; border: 1px solid rgba(255,255,255,0.2); padding: 15px; background: rgba(0,0,0,0.5); transition: 0.3s; }
                .press-item:hover { border-color: #fff; background: rgba(255,255,255,0.05); }
                .press-thumb { width: 60px; height: 60px; object-fit: cover; filter: grayscale(1); transition: 0.4s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.6; transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; }
                
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.2); }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .vimeo-container:hover iframe { filter: grayscale(0); }

                /* GAME AREA GENERATIVE */
                .game-area { width: 100%; height: 180px; background: rgba(255,255,255,0.02); border: 1px dashed #fff; position: relative; overflow: hidden; cursor: crosshair; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.9); z-index: 10; font-size: 0.7rem; letter-spacing: 3px; }
                .score-board { position: absolute; top: 10px; left: 10px; font-size: 0.6rem; color: #fff; font-family: monospace; }
                
                .floating-glitch { position: absolute; top: 30px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; font-weight: 800; color: #fff; opacity: 0; transition: 0.2s; font-family: monospace; text-shadow: 2px 2px #ff0000, -2px -2px #0000ff; }
                .floating-glitch.visible { opacity: 1; transform: translateX(-50%) translateY(-10px); }
                
                .dino { width: 25px; height: 25px; border: 2px solid #fff; position: absolute; bottom: 20px; left: 40px; transition: bottom 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .dino.jumping { bottom: 100px; }
                .obstacle { width: 15px; height: 40px; background: #fff; position: absolute; bottom: 20px; }
                .obstacle.hit { background: #ff0000; }
                .ground { width: 100%; height: 2px; background: #fff; position: absolute; bottom: 20px; }
                
                .footer { padding: 60px; text-align: center; opacity: 0.3; font-size: 0.6rem; letter-spacing: 2px; }
                
                @media (min-width: 600px) {
                    .hero-title { font-size: 1.8rem; letter-spacing: 6px; }
                    .main-logo { max-width: 420px; }
                    .game-area { height: 200px; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisGenerativo;