import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const IndexPrakxisDefinitivo = () => {
    // --- LÓGICA JUEGO "HASH KERNEL v4.0 - PRAKXIS LOOP" ---
    const [gameStarted, setGameStarted] = useState(false);
    const [score, setScore] = useState(0);
    const [isJumping, setIsJumping] = useState(false);
    const [obstaclePos, setObstaclePos] = useState(800);
    const [gameOver, setGameOver] = useState(false);
    const [glitchFlash, setGlitchFlash] = useState(false);

    // Obstáculos Secuenciales: P R A K X I S
    const prakxisLeap = ["P", "R", "A", "K", "X", "I", "S"];
    // Usamos useRef para mantener el índice del obstáculo actual sin re-renderizar
    const currentObstacleIndex = useRef(0);
    const [currentLetter, setCurrentLetter] = useState(prakxisLeap[0]);

    // Texto de decodificación y Logs Técnicos
    const [currentDecodingText, setCurrentDecodingText] = useState("ADDR: 0x0000...");
    const sysLogs = [
        "> DECODIFICANDO_HUELLA_DIGITAL...",
        "> BUSCANDO_LETRAS... secuencial_v1.. OK",
        "> RECONSTRUYENDO_MATERIA_WEB...",
        "> PRAKXIS_CORE_v4.0.loop(GRNK_LAB);",
    ];

    // Lógica para cambiar la letra aleatoria en el header ('COT.')
    const changingChars = ['T', 'D', 'X', 'R', 'S', 'Ø', '0', '!', '?'];
    const [changingLetter, setChangingLetter] = useState('O');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setChangingLetter(changingChars[Math.floor(Math.random() * changingChars.length)]);
        }, 1200);
        return () => clearInterval(intervalId);
    }, []);

    // Lógica del juego v4.0 (Símbolo # y Letras PRAKXIS Loop)
    const jump = (e) => {
        if (e && e.cancelable) e.preventDefault();
        if (!isJumping && gameStarted && !gameOver) {
            setIsJumping(true);
            setGlitchFlash(true); // Activa flash #fff extremadamente rápido
            
            // Simular decodificación técnica al saltar
            setCurrentDecodingText(prev => `[DECODIFICADO] fonema_${currentLetter}.. 0x${Math.random().toString(16).substring(2, 6).toUpperCase()}`);

            // Temporizadores para efectos visuales
            setTimeout(() => setGlitchFlash(false), 50); // Flash muy rápido
            setTimeout(() => setIsJumping(false), 450); // Duración salto
            
        } else if (!gameStarted || gameOver) {
            resetGame();
        }
    };

    const resetGame = () => {
        setScore(0);
        currentObstacleIndex.current = 0; // Reset índice loop
        setCurrentLetter(prakxisLeap[0]);
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
                        // Salto exitoso: Avanzar score y SIGUIENTE LETRA
                        setScore(s => s + 1);
                        
                        // Lógica del Loop PRAKXIS
                        currentObstacleIndex.current = (currentObstacleIndex.current + 1) % prakxisLeap.length;
                        setCurrentLetter(prakxisLeap[currentObstacleIndex.current]);
                        
                        return 800; // Reset posición obstáculo
                    }
                    if (pos > 10 && pos < 50 && !isJumping) {
                        setGameOver(true);
                    }
                    return pos - (window.innerWidth < 600 ? 12 : 18); // Velocidad brutalista
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
                body { margin: 0; padding: 0; background: #000; font-family: 'Chakra Petch', sans-serif !important; overflow-x: hidden; color: #fff;}
                h1, h2, h3, h4, p, a, span { color: #ffffff !important; text-decoration: none; font-family: 'Chakra Petch', sans-serif !important;}
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
                {/* 01. PRENSA AGRANDADA */}
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

                {/* 03. AUDIOVISUAL CON RUIDO */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">03</span><h3>Audiovisual</h3></div>
                    <div className="vimeo-stack">
                        <div className="video-glitch-wrapper">
                            <div className="video-noise-overlay"></div>
                            <div className="vimeo-container"><iframe src="https://player.vimeo.com/video/1156706044?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
                        </div>
                        <div className="video-glitch-wrapper">
                            <div className="video-noise-overlay"></div>
                            <div className="vimeo-container"><iframe src="https://player.vimeo.com/video/1156706575?badge=0" frameBorder="0" allow="autoplay; fullscreen"></iframe></div>
                        </div>
                    </div>
                </section>

                {/* 04. CONTACTO - BOTÓN MEJORADO */}
                <section id="contacto" className="section-block">
                    <div className="section-header"><span className="numb">04</span><h3>Contacto</h3></div>
                    <div className="contact-clean">
                        <a href="mailto:contacto@prakxis.cl" className="c-val">contacto@prakxis.cl</a>
                        <p style={{ marginTop: '10px', opacity: 0.5, fontSize: '0.8rem' }}>TEMUCO / DISPONIBLE_2026</p>
                        {/* Botón más pequeño y acorde */}
                        <a href="#" className="contact-btn">[ ENVIAR MENSAJE ]</a>
                    </div>
                </section>

                {/* 0.5 JUEGO HASH KERNEL v4.0 (PRAKXIS LOOP sec) */}
                <section className="section-block">
                    <div className="section-header"><span className="numb">0.5</span><h3>Kernel_Mode_v4.0</h3></div>
                    <div className={`game-area ${glitchFlash ? 'glitch-flash' : ''}`} onTouchStart={jump} onClick={jump}>
                        {!gameStarted && <div className="game-overlay">PULSA PARA DECODIFICAR DATOS</div>}
                        {gameOver && <div className="game-overlay">SYSTEM_FAILURE [PULSA]</div>}
                        <div className="score-board">REBOOTS: {score}</div>
                        
                        {/* Personaje: Símbolo # Minimalista */}
                        <div className={`agent-hash ${isJumping ? 'jumping' : ''}`}>#</div>
                        
                        {/* Obstáculo: Letras PRAKXIS secuenciales */}
                        <div className="obstacle prakxis-letter" style={{ left: `${obstaclePos}px` }}>
                            {currentLetter}
                        </div>
                        
                        <div className="ground"></div>
                    </div>
                    {/* Texto de decodificación y logs técnicos formateados */}
                    <div className="decoding-log">
                        <p className="decoding-tit">DECODIFICANDO SECUENCIA:</p>
                        <p className="decoding-text">{currentDecodingText}</p>
                    </div>
                    <div className="sys-logs">
                        {sysLogs.map((log, i) => <p key={i}>{log}</p>)}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>© 2026 PRAKXIS_CORE_SYSTEM // ANALOG_GRAIN_v6.0</p>
            </footer>

            <style jsx>{`
                .main-container { min-height: 100vh; position: relative; background: #000; overflow-x: hidden; }
                .main-container::before {
                    content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
                    background-image: radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.98) 100%), url("/images/fondo-prakxis.jpg"); 
                    background-size: cover; background-position: center; background-attachment: fixed;
                }
                .grain-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_processing_grain_texture.png"); opacity: 0.12; z-index: 999; pointer-events: none; }
                .site-header { padding: 80px 20px 40px; text-align: center; position: relative; z-index: 100; }
                .main-logo { width: 100%; max-width: 280px; filter: invert(100%); transition: 0.3s; }
                .main-logo:hover { filter: invert(0%) sepia(1) hue-rotate(180deg); }
                .tagline { font-size: 1.2rem; font-weight: 700; letter-spacing: 5px; line-height: 1.4; }
                .changing-char { color: #ff6600 !important; font-weight: 800; animation: glitchBlinkHeader 0.3s infinite; }
                
                .top-contact-btn { position: absolute; top: 20px; right: 20px; border: 1px solid #fff; padding: 10px 20px; font-size: 0.6rem; letter-spacing: 2px; }
                
                .main-content { max-width: 800px; margin: 0 auto; padding: 0 20px 100px; position: relative; z-index: 100; }
                .section-block { margin-bottom: 100px; }
                .section-header { display: flex; align-items: center; gap: 15px; border-bottom: 1px solid #fff; padding-bottom: 10px; margin-bottom: 40px; }
                .numb { font-size: 0.7rem; opacity: 0.5; }

                /* PRENSA AGRANDADA */
                .press-item { display: flex; gap: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 25px; background: rgba(0,0,0,0.5); transition: 0.3s; margin-bottom: 15px; width: 100%; box-sizing: border-box; }
                .press-item:hover { border-color: #fff; background: #000; }
                .press-thumb { width: 100px; height: 100px; object-fit: cover; filter: grayscale(1); transition: 0.4s; }
                .press-item:hover .press-thumb { filter: grayscale(0); }
                .tit { font-size: 1.2rem; line-height: 1.4; }
                
                .dossier-img { width: 100%; filter: grayscale(1); opacity: 0.6; transition: 0.5s; border: 1px solid rgba(255,255,255,0.1); }
                .editorial-preview:hover .dossier-img { filter: grayscale(0); opacity: 1; border-color: #fff; }
                .full-btn { display: block; border: 1px solid #fff; text-align: center; padding: 15px; margin-top: 10px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;}
                
                /* AUDIOVISUAL CON MÁSCARA */
                .vimeo-stack { display: flex; flex-direction: column; gap: 20px; }
                .video-glitch-wrapper { position: relative; border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
                .video-noise-overlay { 
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                    background-image: url("https://upload.wikimedia.org/wikipedia/commons/e/ec/TV_static.gif"); 
                    opacity: 0.15; z-index: 5; pointer-events: none; transition: 0.4s;
                }
                .vimeo-container { position: relative; padding-bottom: 56.25%; height: 0; }
                .vimeo-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .video-glitch-wrapper:hover iframe { filter: grayscale(0); }

                /* JUEGO HASH KERNEL v4.0 (PRAKXIS LOOP sec) */
                .game-area { width: 100%; height: 160px; background: rgba(0,0,0,0.8); border: 2px solid #fff; position: relative; overflow: hidden; transition: background 0.05s;}
                .game-area.glitch-flash { background: #fff !important; }
                .game-overlay { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000; z-index: 10; font-size: 0.7rem; letter-spacing: 4px; text-align: center; text-transform: uppercase; }
                .score-board { position: absolute; top: 10px; left: 10px; font-size: 0.6rem; opacity: 0.4; letter-spacing: 1px; font-family: monospace; }
                
                /* Personaje: # Minimalista */
                .agent-hash { position: absolute; bottom: 15px; left: 40px; font-size: 2.5rem; font-weight: 900; color: #fff; transition: bottom 0.4s cubic-bezier(0.5, 0, 0.5, 1); z-index: 5;}
                .agent-hash.jumping { bottom: 90px; animation: hashVibrate 0.1s infinite; }
                
                /* Obstáculo: Letras PRAKXIS SECUENCIALES */
                .obstacle.prakxis-letter { 
                    width: auto; height: auto; border: 2px solid #fff; 
                    color: #fff; background: rgba(0,0,0,0.9);
                    position: absolute; bottom: 15px; z-index: 5;
                    font-size: 1.4rem; font-weight: 900; padding: 4px 10px;
                    letter-spacing: 1px; font-family: 'Chakra Petch', sans-serif !important;
                }
                .ground { width: 100%; height: 1px; background: #fff; position: absolute; bottom: 15px; }

                .decoding-log { margin-top: 15px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;}
                .decoding-tit { font-size: 0.6rem; color: #fff; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 5px; }
                .decoding-text { font-size: 0.8rem; font-family: monospace !important; font-weight: 700; color: #fff; background: rgba(255,255,255,0.05); padding: 5px 10px; text-shadow: 1px 1px #ff0000, -1px -1px #0000ff; animation: blink 0.3s infinite;}
                .sys-logs { font-size: 0.55rem; color: #fff; opacity: 0.25; font-family: monospace !important; text-align: center; margin-top: 10px; line-height: 1.5;}

                @keyframes blink { 0% { opacity: 0.7; } 50% { opacity: 1; } 100% { opacity: 0.9; } }
                @keyframes hashVibrate { 0% { transform: translateX(-1px); } 50% { transform: translateX(1px); } 100% { transform: translateX(0); } }
                @keyframes glitchBlinkHeader { 0% { opacity: 1; transform: translateX(-1px);} 20% { opacity: 0.5; } 50% { opacity: 1; transform: translateX(1px);} 80% { opacity: 0.7; } 100% { opacity: 1; } }

                /* CONTACTO - AJUSTE BOTÓN MÁS PEQUEÑO Y ACORDE */
                .contact-clean { text-align: center; padding: 60px 20px; border: 1px solid #fff; background: rgba(0,0,0,0.5); }
                .c-val { font-size: 1.6rem; font-weight: 700; letter-spacing: 2px; }
                .contact-btn { 
                    display: inline-block; background: #fff; color: #000 !important; 
                    padding: 10px 20px; /* Padding más equilibrado y pequeño */
                    font-weight: 700; margin-top: 20px; text-transform: uppercase; 
                    letter-spacing: 1px; font-size: 0.65rem; /* Fuente más pequeña y acorde */
                }
                .footer { padding: 60px; text-align: center; opacity: 0.3; font-size: 0.6rem; letter-spacing: 2px;}
                
                @media (min-width: 600px) {
                    .main-logo { max-width: 400px; }
                    .tit { font-size: 1.25rem; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisDefinitivo;