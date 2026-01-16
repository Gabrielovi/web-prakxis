import React from 'react';
import Head from 'next/head';

const IndexBusiness = () => {
    const colors = {
        bgDark: '#0B0C10',
        bgLight: '#FFFFFF',
        bgSec: '#F4F7F6',
        textDark: '#1F2833',
        textLight: '#C5C6C7',
        neon: '#45A29E', 
        accent: '#66FCF1',
        border: '#E1E4E8'
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    const documentos = [
        { tipo: "Documento", titulo: "Ingmar Bergman", link: "/docs/INGMAR_BERGMAN.pdf" },
        { tipo: "Manifiesto", titulo: "El arte de los ruidos - Luigi Russolo", link: "/docs/Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
    ];

    return (
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
            
            <Head>
                <title>PRAKXIS | Narrativas Visuales y Comunicación Científica</title>
                <meta name="description" content="Agencia especializada en comunicación científica, diseño y producción audiovisual en La Araucanía. Conectamos la ciencia con la audiencia." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="PRAKXIS | Ciencia que conecta" />
                <meta property="og:description" content="Narrativas visuales con rigor científico desde Temuco, Chile." />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* NAV REPARADA - AJUSTE MÓVIL SEGURO */}
            <nav className="navbar-custom">
                <div className="nav-container">
                    <span className="brand-text">PRAKXIS</span>
                    <div className="nav-links">
                        <a href="#prensa">Prensa</a>
                        <a href="#diseno">Diseño</a>
                        <a href="#audiovisual">Audiovisual</a>
                        <a href="#contact" className="btn-conectemos">Contacto</a>
                    </div>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p className="hero-subtitle">Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. PRENSA */}
                <section id="prensa" style={{ padding: '40px 20px', maxWidth: '1150px', margin: '0 auto' }}>
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="scroll-horizontal scroll-custom">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-prensa-scroll">
                                <div className="card-img-container">
                                    <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"; }} />
                                </div>
                                <div style={{ padding: '15px' }}>
                                    <small className="medio-tag">{nota.medio}</small>
                                    <h3 className="nota-titulo">{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. DISEÑO */}
                <section id="diseno" style={{ padding: '60px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Diseño y Visualización</h2>
                        <div className="placeholder-diseno" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1551288049-bbbda5366d7a?auto=format&fit=crop&w=1200&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                             <p style={{ letterSpacing: '2px', fontSize: '13px', fontWeight: 'bold' }}>PORTAFOLIO EN DESARROLLO</p>
                        </div>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '60px 20px' }}>
                    <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
                        <h2 className="section-title">Producción Audiovisual</h2>
                        <div className="scroll-horizontal scroll-custom">
                            {videosAudiovisual.map(id => (
                                <div key={id} className="video-card">
                                    <div className="ratio-container">
                                        <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. REPOSITORIO (AL FINAL) */}
                <section id="repositorio" style={{ padding: '60px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Repositorio</h2>
                        <div className="repo-grid">
                            {documentos.map((doc, i) => (
                                <a key={i} href={doc.link} download className="doc-item">
                                    <div style={{ fontSize: '20px' }}>📄</div>
                                    <div>
                                        <span className="doc-tipo">{doc.tipo}</span>
                                        <p className="doc-titulo">{doc.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '60px 20px', backgroundColor: colors.bgDark }}>
                    <div className="contact-form-container">
                        <h3 className="contact-title">Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Tu Nombre" required className="form-input" />
                            <input type="email" name="email" placeholder="Tu Email" required className="form-input" />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required className="form-input"></textarea>
                            <button type="submit" className="submit-btn">Enviar Mensaje</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '30px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                <p style={{ fontSize: '10px', opacity: 0.4 }}>© 2026 PRAKXIS | SCIENCE & NARRATIVES</p>
            </footer>

            <style jsx>{`
                .navbar-custom { background-color: ${colors.bgDark}; padding: 12px 10px; position: sticky; top: 0; z-index: 1000; width: 100%; border-bottom: 1px solid #1f2833; }
                .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .brand-text { color: white; font-weight: 900; font-size: 1rem; letter-spacing: 1px; }
                .nav-links { display: flex; gap: 6px; align-items: center; }
                .nav-links a { color: ${colors.textLight}; text-decoration: none; font-size: 9px; font-weight: 500; text-transform: uppercase; }
                .btn-conectemos { background-color: ${colors.accent}; color: ${colors.bgDark} !important; padding: 4px 8px; border-radius: 12px; font-weight: bold; }
                
                .hero-title { font-size: clamp(2rem, 8vw, 4rem); font-weight: 900; color: ${colors.accent}; letter-spacing: -1px; }
                .hero-subtitle { font-size: 1rem; opacity: 0.8; padding: 0 10px; }
                
                .section-title { font-size: 1.3rem; margin-bottom: 20px; border-left: 4px solid ${colors.accent}; padding-left: 12px; font-weight: 700; text-transform: uppercase; }

                .scroll-horizontal { display: flex; overflow-x: auto; gap: 15px; padding-bottom: 15px; -webkit-overflow-scrolling: touch; width: 100%; }
                .card-prensa-scroll { min-width: 78vw; max-width: 78vw; background: white; border-radius: 12px; text-decoration: none; overflow: hidden; border: 1px solid ${colors.border}; flex-shrink: 0; }
                .card-img-container { height: 140px; overflow: hidden; }
                .card-img-container img { width: 100%; height: 100%; object-fit: cover; }
                .medio-tag { color: ${colors.neon}; font-weight: 800; text-transform: uppercase; font-size: 9px; }
                .nota-titulo { color: ${colors.textDark}; font-size: 0.9rem; margin-top: 5px; line-height: 1.3; font-weight: 600; }

                .repo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; }
                .doc-item { background: white; padding: 12px; border-radius: 10px; display: flex; align-items: center; gap: 12px; text-decoration: none; border: 1px solid ${colors.border}; transition: 0.2s; }
                .doc-item:hover { border-color: ${colors.accent}; transform: translateY(-2px); }
                .doc-tipo { font-size: 9px; font-weight: 800; color: ${colors.neon}; text-transform: uppercase; }
                .doc-titulo { color: ${colors.textDark}; font-size: 13px; margin: 0; font-weight: 500; line-height: 1.2; }

                .video-card { min-width: 85vw; border-radius: 12px; overflow: hidden; background: black; flex-shrink: 0; }
                
                @media (min-width: 768px) {
                    .card-prensa-scroll { min-width: 320px; max-width: 320px; }
                    .video-card { min-width: 600px; }
                    .nav-links { gap: 15px; }
                    .nav-links a { font-size: 11px; }
                    .brand-text { font-size: 1.3rem; letter-spacing: 2px; }
                }

                .ratio-container { position: relative; padding-bottom: 56.25%; }
                .ratio-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }
                .placeholder-diseno { height: 180px; border-radius: 15px; display: flex; align-items: center; justify-content: center; border: 1px solid ${colors.border}; }

                .contact-form-container { max-width: 500px; margin: 0 auto; padding: 25px; background: white; border-radius: 20px; }
                .contact-title { text-align: center; color: ${colors.bgDark}; font-weight: 800; margin-bottom: 20px; font-size: 1.6rem; }
                .form-input { width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid #eee; border-radius: 10px; background: #f8fafa; font-size: 16px; }
                .submit-btn { width: 100%; padding: 14px; background: ${colors.accent}; border: none; border-radius: 25px; font-weight: bold; cursor: pointer; }

                .scroll-custom::-webkit-scrollbar { height: 3px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: ${colors.accent}; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;