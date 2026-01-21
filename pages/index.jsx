import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const colors = {
        bgMain: '#0A0B0D',    // Negro profundo
        bgSection: '#14161A', // Gris carbón
        bgCard: '#1E2126',    // Gris acero
        textMain: '#FFFFFF',  
        textLight: '#B0B8C1', // Gris azulado claro
        accent: '#00F2FF',    // CALIPSO VIBRANTE
        border: '#2A2E35'     
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    const documentosRepo = [
        { tipo: "Documento", titulo: "Ingmar Bergman", link: "/docs/INGMAR_BERGMAN.pdf" },
        { tipo: "Manifiesto", titulo: "El arte de los ruidos - Luigi Russolo", link: "/docs/Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
    ];

    return (
        <div style={{ backgroundColor: colors.bgMain, color: colors.textMain, minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif', margin: 0 }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* NAVBAR COMPLETA */}
            <nav style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, backgroundColor: 'rgba(10,11,13,0.95)', zIndex: 1000, backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.1rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: '#000', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '10px' }}>CONTACTO</a>
                </div>
            </nav>

            <main>
                {/* HERO SECTION */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 4.5rem)', fontWeight: '900', margin: 0, lineHeight: 1.1 }}>
                        <span style={{ color: colors.textMain }}>Ciencia que</span> <br/>
                        <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textLight, opacity: 0.8, marginTop: '20px', fontSize: '1.1rem', maxWidth: '600px', margin: '20px auto' }}>Narrativas visuales con rigor científico desde la Araucanía.</p>
                </section>

                {/* 1. SECCIÓN PRENSA (Scroll Horizontal en móvil) */}
                <section id="prensa" style={{ padding: '60px 0', backgroundColor: colors.bgSection }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                        <h2 className="section-title">Reportajes de Prensa</h2>
                    </div>
                    <div className="horizontal-scroll">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card">
                                <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                <div style={{ padding: '15px' }}>
                                    <small style={{ color: colors.accent, fontWeight: '800' }}>{nota.medio}</small>
                                    <h3 style={{ fontSize: '15px', color: 'white', marginTop: '5px', lineHeight: '1.3' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. SECCIÓN DISEÑO (Con tu PDF 30dic.pdf) */}
                <section id="diseno" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Diseño y Visualización</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <a href="/docs/30dic.pdf" target="_blank" className="repo-item" style={{ border: `1px solid ${colors.accent}` }}>
                                <div style={{ fontSize: '30px' }}>🎨</div>
                                <div>
                                    <small style={{ color: colors.accent, fontWeight: '800' }}>PUBLICACIÓN EDITORIAL</small>
                                    <h3 style={{ fontSize: '16px', color: 'white', margin: '5px 0' }}>Portafolio de Diseño Prakxis</h3>
                                    <p style={{ color: colors.textLight, fontSize: '12px', margin: 0 }}>Click para abrir archivo 30dic.pdf</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3. SECCIÓN AUDIOVISUAL (Scroll Horizontal en móvil) */}
                <section id="audiovisual" style={{ padding: '60px 0', backgroundColor: colors.bgSection }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                        <h2 className="section-title">Producción Audiovisual</h2>
                    </div>
                    <div className="horizontal-scroll">
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

                {/* 4. REPOSITORIO */}
                <section id="repositorio" style={{ padding: '80px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Repositorio</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                            {documentosRepo.map((doc, i) => (
                                <a key={i} href={doc.link} download className="repo-item">
                                    <span style={{ fontSize: '20px' }}>📁</span>
                                    <div>
                                        <small style={{ color: colors.accent, fontWeight: 'bold' }}>{doc.tipo}</small>
                                        <p style={{ margin: 0, fontSize: '14px', color: 'white' }}>{doc.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '80px 20px', backgroundColor: colors.bgSection, textAlign: 'center' }}>
                    <h2 className="section-title" style={{ margin: '0 auto 30px auto', display: 'inline-block' }}>Conectemos</h2>
                    <form action="https://api.web3forms.com/submit" method="POST" style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                        <input type="text" name="name" placeholder="Nombre" required style={{ padding: '12px', borderRadius: '8px', border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, color: 'white' }} />
                        <input type="email" name="email" placeholder="Email" required style={{ padding: '12px', borderRadius: '8px', border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, color: 'white' }} />
                        <textarea name="message" placeholder="Mensaje" rows="4" required style={{ padding: '12px', borderRadius: '8px', border: `1px solid ${colors.border}`, backgroundColor: colors.bgMain, color: 'white' }}></textarea>
                        <button type="submit" style={{ backgroundColor: colors.accent, color: 'black', padding: '15px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>ENVIAR</button>
                    </form>
                </section>
            </main>

            <footer style={{ padding: '40px 20px', textAlign: 'center', color: colors.textLight, fontSize: '11px', borderTop: `1px solid ${colors.border}` }}>
                PRAKXIS SPA © 2026 | CIENCIA & NARRATIVAS VISUALES
            </footer>

            <style jsx>{`
                .nav-link { color: ${colors.textLight}; text-decoration: none; fontSize: 10px; font-weight: 600; text-transform: uppercase; }
                .section-title { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 25px; border-left: 3px solid ${colors.accent}; padding-left: 12px; font-weight: 700; text-align: left; }
                
                .horizontal-scroll { display: flex; gap: 20px; overflow-x: auto; padding: 0 25px 25px 25px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
                .horizontal-scroll::-webkit-scrollbar { display: none; }
                
                .card { min-width: 280px; background: ${colors.bgCard}; border-radius: 12px; text-decoration: none; overflow: hidden; border: 1px solid ${colors.border}; scroll-snap-align: start; }
                .card img { width: 100%; height: 160px; object-fit: cover; }
                
                .video-card { min-width: 300px; height: 175px; background: #000; border-radius: 12px; overflow: hidden; border: 1px solid ${colors.border}; scroll-snap-align: start; }
                
                .repo-item { background: ${colors.bgCard}; padding: 18px; border-radius: 12px; display: flex; gap: 15px; text-decoration: none; border: 1px solid ${colors.border}; transition: 0.3s; }
                .repo-item:hover { border-color: ${colors.accent}; }

                @media (min-width: 900px) {
                    .horizontal-scroll { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); overflow-x: visible; max-width: 1100px; margin: 0 auto; padding: 0; }
                    .card, .video-card { min-width: auto; }
                    .section-title { margin-left: 0; max-width: 1100px; margin: 0 auto 30px auto; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisFinal;