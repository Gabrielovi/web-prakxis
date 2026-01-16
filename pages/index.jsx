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
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
            
            {/* NAV REPARADA PARA MÓVIL */}
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
                <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p className="hero-subtitle">Narrativas visuales con rigor científico.</p>
                </section>

                <section id="prensa" style={{ padding: '60px 20px', maxWidth: '1150px', margin: '0 auto' }}>
                    <h2 className="section-title">Reportajes de Prensa</h2>
                    <div className="scroll-horizontal scroll-custom">
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-prensa-scroll">
                                <div className="card-img-container">
                                    <img src={nota.img} alt={nota.titulo} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"; }} />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <small className="medio-tag">{nota.medio}</small>
                                    <h3 className="nota-titulo">{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <section id="diseno" style={{ padding: '60px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Diseño y Visualización</h2>
                        <div className="placeholder-diseno" style={{ 
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1551288049-bbbda5366d7a?auto=format&fit=crop&w=1200&q=80")',
                            backgroundSize: 'cover', backgroundPosition: 'center'
                        }}>
                             <div style={{ textAlign: 'center', padding: '20px' }}>
                                <p style={{ letterSpacing: '2px', fontSize: '14px', fontWeight: 'bold' }}>PORTAFOLIO EN DESARROLLO</p>
                                <p style={{ fontSize: '11px', opacity: 0.6 }}>Infografías • Branding • UI/UX</p>
                             </div>
                        </div>
                    </div>
                </section>

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

                <section id="contact" style={{ padding: '80px 20px', backgroundColor: colors.bgDark }}>
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

            <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                <p style={{ fontSize: '11px', opacity: 0.4 }}>© 2026 PRAKXIS | SCIENCE & NARRATIVES</p>
            </footer>

            <style jsx>{`
                .navbar-custom { background-color: ${colors.bgDark}; padding: 15px 20px; position: sticky; top: 0; z-index: 1000; width: 100%; }
                .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
                .brand-text { color: white; font-weight: 900; font-size: 1.2rem; letter-spacing: 3px; }
                .nav-links { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
                .nav-links a { color: ${colors.textLight}; text-decoration: none; font-size: 11px; font-weight: 500; text-transform: uppercase; }
                .btn-conectemos { background-color: ${colors.accent}; color: ${colors.bgDark} !important; padding: 6px 12px; border-radius: 20px; font-weight: bold; }
                
                .hero-title { font-size: clamp(2.2rem, 8vw, 4.5rem); font-weight: 900; color: ${colors.accent}; letter-spacing: -1px; margin-bottom: 10px; }
                .hero-subtitle { font-size: 1.1rem; opacity: 0.8; padding: 0 20px; }
                
                .section-title { font-size: 1.5rem; margin-bottom: 25px; border-left: 4px solid ${colors.accent}; padding-left: 15px; font-weight: 700; text-transform: uppercase; }

                .scroll-horizontal { display: flex; overflow-x: auto; gap: 20px; padding-bottom: 15px; -webkit-overflow-scrolling: touch; width: 100%; }
                .card-prensa-scroll { min-width: 260px; background: white; border-radius: 12px; text-decoration: none; overflow: hidden; border: 1px solid ${colors.border}; flex-shrink: 0; }
                .card-img-container { height: 150px; overflow: hidden; }
                .card-img-container img { width: 100%; height: 100%; object-fit: cover; }
                .medio-tag { color: ${colors.neon}; font-weight: 800; text-transform: uppercase; font-size: 10px; }
                .nota-titulo { color: ${colors.textDark}; font-size: 0.95rem; margin-top: 8px; line-height: 1.4; }

                .video-card { min-width: 290px; border-radius: 12px; overflow: hidden; background: black; flex-shrink: 0; }
                @media (min-width: 768px) {
                    .video-card { min-width: 600px; }
                    .card-prensa-scroll { min-width: 320px; }
                }

                .ratio-container { position: relative; padding-bottom: 56.25%; }
                .ratio-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }
                .placeholder-diseno { height: 200px; border-radius: 15px; display: flex; align-items: center; justify-content: center; border: 1px solid ${colors.border}; }

                .contact-form-container { max-width: 500px; margin: 0 auto; padding: 30px; background: white; border-radius: 20px; }
                .contact-title { text-align: center; color: ${colors.bgDark}; font-weight: 800; margin-bottom: 20px; font-size: 1.8rem; }
                .form-input { width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid #eee; border-radius: 10px; background: #f8fafa; font-size: 16px; }
                .submit-btn { width: 100%; padding: 14px; background: ${colors.accent}; border: none; border-radius: 25px; font-weight: bold; cursor: pointer; }

                @media (max-width: 480px) {
                    .nav-container { justify-content: center; text-align: center; }
                    .nav-links { justify-content: center; width: 100%; gap: 8px; }
                    .nav-links a { font-size: 10px; }
                    .brand-text { width: 100%; margin-bottom: 5px; }
                }

                .scroll-custom::-webkit-scrollbar { height: 4px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: ${colors.accent}; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;