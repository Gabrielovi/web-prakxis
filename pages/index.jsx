import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const IndexPrakxisDefinitivo = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [glitchFlash, setGlitchFlash] = useState(false);
    const [currentDecodingText, setCurrentDecodingText] = useState("ADDR: 0x0000...");
    const [changingLetter, setChangingLetter] = useState('O');

    const changingChars = ['T', 'D', 'X', 'R', 'S', 'Ø', '0', '!', '?'];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setChangingLetter(changingChars[Math.floor(Math.random() * changingChars.length)]);
        }, 1200);
        return () => clearInterval(intervalId);
    }, []);

    const jump = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            setGlitchFlash(true);
            setCurrentDecodingText(prev => `[DECODIFICADO] node_${score+1}.. 0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
            setTimeout(() => setGlitchFlash(false), 50);
            setTimeout(() => setIsJumping(false), 450);
        } else if (!gameStarted || gameOver) {
            resetGame();
        }
    };

    const resetGame = () => {
        setScore(0);
        setObstaclePos(800);
        setGameOver(false);
        setGameStarted(true);
        setCurrentDecodingText("INICIANDO_SINTONÍA..");
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
                    return pos - (window.innerWidth < 600 ? 12 : 18);
                });
            }, 20);
        }
        return () => clearInterval(timer);
    }, [gameStarted, gameOver, isJumping]);

    return (
        <div className="main-container">
            <Head>
                <title>PRAKXIS | Comunicación Científica</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap');
                body { 
                    margin: 0; padding: 0; background: #000; 
                    font-family: 'Chakra Petch', sans-serif !important; 
                    overflow-x: hidden; color: #fff;
                }
                h1, h2, h3, h4, p, a, span { color: #ffffff !important; font-family: 'Chakra Petch', sans-serif !important;}
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                <a href="#contacto" className="top-contact-btn">[ CONTACTO ]</a>
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" />
                </div>
                <div className="sub-header-text">
                    <h2 className="tagline">NARRATIVAS VISUALES CON RIGOR CIENTÍFICO.</h2>
                    <p className="px-code">[PX] ——— C<span className="changing-char">{changingLetter}</span>.</p>
                </div>
            </header>

            <main className="main-content">
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
                                <span className="tit">Libro historias de vida de mujeres sindicalistas</span>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="section-block">
                    <div className="section-header"><span className="numb">02</span><h3>Diseño Editorial</h3></div>
                    <div className="editorial-box">
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="editorial-preview">
                            <img src="/images/prensa/preview-portfolio.jpg" className="dossier-img" />
                        </a>
                        <a href="/docs/diseno/portfolio.pdf" target="_blank" className="full-btn">ABRIR_DOSIER.RAW [PDF]</a>
                    </div>
                </section>

                <section id="contacto" className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Contacto</h3></div>
                    <div className="contact-clean">
                        <a href="mailto:contacto@prakxis.cl" className="c-val">contacto@prakxis.cl</a>
                        <a href="#" className="contact-btn">[ ENVIAR MENSAJE ]</a>
                    </div>
                </section>

                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Mode_v3.1</h3></div>
                    <div className={`game-area ${glitchFlash ? 'glitch-flash' : ''}`} onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA DECODIFICAR DATOS</div>}
                        {gameOver && <div className="game-overlay">SYSTEM_FAILURE [PULSA]</div>}
                        <div className="score-board">REBOOTS: {score}</div>
                        <div className={`agent-hash ${isJumping ? 'jumping' : ''}`}>#</div>
                        <div className="obstacle noise-block" style={{ left: `${obstaclePos}px` }}></div>
                        <div className="ground"></div>
                    </div>
                    <div className="decoding-log">
                        <p className="decoding-tit">DECODIFICANDO SECUENCIA:</p>
                        <p className="decoding-text">{currentDecodingText}</p>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; }
                
                /* PRESENCIA DE FONDO REFORZADA */
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: 
                        radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.95) 85%), 
                        url("/images/fondo-prakxis.jpg"); 
                    background-size: cover; 
                    background-position: center; 
                    background-attachment: fixed; /* Efecto Parallax */
                    opacity: 0.85;
                }

                .grain-overlay { 
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); 
                    opacity: 0.18; z-index: 999; pointer-events: none; 
                }

                .site-header { padding: 80px 20px 40px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 280px; filter: invert(100%); transition: 0.3s; }
                .main-logo:hover { filter: invert(0%) sepia(1) hue-rotate(180deg); }
                .tagline { font-size: 1.2rem; font-weight: 700; letter-spacing: 5px; line-height: 1.4; margin-top: 20px;}
                .px-code { font-size: 0.9rem; letter-spacing: 4px; margin-top: 10px; opacity: 0.8;}
                .changing-char { color: #ff6600 !important; font-weight: 800; }
                
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.6rem; letter-spacing: 2px; }
                
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 120px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 10px; margin-bottom: 40px; }
                
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 25px; background: rgba(0,0,0,0.6); transition: 0.3s; margin-bottom: 15px; }
                .press-item:hover { border-color: #fff; background: rgba(0,0,0,0.9); }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); transition: 0.4s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                .tit { font-size: 1.2rem; display: block; margin-top: 5px;}
                
                .editorial-box { background: rgba(0,0,0,0.5); padding: 20px; border: 1px solid rgba(255,255,255,0.1); }
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.6; transition: 0.5s; }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; }
                .full-btn { display: block; border: 1px solid #fff; text-align: center; padding: 15px; margin-top: 20px; font-size: 0.8rem; letter-spacing: 2px; font-weight: 700;}

                /* JUEGO MEJORADO */
                .game-area { width: 100%; height: 160px; background: rgba(0,0,0,0.8); border: 2px solid #fff; position: relative; overflow: hidden; transition: background 0.05s;}
                .game-area.glitch-flash { background: #fff !important; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.7rem; letter-spacing: 4px; }
                .agent-hash { position: absolute; bottom: 15px; left: 40px; font-size: 2.5rem; font-weight: 900; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); z-index: 5;}
                .agent-hash.jumping { bottom: 90px; }
                .noise-block { width: 15px; height: 35px; border: 1px solid #fff; background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ec/TV_static.gif"); position: absolute; bottom: 15px; }
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 15px; }
                .decoding-log { margin-top: 20px; text-align: center; }
                .decoding-text { font-family: monospace !important; font-size: 0.9rem; color: #ff6600 !important; text-shadow: 1px 1px #000; }

                .contact-clean { text-align: center; padding: 60px 20px; border: 1px solid #fff; background: rgba(0,0,0,0.7); }
                .c-val { font-size: 1.6rem; font-weight: 700; letter-spacing: 2px; display: block; margin-bottom: 20px;}
                .contact-btn { display: inline-block; background: #fff; color: #000 !important; padding: 15px 30px; font-weight: 800; font-size: 0.8rem; letter-spacing: 1px;}
                
                .footer { padding: 60px; text-align: center; opacity: 0.3; font-size: 0.6rem; letter-spacing: 2px; position: relative; z-index: 100;}
            `}</style>
        </div>
    );
};

export default IndexPrakxisDefinitivo;