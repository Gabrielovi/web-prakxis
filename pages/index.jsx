import React from 'react';
import Head from 'next/head';

const IndexBusiness = () => {
    const colors = {
        bgMain: '#0D0D0D',    
        bgSection: '#1A1B1E', 
        bgCard: '#25262B',    
        textMain: '#FFFFFF',  
        textMuted: '#C1C2C5', 
        accent: '#FFFB00',    
        border: '#373A40'     
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    const documentos = [
        { tipo: "Documento", titulo: "Ingmar Bergman", link: "/docs/INGMAR_BERGMAN.pdf" },
        { tipo: "Manifiesto", titulo: "El arte de los ruidos - Luigi Russolo", link: "/docs/Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
    ];

    return (
        <div style={{ backgroundColor: colors.bgMain, color: colors.textMain, minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* NAV COMPLETA */}
            <nav style={{ padding: '15px 20px', backgroundColor: colors.bgMain, borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: 'white' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: colors.textMuted, textDecoration: 'none', fontSize: '11px' }}>PRENSA</a>
                    <a href="#diseno" style={{ color: colors.textMuted, textDecoration: 'none', fontSize: '11px' }}>DISEÑO</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: 'black', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '11px' }}>CONTACTO</a>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', margin: 0, color: colors.textMain }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textMuted, marginTop: '20px', fontSize: '1.1rem' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. PRENSA CON SCROLL EN MÓVIL */}
                <section id="prensa" style={{ padding: '60px 0', backgroundColor: colors.bgSection }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px' }}>// PRENSA</h2>
                    </div>
                    <div className="scroll-mobile">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" className="card-item">
                                <img src={nota.img} alt={nota.titulo} className="card-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                <div style={{ padding: '15px' }}>
                                    <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ fontSize: '1rem', marginTop: '8px', color: 'white', lineHeight: '1.3' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. DISEÑO */}
                <section id="diseno" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px' }}>// DISEÑO Y VISUALIZACIÓN</h2>
                        <div style={{ padding: '60px 20px', borderRadius: '12px', border: `1px dashed ${colors.border}`, color: colors.textMuted, textAlign: 'center' }}>
                            <p style={{ letterSpacing: '3px', fontSize: '12px' }}>PORTAFOLIO EN DESARROLLO</p>
                        </div>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL CON SCROLL EN MÓVIL */}
                <section id="audiovisual" style={{ padding: '60px 0', backgroundColor: colors.bgSection }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px' }}>// PRODUCCIÓN AUDIOVISUAL</h2>
                    </div>
                    <div className="scroll-mobile">
                        {videosVimeo.map(id => (
                            <div key={id} className="video-card">
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe 
                                        src={`https://player.vimeo.com/video/${id}`} 
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                                        frameBorder="0" allow="autoplay; fullscreen"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. REPOSITORIO */}
                <section id="repositorio" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px' }}>// REPOSITORIO</h2>
                        <div className="repo-grid">
                            {documentos.map((doc, i) => (
                                <a key={i} href={doc.link} download className="doc-item">
                                    <span style={{ fontSize: '20px' }}>📄</span>
                                    <div>
                                        <small style={{ color: colors.accent, fontWeight: 'bold' }}>{doc.tipo}</small>
                                        <p style={{ margin: 0, color: 'white', fontSize: '13px' }}>{doc.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', color: colors.textMuted, fontSize: '10px', borderTop: `1px solid ${colors.border}` }}>
                PRAKXIS SPA © 2026 | TEMUCO, CHILE
            </footer>

            <style jsx>{`
                .scroll-mobile {
                    display: flex;
                    gap: 20px;
                    overflow-x: auto;
                    padding: 0 20px 20px 20px;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                }
                .scroll-mobile::-webkit-scrollbar { display: none; }

                .card-item {
                    min-width: 280px;
                    max-width: 280px;
                    background-color: ${colors.bgCard};
                    border-radius: 12px;
                    text-decoration: none;
                    border: 1px solid ${colors.border};
                    overflow: hidden;
                    scroll-snap-align: start;
                }
                .card-img { width: 100%; height: 160px; object-fit: cover; }

                .video-card {
                    min-width: 300px;
                    max-width: 300px;
                    background-color: ${colors.bgCard};
                    padding: 8px;
                    border-radius: 12px;
                    border: 1px solid ${colors.border};
                    scroll-snap-align: start;
                }

                .repo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 15px;
                }
                .doc-item {
                    background-color: ${colors.bgCard};
                    padding: 15px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-decoration: none;
                    border: 1px solid ${colors.border};
                }

                @media (min-width: 769px) {
                    .scroll-mobile {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                        overflow-x: visible;
                        padding: 0;
                    }
                    .card-item, .video-card {
                        min-width: unset;
                        max-width: unset;
                    }
                }

                @media (max-width: 600px) {
                    h1 { font-size: 2.2rem !important; }
                }
            `}</style>
        </div>
    );
};

export default IndexBusiness;