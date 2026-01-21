import React from 'react';
import Head from 'next/head';

const IndexBusiness = () => {
    const colors = {
        bgDark: '#121212',   
        bgLight: '#1A1B1E',  
        bgSec: '#25262B',    
        textDark: '#E8E9EB', 
        textLight: '#C5C6C7',
        accent: '#FFFB00',   
        border: '#373A40'    
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
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <Head>
                <title>PRAKXIS | Narrativas Visuales</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            {/* NAV REPARADA PARA MÓVIL */}
            <nav className="navbar-custom">
                <div className="nav-container">
                    <span className="brand-text">PRAKXIS</span>
                    <div className="nav-links">
                        <a href="#prensa">Prensa</a>
                        <a href="#audiovisual">Videos</a>
                        <a href="#contact" className="btn-conectemos">Contacto</a>
                    </div>
                </div>
            </nav>

            <main>
                <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: colors.bgDark }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIÓN PRENSA: AJUSTADA A GRILLA RESPONSIVA */}
                <section id="prensa" className="section-container">
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="responsive-grid">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-prensa">
                                <img src={nota.img} alt={nota.titulo} className="card-img" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c"; }} />
                                <div style={{ padding: '15px' }}>
                                    <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ fontSize: '1rem', margin: '5px 0', color: 'white' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* AUDIOVISUAL: UN VIDEO BAJO EL OTRO EN MÓVIL */}
                <section id="audiovisual" className="section-container" style={{ backgroundColor: colors.bgSec }}>
                    <h2 className="section-title">Audiovisual</h2>
                    <div className="responsive-grid">
                        {videosAudiovisual.map(id => (
                            <div key={id} className="video-wrapper">
                                <iframe src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* REPOSITORIO */}
                <section id="repositorio" className="section-container">
                    <h2 className="section-title">Repositorio</h2>
                    <div className="responsive-grid">
                        {documentos.map((doc, i) => (
                            <a key={i} href={doc.link} download className="doc-item">
                                <span style={{ fontSize: '20px' }}>📄</span>
                                <div>
                                    <small style={{ color: colors.accent }}>{doc.tipo}</small>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>{doc.titulo}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '40px 20px', backgroundColor: colors.bgDark }}>
                    <div className="contact-box">
                        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required className="input-style" />
                            <input type="email" name="email" placeholder="Email" required className="input-style" />
                            <textarea name="message" placeholder="Mensaje" rows="4" required className="input-style"></textarea>
                            <button type="submit" className="submit-btn">Enviar</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .navbar-custom { background: ${colors.bgDark}; padding: 15px; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid ${colors.border}; }
                .nav-container { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .brand-text { color: ${colors.accent}; font-weight: 900; font-size: 1.2rem; }
                .nav-links { display: flex; gap: 10px; }
                .nav-links a { color: white; text-decoration: none; font-size: 11px; text-transform: uppercase; padding: 5px; }
                
                .section-container { padding: 40px 20px; maxWidth: 1100px; margin: 0 auto; }
                .section-title { border-left: 4px solid ${colors.accent}; padding-left: 10px; font-size: 1.2rem; margin-bottom: 25px; text-transform: uppercase; }
                
                /* ESTA ES LA CLAVE: Grilla automática que cambia según el tamaño */
                .responsive-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
                
                .card-prensa { background: ${colors.bgSec}; border-radius: 8px; overflow: hidden; text-decoration: none; border: 1px solid ${colors.border}; transition: 0.3s; }
                .card-img { width: 100%; height: 180px; object-fit: cover; }
                
                .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; background: black; border-radius: 8px; overflow: hidden; }
                .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
                
                .doc-item { background: ${colors.bgSec}; padding: 15px; border-radius: 8px; display: flex; align-items: center; gap: 15px; text-decoration: none; border: 1px solid ${colors.border}; }
                
                .contact-box { max-width: 500px; margin: 0 auto; background: ${colors.bgSec}; padding: 20px; border-radius: 12px; }
                .input-style { width: 100%; padding: 12px; margin-bottom: 10px; border-radius: 8px; border: 1px solid ${colors.border}; background: ${colors.bgDark}; color: white; box-sizing: border-box; }
                .submit-btn { width: 100%; padding: 12px; background: ${colors.accent}; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
                
                .hero-title { font-size: clamp(2rem, 10vw, 3.5rem); font-weight: 900; color: ${colors.accent}; line-height: 1.1; margin-bottom: 10px; }

                @media (max-width: 600px) {
                    .nav-links { gap: 5px; }
                    .nav-links a { font-size: 10px; }
                    .section-container { padding: 30px 15px; }
                }
            `}</style>
        </div>
    );
};

export default IndexBusiness;