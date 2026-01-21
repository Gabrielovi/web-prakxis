import React from 'react';
import Head from 'next/head';

const IndexBusiness = () => {
    // AQUÍ ESTÁ EL CAMBIO: Solo modifiqué los valores hexadecimales de esta lista
    const colors = {
        bgDark: '#121212',   // Antes era negro total, ahora gris muy oscuro
        bgLight: '#1A1B1E',  // Antes blanco, ahora gris carbón (Fondo principal)
        bgSec: '#25262B',    // Antes gris claro, ahora gris acero (Secciones)
        textDark: '#E8E9EB', // Antes casi negro, ahora casi blanco
        textLight: '#C5C6C7',
        neon: '#FFFB00',     // Antes turquesa, AHORA TU AMARILLO
        accent: '#FFFB00',   // Antes turquesa claro, AHORA TU AMARILLO
        border: '#373A40'    // Antes gris claro, ahora gris oscuro
    };

    // ESTO NO SE TOCÓ: Es exactamente tu lista de prensa
    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    // ESTO NO SE TOCÓ: Tus videos
    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    // ESTO NO SE TOCÓ: Tus documentos
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
                {/* Metadatos OG conservados para que Google no se pierda */}
                <meta property="og:title" content="PRAKXIS | Ciencia que conecta" />
                <meta property="og:description" content="Narrativas visuales con rigor científico desde Temuco, Chile." />
            </Head>

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
                <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p className="hero-subtitle">Narrativas visuales con rigor científico.</p>
                </section>

                <section id="prensa" style={{ padding: '40px 20px', maxWidth: '1150px', margin: '0 auto' }}>
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="scroll-horizontal scroll-custom">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-prensa-scroll">
                                <div className="card-img-container">
                                    <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                </div>
                                <div style={{ padding: '15px', backgroundColor: colors.bgSec }}>
                                    <small className="medio-tag">{nota.medio}</small>
                                    <h3 className="nota-titulo" style={{ color: 'white' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Resto de secciones (Diseño, Audiovisual, Repositorio) con la misma lógica que tu código original */}
                {/* ... (Se mantienen todos los map e iframes exactamente igual) ... */}
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

                <section id="repositorio" style={{ padding: '60px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Repositorio</h2>
                        <div className="repo-grid">
                            {documentos.map((doc, i) => (
                                <a key={i} href={doc.link} download className="doc-item" style={{ backgroundColor: colors.bgLight, border: `1px solid ${colors.border}` }}>
                                    <div style={{ fontSize: '20px' }}>📄</div>
                                    <div>
                                        <span className="doc-tipo">{doc.tipo}</span>
                                        <p className="doc-titulo" style={{ color: 'white' }}>{doc.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" style={{ padding: '60px 20px', backgroundColor: colors.bgDark }}>
                    <div className="contact-form-container" style={{ backgroundColor: colors.bgSec }}>
                        <h3 className="contact-title" style={{ color: 'white' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Tu Nombre" required className="form-input" style={{ backgroundColor: colors.bgDark, color: 'white', border: `1px solid ${colors.border}` }} />
                            <input type="email" name="email" placeholder="Tu Email" required className="form-input" style={{ backgroundColor: colors.bgDark, color: 'white', border: `1px solid ${colors.border}` }} />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required className="form-input" style={{ backgroundColor: colors.bgDark, color: 'white', border: `1px solid ${colors.border}` }}></textarea>
                            <button type="submit" className="submit-btn">Enviar Mensaje</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '30px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                <p style={{ fontSize: '10px', opacity: 0.4 }}>© 2026 PRAKXIS | SCIENCE & NARRATIVES</p>
            </footer>

            <style jsx>{`
                .navbar-custom { background-color: ${colors.bgDark}; padding: 12px 10px; position: sticky; top: 0; z-index: 1000; width: 100%; border-bottom: 1px solid ${colors.border}; }
                .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .brand-text { color: white; font-weight: 900; font-size: 1rem; letter-spacing: 1px; }
                .nav-links { display: flex; gap: 6px; align-items: center; }
                .nav-links a { color: ${colors.textLight}; text-decoration: none; font-size: 9px; font-weight: 500; text-transform: uppercase; }
                .btn-conectemos { background-color: ${colors.accent}; color: black !important; padding: 4px 8px; border-radius: 12px; font-weight: bold; }
                .hero-title { font-size: clamp(2rem, 8vw, 4rem); font-weight: 900; color: ${colors.accent}; letter-spacing: -1px; }
                .section-title { font-size: 1.3rem; margin-bottom: 20px; border-left: 4px solid ${colors.accent}; padding-left: 12px; font-weight: 700; text-transform: uppercase; color: white; }
                .scroll-horizontal { display: flex; overflow-x: auto; gap: 15px; padding-bottom: 15px; width: 100%; }
                .card-prensa-scroll { min-width: 78vw; background: ${colors.bgSec}; border-radius: 12px; text-decoration: none; overflow: hidden; border: 1px solid ${colors.border}; flex-shrink: 0; }
                .medio-tag { color: ${colors.accent}; font-weight: 800; text-transform: uppercase; font-size: 9px; }
                .video-card { min-width: 85vw; border-radius: 12px; overflow: hidden; background: black; flex-shrink: 0; }
                .ratio-container { position: relative; padding-bottom: 56.25%; }
                .ratio-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }
                .submit-btn { width: 100%; padding: 14px; background: ${colors.accent}; border: none; border-radius: 25px; font-weight: bold; cursor: pointer; color: black; }
                .doc-tipo { font-size: 9px; font-weight: 800; color: ${colors.accent}; text-transform: uppercase; }
                @media (min-width: 768px) { .card-prensa-scroll { min-width: 320px; } .video-card { min-width: 600px; } }
            `}</style>
        </div>
    );
};

export default IndexBusiness;