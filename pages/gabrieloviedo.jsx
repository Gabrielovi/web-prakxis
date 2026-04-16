import React, { useEffect, useState } from 'react';
import Head from 'next/head';

const GabrielOviedoPortfolio = () => {
    const [mounted, setMounted] = useState(false);

    const colors = {
        bgMain: '#0A0B0D',
        accent: '#00F2FF', 
        bgGlass: 'rgba(255, 255, 255, 0.02)',
        borderGlass: 'rgba(255, 255, 255, 0.1)',
        textMuted: '#888'
    };

    useEffect(() => {
        setMounted(true);
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        
        const moveCursor = (e) => {
            if (dot && outline) {
                dot.style.left = `${e.clientX}px`;
                dot.style.top = `${e.clientY}px`;
                outline.animate({
                    left: `${e.clientX}px`,
                    top: `${e.clientY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            window.addEventListener('mousemove', moveCursor);
        }
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    const videoWorks = [
        { 
            titulo: "CHRISTINE", 
            id: "233649894", 
            plataforma: "vimeo",
            desc: "Instalación audiovisual inmersiva (2016). Una búsqueda de la visualización de una epifanía donde la imagen se escucha y el sonido se visualiza." [cite: 7, 10, 11]
        },
        { 
            titulo: "PÁRATE", 
            id: "3zEj2Gs60iY", 
            plataforma: "youtube",
            desc: "Proyecto Fondart (2007) de intervención en el espacio público. Una revista callejera que disocia el mensaje publicitario del informativo." [cite: 22, 25, 27, 28]
        },
        { 
            titulo: "REFLEX", 
            id: "RPMI640h9gs", 
            plataforma: "youtube",
            desc: "Diseño audiovisual. Uso de descomposición de música, estética del error (glitch) e imágenes reactivas a la frecuencia sonora." [cite: 39, 40]
        },
    ];

    const nonServiamSeries = [
        { id: "DQME2p3FnSo", t: "Non Serviam I" },
        { id: "99k0_ar1DH0", t: "Non Serviam II" },
        { id: "7hrJhWSwD-E", t: "Non Serviam III" },
        { id: "swetz4oPooc", t: "Non Serviam IV" }
    ];

    return (
        <div className="art-page">
            <Head>
                <title>Gabriel Oviedo Pino | Portafolio de Artista</title> [cite: 1, 2]
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;900&family=Chakra+Petch:wght@300;700&display=swap" rel="stylesheet" />
            </Head>

            {mounted && (
                <><div className="cursor-dot"></div><div className="cursor-outline"></div></>
            )}

            <nav className="art-nav">
                <a href="/" className="back-link">[ VOLVER_A_PRAKXIS ]</a>
                <span className="artist-name">GABRIEL OVIEDO PINO</span> [cite: 1]
            </nav>

            <main className="content">
                <header className="hero">
                    <h1 className="title">ART<br/><span>STUDIO</span></h1>
                    <div className="bio-container">
                        <p className="bio-text">
                            Licenciado en Comunicación y realizador audiovisual. Su trayectoria se desplaza desde la imagen fija hacia la <strong>experimentación transmedia</strong>. [cite: 3]
                        </p>
                        <p className="bio-text">
                            Enfoca su práctica en la desarticulación del lenguaje mediante la integración de códigos e <strong>inteligencia artificial</strong>. [cite: 3]
                        </p>
                    </div>
                </header>

                <section className="featured-section">
                    <h2 className="section-label">PROYECTO_DESTACADO</h2>
                    <div className="ns-main-card">
                        <div className="ns-info">
                            <h3>NON SERVIAM</h3> [cite: 5]
                            <p>Instalación interactiva seleccionada por el <strong>CIICA</strong> que investiga los cruces entre la poesía fonética y sonora. [cite: 4, 5]</p>
                            <p className="ns-desc">Utiliza redes neuronales para sonificar la presencia humana en tiempo real, transformando la palabra fuera del espacio semántico. [cite: 5]</p>
                        </div>
                        <div className="series-grid">
                            {nonServiamSeries.map((vid, i) => (
                                <div key={i} className="series-item">
                                    <iframe src={`https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0`} frameBorder="0" allowFullScreen></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="gallery">
                    <h2 className="section-label">OBRA_SELECCIONADA</h2>
                    <div className="video-grid">
                        {videoWorks.map((vid, i) => (
                            <div key={i} className="obra-card">
                                <div className="video-holder">
                                    <iframe 
                                        src={vid.plataforma === 'vimeo' 
                                            ? `https://player.vimeo.com/video/${vid.id}?color=00f2ff&title=0&byline=0&portrait=0` 
                                            : `https://www.youtube.com/embed/${vid.id}?modestbranding=1&rel=0`}
                                        frameBorder="0" allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="obra-meta">
                                    <h3>{vid.titulo}</h3>
                                    <p>{vid.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="art-footer-section">
                    <div className="contact-frame">
                        <span className="email-text">contacto@prakxis.cl</span>
                        <a href="mailto:contacto@prakxis.cl" className="msg-btn">[ ENVIAR MENSAJE ]</a>
                    </div>
                    <p className="location-tag">TEMUCO, CHILE / 2026</p>
                </section>
            </main>

            <style jsx>{`
                .art-page {
                    background-color: ${colors.bgMain};
                    background-image: linear-gradient(rgba(10, 11, 13, 0.8), rgba(10, 11, 13, 0.95)), 
                                      url("/images/dark-black-cement-wall-background.jpg");
                    background-attachment: fixed; background-size: cover;
                    color: white; min-height: 100vh; font-family: 'Inter', sans-serif;
                }
                .art-nav { padding: 40px; display: flex; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
                .artist-name { font-family: 'Chakra Petch', sans-serif; letter-spacing: 4px; color: ${colors.accent}; }
                .hero { padding: 15vh 40px 10vh; }
                .title { font-size: clamp(5rem, 18vw, 12rem); font-weight: 900; line-height: 0.8; letter-spacing: -8px; }
                .title span { color: transparent; -webkit-text-stroke: 1px ${colors.accent}; }
                .bio-container { margin-top: 50px; border-left: 1px solid ${colors.accent}; padding-left: 30px; max-width: 700px; }
                .bio-text { font-size: 1.2rem; color: #ccc; line-height: 1.8; font-weight: 300; }
                .featured-section { padding: 100px 40px; background: rgba(0, 242, 255, 0.01); border-top: 1px solid ${colors.borderGlass}; }
                .ns-main-card { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
                .ns-info h3 { font-size: 2.5rem; font-weight: 900; color: ${colors.accent}; }
                .series-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                .series-item { position: relative; padding-bottom: 56.25%; border: 1px solid ${colors.borderGlass}; }
                .series-item iframe { position: absolute; width: 100%; height: 100%; }
                .gallery { padding: 100px 40px; }
                .video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 80px; }
                .video-holder { position: relative; padding-bottom: 56.25%; background: #000; }
                .video-holder iframe { position: absolute; width: 100%; height: 100%; filter: grayscale(1); transition: 0.6s; }
                .obra-card:hover iframe { filter: grayscale(0); }
                .contact-frame { border: 1px solid white; padding: 60px; display: flex; justify-content: center; align-items: center; gap: 40px; max-width: 900px; margin: 0 auto; }
                .msg-btn { background: white; color: black; padding: 15px 30px; text-decoration: none; font-weight: 900; transition: 0.3s; }
                .msg-btn:hover { background: ${colors.accent}; }
                .cursor-dot { width: 4px; height: 4px; background: ${colors.accent}; position: fixed; border-radius: 50%; z-index: 9999; pointer-events: none; transform: translate(-50%, -50%); }
                .cursor-outline { width: 30px; height: 30px; border: 1px solid ${colors.accent}; position: fixed; border-radius: 50%; z-index: 9998; pointer-events: none; transform: translate(-50%, -50%); }
                @media (max-width: 1024px) { .ns-main-card, .video-grid, .contact-frame { grid-template-columns: 1fr; flex-direction: column; } }
            `}</style>
        </div>
    );
};

export default GabrielOviedoPortfolio;