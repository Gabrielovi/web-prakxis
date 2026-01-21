import React from 'react';
import Head from 'next/head';

const IndexPrakxisDefinitivo = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgCard: 'rgba(30, 33, 38, 0.65)', // Transparencia para que respire la textura
        textTitle: '#E5E7EB', // Gris platino muy claro para títulos de sección
        textBody: '#B0B8C1',  // Gris suave para lectura
        accent: '#00F2FF',    // CALIPSO VIBRANTE
        border: 'rgba(255, 255, 255, 0.1)'     
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    return (
        <div style={{ 
            backgroundColor: colors.bgMain, 
            backgroundImage: 'url("/images/dark-black-cement-wall-background.jpg")', 
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            minHeight: '100vh', 
            fontFamily: 'Inter, system-ui, sans-serif',
            margin: 0
        }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* BARRA DE NAVEGACIÓN COMPLETA */}
            <nav style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.85)', backdropFilter: 'blur(12px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: '#000', padding: '7px 14px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '11px' }}>CONTACTO</a>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', fontWeight: '900', color: 'white', margin: 0, lineHeight: '1.1' }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', letterSpacing: '1px' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Prensa</h2>
                    <div className="scroll-wrapper">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" className="card-item">
                                <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                <div style={{ padding: '18px' }}>
                                    <small style={{ color: colors.accent, fontWeight: '800', textTransform: 'uppercase', fontSize: '10px' }}>{nota.medio}</small>
                                    <h3 style={{ fontSize: '16px', color: 'white', marginTop: '8px', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN DISEÑO - PREVIEW INTEGRADO */}
                <section id="diseno" style={{ padding: '60px 20px' }}>
                    <h2 className="section-title">Diseño y Visualización</h2>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div className="design-container">
                            <div className="design-info">
                                <h3 style={{ margin: 0, color: 'white' }}>Portafolio PRAKXIS 2026</h3>
                                <p style={{ color: colors.textBody, fontSize: '14px', marginBottom: '20px' }}>Archivo: 30dic.pdf</p>
                                <a href="/docs/30dic.pdf" target="_blank" className="btn-accent">Abrir Portafolio Completo</a>
                            </div>
                            {/* PREVIEW DEL PDF */}
                            <div className="iframe-container">
                                <iframe src="/docs/30dic.pdf#toolbar=0" width="100%" height="500px" style={{ border: 'none', borderRadius: '0 0 12px 12px' }}></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Audiovisual</h2>
                    <div className="scroll-wrapper">
                        {videosVimeo.map(id => (
                            <div key={id} className="video-card">
                                <iframe 
                                    src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0`} 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    style={{ width: '100%', height: '100%' }}
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer style={{ padding: '60px 20px', textAlign: 'center', color: colors.textBody, fontSize: '12px', borderTop: `1px solid ${colors.border}` }}>
                PRAKXIS SPA © 2026 | CIENCIA & DISEÑO
            </footer>

            <style jsx>{`
                .nav-link { color: ${colors.textBody}; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
                .section-title { font-size: 1.8rem; color: ${colors.textTitle}; margin: 0 0 30px 25px; font-weight: 800; border-left: 4px solid ${colors.accent}; padding-left: 15px; }
                
                .scroll-wrapper { display: flex; gap: 20px; overflow-x: auto; padding: 0 25px 30px 25px; scroll-snap-type: x mandatory; }
                .scroll-wrapper::-webkit-scrollbar { display: none; }
                
                .card-item { min-width: 290px; background: ${colors.bgCard}; border-radius: 12px; border: 1px solid ${colors.border}; overflow: hidden; text-decoration: none; scroll-snap-align: start; }
                .card-item img { width: 100%; height: 180px; object-fit: cover; }
                
                .design-container { background: ${colors.bgCard}; border-radius: 12px; border: 1px solid ${colors.accent}; overflow: hidden; }
                .design-info { padding: 30px; border-bottom: 1px solid ${colors.border}; }
                .btn-accent { background: ${colors.accent}; color: black; padding: 10px 20px; border-radius: 4px; font-weight: bold; text-decoration: none; display: inline-block; font-size: 13px; }
                
                .video-card { min-width: 320px; height: 180px; background: #000; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; scroll-snap-align: start; }

                @media (min-width: 900px) {
                    .scroll-wrapper { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); overflow: visible; padding: 0; max-width: 1100px; margin: 0 auto; }
                    .section-title { margin-left: auto; margin-right: auto; max-width: 1100px; }
                    .card-item, .video-card { min-width: auto; }
                }
                
                @media (max-width: 600px) {
                    .iframe-container { display: none; } /* Ocultar iframe en móvil para ahorrar datos, el botón abre el PDF */
                    .design-info { text-align: center; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisDefinitivo;