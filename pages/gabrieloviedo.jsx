import React, { useEffect } from 'react';
import Head from 'next/head';

const GabrielOviedoArt = () => {
    const colors = {
        bgMain: '#0A0B0D',
        accent: '#00F2FF', 
        bgGlass: 'rgba(255, 255, 255, 0.01)',
        borderGlass: 'rgba(255, 255, 255, 0.08)',
        textMuted: '#888'
    };

    // LÓGICA DEL CURSOR GUÍA
    useEffect(() => {
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
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    const obras = [
        { titulo: "Obra Primigenia", tecnica: "Óleo y resina sobre tela", ano: "2025", img: "/images/art/obra1.jpg" },
        { titulo: "Estructura Sistémica", tecnica: "Arte Digital / Plotter", ano: "2026", img: "/images/art/obra2.jpg" },
        { titulo: "Intersección", tecnica: "Escultura en Acrílico", ano: "2026", img: "/images/art/obra3.jpg" },
    ];

    return (
        <div className="art-page">
            <Head>
                <title>Gabriel Oviedo | Artista Visual | PRAKXIS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* CURSORES GUÍA */}
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>

            <nav className="art-nav">
                <a href="/" className="back-link">← VOLVER A PRAKXIS</a>
                <span className="artist-name">GABRIEL OVIEDO</span>
            </nav>

            <main className="content">
                <header className="hero">
                    <h1 className="title">ART<br/><span>STUDIO</span></h1>
                    <p className="bio-short">Explorando las narrativas ocultas entre la materia y el dato.</p>
                </header>

                <section className="gallery">
                    {obras.map((obra, i) => (
                        <div key={i} className="obra-card">
                            <div className="img-holder">
                                <img src={obra.img} alt={obra.titulo} />
                            </div>
                            <div className="obra-meta">
                                <h3>{obra.titulo}</h3>
                                <p>{obra.tecnica} • {obra.ano}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <footer className="art-footer">
                    <div className="glass-contact">
                        <p>Para adquisiciones y colaboraciones</p>
                        <a href="https://wa.me/56932465215" className="art-wsp-btn">CONTACTAR POR WHATSAPP</a>
                    </div>
                </footer>
            </main>

            <style jsx>{`
                .art-page {
                    background-color: ${colors.bgMain};
                    background-image: url("/images/dark-black-cement-wall-background.jpg");
                    background-attachment: fixed; background-size: cover;
                    color: white; min-height: 100vh; font-family: 'Inter', sans-serif;
                    overflow-x: hidden;
                }
                .art-nav { padding: 40px; display: flex; justify-content: space-between; align-items: center; }
                .back-link { font-size: 10px; font-weight: 800; color: ${colors.textMuted}; text-decoration: none; letter-spacing: 1px; }
                .back-link:hover { color: ${colors.accent}; }
                .artist-name { font-weight: 900; letter-spacing: 4px; font-size: 14px; color: ${colors.accent}; }

                .hero { padding: 10vh 40px; text-align: left; }
                .title { font-size: clamp(4rem, 15vw, 10rem); font-weight: 900; line-height: 0.8; margin: 0; }
                .title span { color: transparent; -webkit-text-stroke: 1px ${colors.accent}; }
                .bio-short { margin-top: 30px; font-size: 1.2rem; max-width: 500px; font-weight: 300; color: #ccc; }

                .gallery { padding: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 60px; }
                .obra-card { background: ${colors.bgGlass}; border: 1px solid ${colors.borderGlass}; padding: 15px; transition: 0.5s ease; }
                .obra-card:hover { border-color: ${colors.accent}; transform: translateY(-5px); }
                .img-holder { height: 500px; overflow: hidden; background: #000; }
                .img-holder img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; transition: 0.7s; }
                .obra-card:hover img { opacity: 1; transform: scale(1.05); }
                .obra-meta { padding: 20px 0 10px 0; }
                .obra-meta h3 { font-size: 1.2rem; margin: 0; letter-spacing: 1px; }
                .obra-meta p { font-size: 0.8rem; color: ${colors.textMuted}; margin-top: 8px; text-transform: uppercase; }

                .art-footer { padding: 100px 40px; text-align: center; }
                .glass-contact { background: ${colors.bgGlass}; border: 1px solid ${colors.borderGlass}; padding: 60px; backdrop-filter: blur(10px); }
                .art-wsp-btn { display: inline-block; margin-top: 20px; background: ${colors.accent}; color: black; padding: 18px 35px; font-weight: 900; text-decoration: none; font-size: 12px; transition: 0.3s; }
                .art-wsp-btn:hover { background: white; transform: scale(1.05); }

                .cursor-dot { width: 6px; height: 6px; background: ${colors.accent}; position: fixed; border-radius: 50%; z-index: 9999; pointer-events: none; transform: translate(-50%, -50%); top: 0; left: 0; }
                .cursor-outline { width: 40px; height: 40px; border: 1px solid ${colors.accent}; position: fixed; border-radius: 50%; z-index: 9998; pointer-events: none; transform: translate(-50%, -50%); top: 0; left: 0; }

                @media (min-width: 769px) {
                    body { cursor: none !important; }
                    a, .obra-card { cursor: none !important; }
                }
                @media (max-width: 768px) {
                    .cursor-dot, .cursor-outline { display: none; }
                    .hero { padding: 60px 20px; }
                    .title { font-size: 5rem; }
                    .img-holder { height: 350px; }
                    body { cursor: auto !important; }
                }
            `}</style>
        </div>
    );
};

export default GabrielOviedoArt;