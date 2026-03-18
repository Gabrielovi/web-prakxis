import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisOriginal = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);

    const jump = (e) => {
        if (e) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
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
                {/* 01. PRENSA */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">01</span><h3>Gestión de Prensa</h3></div>
                    <div className="press-list">
                        <a href="https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/" target="_blank" className="press-item">
                            <img src="/images/prensa/ufro_salud.jpg" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Contacto Salud</span>
                                <span className="tit">UFRO presentó plataforma georreferenciada de salud pública</span>
                            </div>
                        </a>
                        <a href="https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233" target="_blank" className="press-item">
                            <img src="/images/prensa/libro_despojo.jpg" className="press-thumb" />
                            <div className="press-txt">
                                <span className="medio">Araucanía Noticias</span>
                                <span className="tit">Nuevo libro relevan historias de vida de mujeres sindicalistas</span>
                            </div>
                        </a>
                    </div>
                </section>

                {/* 02. DISEÑO EDITORIAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="editorial-preview">
                            <img src="/images/prensa/preview-portfolio.jpg" className="dossier-img" />
                        </a>
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">ABRIR_DOSIER.RAW [PDF]</a>
                    </div>
                </section>

                {/* 03. AUDIOVISUAL */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        <div className="vimeo-container"><iframe src="https://player.vimeo.com/video/1156706044?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
                        <div className="vimeo-container"><iframe src="https://player.vimeo.com/video/1156706575?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
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

                {/* JUEGO DINOSAURIO */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Mode</h3></div>
                    <div className="game-area" onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA INICIAR</div>}
                        {gameOver && <div className="game-overlay">SYSTEM_FAILURE [PULSA]</div>}
                        <div className="score-board">PUNTAJE: {score}</div>
                        <div className={`dino ${isJumping ? 'jumping' : ''}`}></div>
                        <div className="obstacle" style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // GRNK_LAB</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url("/images/fondo-prakxis.jpg");
                    background-size: cover; background-position: center;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.1; z-index: 999; pointer-events: none; }
                .site-header { padding: 80px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 280px; filter: invert(100%); }
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 8px 15px; font-size: 0.6rem; letter-spacing: 2px; }
                
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 100px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }
                
                .press-item { display: flex; gap: 15px; border: 1px solid rgba(255,255,255,0.1); padding: 15px; background: rgba(0,0,0,0.4); transition: 0.3s; margin-bottom: 15px; }
                .press-item:hover { border-color: #fff; background: #000; }
                .press-thumb { width: 60px; height: 60px; object-fit: cover; filter: grayscale(1); transition: 0.4s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.5; transition: 0.5s; border: 1px solid rgba(255,255,255,0.1); }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; border-color: #fff; }
                
                .vimeo-stack { display: flex; flex-direction: column; gap: 20px; }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
                .vimeo-container:hover { border-color: #fff; }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .vimeo-container:hover iframe { filter: grayscale(0); }

                .game-area { width: 100%; height: 160px; background: rgba(255,255,255,0.01); border: 1px solid #fff; position: relative; overflow: hidden; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.6rem; letter-spacing: 4px; }
                .score-board { position: absolute; top: 10px; left: 10px; font-size: 0.6rem; opacity: 0.4; }
                .dino { width: 20px; height: 20px; border: 1px solid #fff; position: absolute; bottom: 10px; left: 30px; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); }
                .dino.jumping { bottom: 80px; }
                .obstacle { width: 8px; height: 30px; background: #fff; position: absolute; bottom: 10px; }
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 10px; }

                .contact-clean { text-align: center; padding: 40px; border: 1px solid #fff; background: rgba(0,0,0,0.5); }
                .full-btn { display: block; border: 1px solid #fff; text-align: center; padding: 15px; margin-top: 15px; font-size: 0.8rem; font-weight: 700; }
                .footer { padding: 60px; text-align: center; opacity: 0.3; font-size: 0.6rem; }
                
                @media (min-width: 600px) {
                    .main-logo { max-width: 380px; }
                    .main-content { padding: 0 40px 100px; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisOriginal;