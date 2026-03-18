import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const IndexPrakxisDefinitivo = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [jumpEffect, setJumpEffect] = useState(false);

    const prakxisLeap = ["P", "R", "A", "K", "X", "I", "S"];
    const currentObstacleIndex = useRef(0);
    const [currentLetter, setCurrentLetter] = useState(prakxisLeap[0]);
    const [currentDecodingText, setCurrentDecodingText] = useState("ADDR: 0x0000...");
    const [changingLetter, setChangingLetter] = useState('O');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const chars = ['T', 'D', 'X', 'R', 'S', 'Ø', '0', '!', '?'];
            setChangingLetter(chars[Math.floor(Math.random() * chars.length)]);
        }, 1200);
        return () => clearInterval(intervalId);
    }, []);

    const jump = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            setJumpEffect(true);
            setCurrentDecodingText(`[DECODIFICADO] fonema_${currentLetter}.. 0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
            
            setTimeout(() => setJumpEffect(false), 200);
            setTimeout(() => setIsJumping(false), 500);
        } else if (!gameStarted || gameOver) {
            resetGame();
        }
    };

    const resetGame = () => {
        setScore(0);
        currentObstacleIndex.current = 0;
        setCurrentLetter(prakxisLeap[0]);
        setObstaclePos(800);
        setGameOver(false);
        setGameStarted(true);
    };

    useEffect(() => {
        let timer;
        if (gameStarted && !gameOver) {
            timer = setInterval(() => {
                setObstaclePos((pos) => {
                    if (pos < -30) {
                        setScore(s => s + 1);
                        currentObstacleIndex.current = (currentObstacleIndex.current + 1) % prakxisLeap.length;
                        setCurrentLetter(prakxisLeap[currentObstacleIndex.current]);
                        return 800;
                    }
                    if (pos > 20 && pos < 60 && !isJumping) {
                        setGameOver(true);
                    }
                    return pos - (typeof window !== 'undefined' && window.innerWidth < 600 ? 7 : 10); 
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
                body { margin: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; color: #fff; overflow-x: hidden; }
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                <div className="top-contact-btn">[ CONTACTO ]</div>
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
                            <img src="/images/prensa/ufro_salud.jpg" className="press-thumb" alt="Prensa 1" />
                            <div className="press-txt">
                                <span className="medio">Contacto Salud</span>
                                <span className="tit">UFRO presentó plataforma georreferenciada</span>
                            </div>
                        </a>
                    </div>
                </section>

                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        <div className="video-glitch-wrapper">
                            <div className="video-noise-overlay"></div>
                            <div className="vimeo-container">
                                <iframe src="https://player.vimeo.com/video/1156706044" frameBorder="0" allow="autoplay; fullscreen"></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contacto" className="section-block">
                    <div className="section-header"><span className="numb">04</span><h3>Contacto</h3></div>
                    <div className="contact-clean">
                        <span className="c-val">contacto@prakxis.cl</span>
                        <div className="contact-btn">[ ENVIAR MENSAJE ]</div>
                    </div>
                </section>

                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Mode_v4.1</h3></div>
                    <div className={`game-area ${jumpEffect ? 'game-glow' : ''}`} onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA DECODIFICAR</div>}
                        {gameOver && <div className="game-overlay">REBOOT_REQUIRED [PULSA]</div>}
                        <div className="score-board">NODOS: {score}</div>
                        <div className={`agent-hash ${isJumping ? 'jumping' : ''} ${jumpEffect ? 'active-color' : ''}`}>#</div>
                        <div className="obstacle prakxis-letter-free" style={{ left: `${obstaclePos}px` }}>{currentLetter}</div>
                        <div className="ground"></div>
                    </div>
                    <div className="decoding-log">
                        <p className="decoding-tit">DECODIFICANDO SECUENCIA:</p>
                        <p className="decoding-text">{currentDecodingText}</p>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.98) 100%), url("/images/fondo-prakxis.jpg"); 
                    background-size: cover; background-position: center; background-attachment: fixed;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.12; z-index: 999; pointer-events: none; }
                .site-header { padding: 80px 20px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 280px; filter: invert(1); }
                .main-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 100; padding-bottom: 100px; }
                .section-block { margin-bottom: 100px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 25px; background: rgba(0,0,0,0.5); margin-bottom: 15px; }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); }
                .vimeo-stack { display: flex; flex-direction: column; gap: 20px; }
                .video-glitch-wrapper { position: relative; border: 1px solid rgba(255,255,255,0.1); }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); }
                .contact-clean { text-align: center; padding: 60px 20px; border: 1px solid #fff; background: rgba(0,0,0,0.5); }
                .contact-btn { display: inline-block; background: #fff; color: #000; padding: 10px 20px; font-weight: 700; margin-top: 20px; font-size: 0.65rem; cursor: pointer; }
                .game-area { width: 100%; height: 160px; background: rgba(0,0,0,0.8); border: 2px solid #fff; position: relative; overflow: hidden; cursor: pointer; }
                .game-glow { border-color: #ff6600; box-shadow: inset 0 0 15px rgba(255,102,0,0.3); }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.7rem; letter-spacing: 3px; }
                .agent-hash { position: absolute; bottom: 15px; left: 40px; font-size: 2.5rem; font-weight: 900; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); }
                .agent-hash.jumping { bottom: 90px; }
                .active-color { color: #ff6600; }
                .obstacle { position: absolute; bottom: 15px; font-size: 1.8rem; font-weight: 900; }
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 15px; opacity: 0.5; }
                .decoding-log { margin-top: 20px; text-align: center; }
                .decoding-text { color: #ff6600; font-family: monospace; }
                .tagline { letter-spacing: 5px; }
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.6rem; letter-spacing: 2px; }
            `}</style>
        </div>
    );
};

export default IndexPrakxisDefinitivo;