import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisGlitchAbstracto = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [currentGlitch, setCurrentGlitch] = useState("");
    const [wordVisible, setWordVisible] = useState(false);

    // GENERADOR DE ENTROPÍA (Meta-lenguaje no significante)
    const generateAbstractGlitch = () => {
        const source = (document.body.innerHTML + " => { } [ ] < /> # _ 01").replace(/<[^>]*>/g, '');
        const chars = source.split('');
        
        // Creamos una cadena de 5 a 8 caracteres totalmente aleatoria basada en la web
        let glitch = "";
        for(let i = 0; i < 6; i++) {
            glitch += chars[Math.floor(Math.random() * chars.length)];
        }
        
        // Insertamos caracteres de control para romper la lectura
        const triggers = ["_", "/", "::", "ø", "×", "∆"];
        return (glitch.trim() + triggers[Math.floor(Math.random() * triggers.length)]).replace(/\s/g, '0');
    };

    const jump = (e) => {
        if (e) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            setCurrentGlitch(generateAbstractGlitch());
            setWordVisible(true);
            setTimeout(() => setWordVisible(false), 600);
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
                <a href="#contacto" className="top-contact-btn">[ CONTACTO ]</a>
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" />
                </div>
            </header>

            <main className="main-content">
                {/* 01. PRENSA CON HOVER COLOR */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">01</span><h3>Gestión de Prensa</h3></div>
                    <div className="press-list">
                        <a href="https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/" target="_blank" className="press-item">
                            <img src="/images/prensa/ufro_salud.jpg" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Contacto Salud</span>
                                <span className="tit">UFRO presentó plataforma de salud</span>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 02. DOSSIER CON HOVER COLOR */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="editorial-preview">
                            <img src="/images/prensa/preview-portfolio.jpg" className="dossier-img" />
                        </a>
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">ABRIR_DOSIER.RAW</a>
                    </div>
                </section>

                {/* JUEGO: SINTETIZADOR DE ENTROPÍA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Glitch</h3></div>
                    <div className="game-area" onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">EJECUTAR_ENTROPÍA</div>}
                        {gameOver && <div className="game-overlay">NULL_POINTER_EXCEPTION</div>}
                        
                        <div className={`glitch-text ${wordVisible ? 'visible' : ''}`}>
                            {currentGlitch}
                        </div>
                        
                        <div className={`dino ${isJumping ? 'jumping' : ''}`}></div>
                        <div className="obstacle" style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.98)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.1; z-index: 999; pointer-events: none; }
                .site-header { padding: 40px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 250px; filter: invert(100%); }
                .main-content { max-width: 800px; margin: 0 auto; padding: 20px; position: relative; z-index: 100; }
                
                /* HOVER EFFECTS COLOR */
                .press-item { display: flex; gap: 15px; border: 1px solid rgba(255,255,255,0.1); padding: 15px; transition: 0.3s; }
                .press-thumb { width: 60px; height: 60px; filter: grayscale(1); transition: 0.4s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.5; transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; }

                /* GAME AREA: ABSTRACT */
                .game-area { width: 100%; height: 160px; background: rgba(255,255,255,0.01); border: 1px solid #fff; position: relative; overflow: hidden; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.6rem; letter-spacing: 4px; }
                
                .glitch-text { position: absolute; top: 30%; left: 50%; transform: translateX(-50%); font-size: 2rem; font-weight: 900; color: #fff; opacity: 0; font-family: monospace; letter-spacing: -2px; }
                .glitch-text.visible { opacity: 1; animation: blink 0.1s infinite; }
                
                .dino { width: 20px; height: 20px; border: 1px solid #fff; position: absolute; bottom: 10px; left: 30px; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); }
                .dino.jumping { bottom: 80px; }
                .obstacle { width: 8px; height: 30px; background: #fff; position: absolute; bottom: 10px; }
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 10px; }

                @keyframes blink { 0% { opacity: 0.5; transform: translateX(-52%); } 50% { opacity: 1; transform: translateX(-48%); } 100% { opacity: 0.8; } }
                .full-btn { display: block; border: 1px solid #fff; text-align: center; padding: 10px; margin-top: 10px; font-size: 0.7rem; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisGlitchAbstracto;