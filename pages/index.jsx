import React from 'react';
import Head from 'next/head';

const IndexBusiness = () => {
    const colors = {
        bgMain: '#0D0D0D',    // Negro Profundo (Fondo general)
        bgSection: '#1A1B1E', // Gris Oscuro (Para separar secciones)
        bgCard: '#25262B',    // Gris Medio (Para que las tarjetas resalten)
        textMain: '#FFFFFF',  // Blanco (Títulos)
        textMuted: '#C1C2C5', // Gris Claro (Párrafos y lectura cómoda)
        accent: '#FFFB00',    // Amarillo Neón (Acción y detalles)
        border: '#373A40'     // Gris frontera para líneas finas
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    return (
        <div style={{ backgroundColor: colors.bgMain, color: colors.textMain, minHeight: '100vh', fontFamily: 'sans-serif', margin: 0 }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* NAV: Negro sólido con línea amarilla abajo */}
            <nav style={{ padding: '15px 20px', backgroundColor: colors.bgMain, borderBottom: `2px solid ${colors.accent}`, position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: 'white', fontSize: '1.2rem' }}>PRAKXIS</span>
                <a href="#contact" style={{ backgroundColor: colors.accent, color: 'black', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '12px' }}>CONTACTO</a>
            </nav>

            <main>
                {/* HERO: Fondo Negro */}
                <section style={{ padding: '80px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', fontWeight: '900', lineHeight: '1.1', margin: 0 }}>Ciencia que <span style={{ color: colors.accent }}>conecta</span></h1>
                    <p style={{ color: colors.textMuted, marginTop: '15px', fontSize: '1.1rem', maxWidth: '600px', margin: '15px auto' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* PRENSA: Fondo Gris Oscuro para contrastar */}
                <section id="prensa" style={{ backgroundColor: colors.bgSection, padding: '60px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px' }}>// Reportajes de Prensa</h2>
                        <div className="responsive-grid">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" className="card-item">
                                    <div className="img-container">
                                        <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1.1rem', marginTop: '10px', color: 'white', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* AUDIOVISUAL: Fondo Negro nuevamente */}
                <section id="audiovisual" style={{ padding: '60px 20px' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 style={{ color: colors.accent, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px' }}>// Producción Audiovisual</h2>
                        <div className="responsive-grid">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-card">
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe 
                                            src={`https://player.vimeo.com/video/${id}?badge=0&autopause=0`} 
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
                                            frameBorder="0" allow="autoplay; fullscreen" title="Vimeo Video"
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: colors.bgSection, color: colors.textMuted, fontSize: '12px', borderTop: `1px solid ${colors.border}` }}>
                <p>© 2026 PRAKXIS | COMUNICACIÓN CIENTÍFICA</p>
            </footer>

            <style jsx>{`
                .responsive-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 30px;
                }
                .card-item {
                    background-color: ${colors.bgCard};
                    border-radius: 12px;
                    text-decoration: none;
                    border: 1px solid ${colors.border};
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }
                .card-item:hover {
                    transform: translateY(-5px);
                    border-color: ${colors.accent};
                }
                .img-container {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                }
                .img-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .video-card {
                    background-color: ${colors.bgCard};
                    padding: 10px;
                    border-radius: 12px;
                    border: 1px solid ${colors.border};
                }
                @media (max-width: 600px) {
                    .responsive-grid {
                        grid-template-columns: 1fr; /* Un elemento por fila en smartphone */
                    }
                    section {
                        padding: 40px 15px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default IndexBusiness;