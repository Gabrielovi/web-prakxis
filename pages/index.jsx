import React from 'react';

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

    // Sección de Prensa con tus rutas locales
    const notasPrensa = [
        {
            titulo: "UFRO presentó plataforma georreferenciada de salud pública",
            url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/",
            medio: "Contacto Salud",
            img: "/images/prensa/ufro_salud.jpg" 
        },
        {
            titulo: "Nuevo libro 'Del despojo surge la esperanza'",
            url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233",
            medio: "Araucanía Noticias",
            img: "/images/prensa/libro_despojo.jpg" 
        }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            {/* NAV RESPONSIVA */}
            <nav className="navbar-custom">
                <div className="nav-container">
                    <span className="brand-text">PRAKXIS</span>
                    <div className="nav-links">
                        <a href="#prensa">Prensa</a>
                        <a href="#audiovisual">Videos</a>
                        <a href="#contact" className="btn-conectemos">Conectemos</a>
                    </div>
                </div>
            </nav>

            <main>
                {/* HERO NEGRO */}
                <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p className="hero-subtitle">Narrativas visuales con rigor científico.</p>
                </section>

                {/* 1. PRENSA CON SCROLL HORIZONTAL */}
                <section id="prensa" style={{ padding: '60px 20px', maxWidth: '1150px', margin: '0 auto' }}>
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="scroll-horizontal scroll-custom">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-prensa-scroll">
                                <div className="card-img-container">
                                    <img 
                                        src={nota.img} 
                                        alt={nota.titulo} 
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"; }}
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <small className="medio-tag">{nota.medio}</small>
                                    <h3 className="nota-titulo">{nota.titulo}</h3>
                                    <p style={{fontSize: '12px', color: colors.neon, marginTop: '10px', fontWeight: 'bold'}}>Leer reportaje →</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 2. DISEÑO */}
                <section id="diseno" style={{ padding: '60px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ textAlign: 'center', border: 'none' }}>Diseño y Visualización</h2>
                        <div className="placeholder-diseno">
                             [ PORTAFOLIO EN DESARROLLO ]
                        </div>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL CON SCROLL HORIZONTAL */}
                <section id="audiovisual" style={{ padding: '60px 20px', maxWidth: '1150px', margin: '0 auto' }}>
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
                </section>

                {/* SECCIÓN CONTACTO NEGRA */}
                <section id="contact" style={{ padding: '80px 20px', backgroundColor: colors.bgDark }}>
                    <div className="contact-form-container">
                        <h3 className="contact-title">Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Tu Nombre" required className="form-input" />
                            <input type="email" name="email" placeholder="Tu Email" required className="form-input" />
                            <textarea name="message" placeholder="¿En qué proyecto estás pensando?" rows="4" required className="form-input"></textarea>
                            <button type="submit" className="submit-btn">Enviar Mensaje</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white', borderTop: '1px solid #222' }}>
                <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .navbar-custom { background-color: ${colors.bgDark}; padding: 15px 20px; position: sticky; top: 0; z-index: 1000; }
                .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .brand-text { color: white; font-weight: bold; font-size: 1.2rem; letter-spacing: 2px; }
                .nav-links { display: flex; gap: 15px; align-items: center; }
                .nav-links a { color: ${colors.textLight}; text-decoration: none; font-size: 13px; }
                .btn-conectemos { background-color: ${colors.accent}; color: ${colors.bgDark} !important; padding: 6px 14px; border-radius: 20px; font-weight: bold; }
                
                .hero-title { font-size: clamp(2.5rem, 8vw, 4rem); color: ${colors.accent}; font-weight: bold; }
                .hero-subtitle { font-size: 1.1rem; opacity: 0.8; }
                
                .section-title { font-size: 1.8rem; margin-bottom: 30px; border-left: 5px solid ${colors.accent}; padding-left: 15px; text-align: left; }

                .scroll-horizontal { display: flex; overflow-x: auto; gap: 20px; padding-bottom: 20px; -webkit-overflow-scrolling: touch; }
                
                .card-prensa-scroll { 
                    min-width: 280px; 
                    max-width: 280px; 
                    background: white; 
                    border-radius: 15px; 
                    text-decoration: none; 
                    overflow: hidden; 
                    border: 1px solid ${colors.border}; 
                    flex-shrink: 0;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                }

                .card-img-container { height: 160px; overflow: hidden; background-color: #eee; }
                .card-img-container img { width: 100%; height: 100%; object-fit: cover; }
                .medio-tag { color: ${colors.neon}; font-weight: bold; text-transform: uppercase; font-size: 11px; }
                .nota-titulo { color: ${colors.textDark}; font-size: 1rem; margin-top: 8px; line-height: 1.4; font-weight: 600; }

                .video-card { min-width: 300px; border-radius: 15px; overflow: hidden; background: black; flex-shrink: 0; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
                @media (min-width: 768px) {
                    .video-card { min-width: 600px; }
                    .card-prensa-scroll { min-width: 350px; max-width: 350px; }
                }

                .ratio-container { position: relative; padding-bottom: 56.25%; }
                .ratio-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }

                .placeholder-diseno { height: 200px; background: white; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: #ccc; border: 1px dashed #ccc; }

                .contact-form-container { max-width: 500px; margin: 0 auto; padding: 30px; background: white; border-radius: 25px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
                .contact-title { text-align: center; color: ${colors.bgDark}; font-weight: bold; margin-bottom: 25px; font-size: 2rem; }
                .form-input { width: 100%; padding: 14px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 12px; background: #f9f9f9; font-size: 16px; }
                .submit-btn { width: 100%; padding: 15px; background: ${colors.accent}; border: none; border-radius: 30px; font-weight: bold; cursor: pointer; font-size: 1.1rem; }

                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: ${colors.accent}; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;