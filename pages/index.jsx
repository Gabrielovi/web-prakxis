import React from 'react';
import Head from 'next/head';

const IndexPrakxisPremium = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgCard: 'rgba(30, 33, 38, 0.75)', 
        textTitle: '#F3F4F6', // Blanco/Gris muy claro para títulos
        textBody: '#D1D5DB',  // Gris suave para párrafos
        accent: '#00F2FF',    // CALIPSO VIBRANTE
        border: 'rgba(255, 255, 255, 0.15)'     
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    return (
        <div style={{ 
            backgroundColor: colors.bgMain, 
            backgroundImage: 'url("/images/dark-black-cement-wall-background.jpg")', // RUTA SEGÚN CAPTURA
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            minHeight: '100vh', 
            fontFamily: 'Inter, system-ui, sans-serif'
        }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* NAVBAR COMPLETA */}
            <nav style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.9)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: '#000', padding: '7px 15px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '11px' }}>CONTACTO</a>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', fontWeight: '900', color: 'white', lineHeight: '1.1' }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* PRENSA */}
                <section id="prensa" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="horizontal-scroll">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" className="card">
                                <img src={nota.img} alt={nota.titulo} />
                                <div style={{ padding: '15px' }}>
                                    <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ fontSize: '16px', color: 'white', marginTop: '5px' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* DISEÑO - RUTA CORREGIDA SEGÚN CAPTURA */}
                <section id="diseno" style={{ padding: '60px 20px' }}>
                    <h2 className="section-title">Diseño y Visualización</h2>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ background: colors.bgCard, borderRadius: '15px', border: `1px solid ${colors.accent}`, overflow: 'hidden' }}>
                            <div style={{ padding: '30px', borderBottom: `1px solid ${colors.border}` }}>
                                <h3 style={{ color: 'white', margin: 0 }}>Portafolio PRAKXIS 2026</h3>
                                <p style={{ color: colors.textBody, fontSize: '14px', margin: '10px 0 20px 0' }}>Archivo: 30dic.pdf</p>
                                <a href="/docs/diseno/30dic.pdf" target="_blank" style={{ background: colors.accent, color: 'black', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>Abrir Portafolio Completo</a>
                            </div>
                            <div className="preview-container">
                                <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="600px" style={{ border: 'none' }}></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Producción Audiovisual</h2>
                    <div className="horizontal-scroll">
                        {videosVimeo.map(id => (
                            <div key={id} className="video-card">
                                <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-link { color: ${colors.textBody}; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
                .section-title { font-size: 1.8rem; color: ${colors.textTitle}; margin: 0 0 30px 25px; font-weight: 800; border-left: 5px solid ${colors.accent}; padding-left: 15px; }
                
                .horizontal-scroll { display: flex; gap: 20px; overflow-x: auto; padding: 0 25px 30px 25px; scroll-snap-type: x mandatory; }
                .horizontal-scroll::-webkit-scrollbar { display: none; }
                
                .card { min-width: 300px; background: ${colors.bgCard}; border-radius: 12px; border: 1px solid ${colors.border}; overflow: hidden; text-decoration: none; scroll-snap-align: start; }
                .card img { width: 100%; height: 180px; object-fit: cover; }
                
                .video-card { min-width: 320px; height: 180px; background: black; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; scroll-snap-align: start; }

                @media (min-width: 900px) {
                    .horizontal-scroll { display: grid; grid-template-columns: 1fr 1fr; max-width: 1100px; margin: 0 auto; padding: 0; gap: 30px; }
                    .section-title { margin-left: auto; margin-right: auto; max-width: 1100px; }
                }
                
                @media (max-width: 600px) {
                    .preview-container { display: none; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisPremium;