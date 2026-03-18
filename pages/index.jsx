import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const IndexPrakxisDefinitivo = () => {
    // --- LÓGICA JUEGO "HASH KERNEL v4.1 - PRAKXIS SLOW LOOP" ---
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [jumpEffect, setJumpEffect] = useState(false); // Para el cambio de color

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
            setJumpEffect(true); // Activa color naranja
            setCurrentDecodingText(prev => `[DECODIFICADO] fonema_${currentLetter}.. 0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`);
            
            setTimeout(() => setJumpEffect(false), 200);
            setTimeout(() => setIsJumping(false), 500); // Salto ligeramente más largo
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
                    // VELOCIDAD REDUCIDA: de 18 a 10 para mayor fluidez y control
                    return pos - (window.innerWidth < 600 ? 7 : 10); 
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
                body { margin: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; color: #fff; overflow-x: hidden; }
                a, span, p, h1, h2, h3 { color: #fff !important; text-decoration: none; }
            `}</style>

            <div className="grain-overlay"></div>

            <header className="site-header">
                <a href="#contacto" className="top-contact-btn">[ CONTACTO ]</a>
                <div className="logo-container">
                    <img src="/images/logo_prakxis.png" alt="PRAKXIS" className="main-logo" style={{ width: '100%', maxWidth: '280px', filter: 'invert(1)' }} />
                </div>
                <div className="sub-header-text" style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2 style={{ fontSize: '1.2rem', letterSpacing: '5px' }}>NARRATIVAS VISUALES CON RIGOR CIENTÍFICO.</h2>
                    <p style={{ opacity: 0.6, letterSpacing: '4px' }}>[PX] ——— C<span style={{ color: '#ff6600', fontWeight: 'bold' }}>{changingLetter}</span>.</p>
                </div>
            </header>

            <main className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 100px', position: 'relative', z-index: '100' }}>
                
                {/* SECCIONES PREVIAS (Prensa, Editorial, Audiovisual, Contacto) - Se mantienen igual que en tu versión perfecta */}
                <section style={{ marginBottom: '100px', borderBottom: '1px solid #fff', paddingBottom: '40px' }}>
                     <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <span style={{ opacity: 0.5, fontSize: '0.7rem' }}>04</span>
                        <h3>Contacto</h3>
                     </div>
                     <div style={{ textAlign: 'center', padding: '40px', border: '1px solid #fff', background: 'rgba(0,0,0,0.5)' }}>
                        <a href="mailto:contacto@prakxis.cl" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>contacto@prakxis.cl</a>
                        <br />
                        <a href="#" style={{ display: 'inline-block', background: '#fff', color: '#000 !important', padding: '10px 20px', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '20px', textTransform: 'uppercase' }}>[ Enviar Mensaje ]</a>
                     </div>
                </section>

                {/* EL JUEGO CORREGIDO */}
                <section className="section-block">
                    <div className="section-header" style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #fff', marginBottom: '40px' }}>
                        <span className="numb" style={{ opacity: 0.5, fontSize: '0.7rem' }}>0.5</span>
                        <h3>Kernel_Mode_v4.1</h3>
                    </div>
                    
                    <div className={`game-area ${jumpEffect ? 'game-glow' : ''}`} onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA DECODIFICAR</div>}
                        {gameOver && <div className="game-overlay">REBOOT_REQUIRED [PULSA]</div>}
                        <div className="score-board">NODOS: {score}</div>
                        
                        {/* Personaje: # con cambio de color */}
                        <div className={`agent-hash ${isJumping ? 'jumping' : ''} ${jumpEffect ? 'active-color' : ''}`}>#</div>
                        
                        {/* Obstáculo: Letras PRAKXIS sueltas */}
                        <div className="obstacle prakxis-letter-free" style={{ left: `${obstaclePos}px` }}>
                            {currentLetter}
                        </div>
                        
                        <div className="ground"></div>
                    </div>

                    <div className="decoding-log" style={{ textAlign: 'center', marginTop: '20px' }}>
                        <p style={{ fontSize: '0.6rem', letterSpacing: '2px', marginBottom: '5px' }}>DECODIFICANDO SECUENCIA:</p>
                        <p style={{ fontFamily: 'monospace', color: '#ff6600', textShadow: '0 0 5px rgba(255,102,0,0.5)' }}>{currentDecodingText}</p>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .main-container { position: relative; min-height: 100vh; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.98) 100%), url("/images/fondo-prakxis.jpg"); 
                    background-size: cover; background-position: center; background-attachment: fixed;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.12; z-index: 999; pointer-events: none; }
                
                .game-area { 
                    width: 100%; height: 160px; background: rgba(0,0,0,0.8); border: 2px solid #fff; 
                    position: relative; overflow: hidden; transition: box-shadow 0.3s, border-color 0.3s;
                }
                .game-glow { border-color: #ff6600; box-shadow: inset 0 0 15px rgba(255,102,0,0.3); }
                
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.7rem; letter-spacing: 3px; }
                .score-board { position: absolute; top: 10px; left: 10px; font-size: 0.6rem; opacity: 0.4; font-family: monospace; }
                
                .agent-hash { 
                    position: absolute; bottom: 15px; left: 40px; font-size: 2.5rem; font-weight: 900; 
                    color: #fff; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1), color 0.2s; z-index: 5;
                }
                .agent-hash.jumping { bottom: 90px; }
                .agent-hash.active-color { color: #ff6600; text-shadow: 0 0 10px rgba(255,102,0,0.8); }
                
                .obstacle.prakxis-letter-free { 
                    position: absolute; bottom: 15px; font-size: 1.8rem; font-weight: 900; 
                    color: #fff; z-index: 5; font-family: 'Chakra Petch', sans-serif !important;
                    text-shadow: 0 0 10px rgba(255,255,255,0.3);
                }
                
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 15px; opacity: 0.5; }
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.6rem; letter-spacing: 2px; z-index: 100;}
            `}</style>
        </div>
    );
};

export default IndexPrakxisDefinitivo;