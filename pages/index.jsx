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
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'sans-serif', scrollBehavior: 'smooth' }}>
            
            {/* NAV COMPLETA */}
            <nav className="navbar-custom">
                <div className="nav-container">
                    <span className="brand-text">PRAKXIS</span>
                    <div className="nav-links">
                        <a href="#prensa">Prensa</a>
                        <a href="#diseno">Diseño</a>
                        <a href="#audiovisual">Audiovisual</a>
                        <a href="#contact" className="btn-conectemos">Conectemos</a>
                    </div>
                </div>
            </nav>

            <main>
                {/* HERO */}
                <section style={{ padding: '140px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 className="hero-title">Ciencia que conecta</h1>
                    <p className="hero-subtitle">Narrativas visuales con rigor científico.</p>
                    <div style={{ width: '40px', height: '2px', backgroundColor: colors.accent, margin: '30px auto', opacity: 0.5 }}></div>
                </section>

                {/* 1. PRENSA */}
                <section id="prensa" style={{ padding: '80px 20px', maxWidth: '1150px', margin: '0 auto' }}>
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

                {/* 2. DISEÑO (CON IMAGEN DE FONDO) */}
                <section id="diseno" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <h2 className="section-title">Diseño y Visualización</h2>
                        <div className="placeholder-diseno" style={{ 
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url("https://images.unsplash.com/photo-1551288049-bbbda5366d7a?auto=format&fit=crop&w=1200&q=80")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                             <div style={{ textAlign: 'center' }}>
                                <p style={{ letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold', color: colors.textDark }}>PORTAFOLIO EN DESARROLLO</p>
                                <p style={{ fontSize: '12px', opacity: 0.6, marginTop: '5px' }}>Infografías • Branding Científico • UI/UX</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* 3. AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', maxWidth: '1150px', margin: '0 auto' }}>
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

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '100px 20px', backgroundColor: colors.bgDark }}>
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

            <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white', borderTop: '1px solid #222' }}>
                <p style={{ fontSize: '11px', opacity: 0.4, letterSpacing: '1px' }}>© 2026 PRAKXIS | SCIENCE & NARRATIVES</p>
            </footer>

            <style jsx>{`
                .navbar-custom { background-color: ${colors.bgDark}; padding: 18px 25px; position: sticky; top: 0; z-index: 1000; }
                .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .brand-text { color: white; font-weight: 900; font-size: 1.4rem; letter-spacing: 4px; }
                .nav-links { display: flex; gap: 20px; align-items: center; }
                .nav-links a { color: ${colors.textLight}; text-decoration: none; font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
                .btn-conectemos { background-color: ${colors.accent}; color: ${colors.bgDark} !important; padding: 8px 18px; border-radius: 25px; font-weight: bold; }
                
                .hero-title { 
                    font-size: clamp(2.8rem, 10vw, 5rem); 
                    font-weight: 900;
                    background: linear-gradient(to bottom, #FFFFFF 30%, ${colors.accent} 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    letter-spacing: -2px;
                }
                .hero-subtitle { font-size: 1.2rem; opacity: 0.7; font-weight: 300; letter-spacing: 1px; }
                
                .section-title { font-size: 1.6rem; margin-bottom: 35px; border-left: 4px solid ${colors.accent}; padding-left: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }

                .scroll-horizontal { display: flex; overflow-x: auto; gap: 25px; padding-bottom: 25px; -webkit-overflow-scrolling: touch; }
                
                .card-prensa-scroll { min-width: 300px; background: white; border-radius: 12px; text-decoration: none; overflow: hidden; border: 1px solid ${colors.border}; flex-shrink: 0; transition: all 0.3s ease; }
                .card-prensa-scroll:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }

                .card-img-container { height: 180px; overflow: hidden; background-color: #f0f0f0; }
                .card-img-container img { width: 100%; height: 100%; object-fit: cover; }
                .medio-tag { color: ${colors.neon}; font-weight: 800; text-transform: uppercase; font-size: 10px; letter-spacing: 1px; }
                .nota-titulo { color: ${colors.textDark}; font-size: 1.1rem; margin-top: 10px; line-height: 1.4; font-weight: 600; }

                .video-card { min-width: 320px; border-radius: 15px; overflow: hidden; background: black; flex-shrink: 0; box-shadow: 0 15px 35px rgba(0,0,0,0.3); }
                @media (min-width: 768px) {
                    .video-card { min-width: 650px; }
                    .card-prensa-scroll { min-width: 380px; }
                }

                .ratio-container { position: relative; padding-bottom: 56.25%; }
                .ratio-container iframe { position: absolute; width: 100%; height: 100%; border: 0; }

                .placeholder-diseno { height: 300px; border-radius: 20px; display: flex; align-items: center; justify-content: center; border: 1px solid ${colors.border}; }

                .contact-form-container { max-width: 550px; margin: 0 auto; padding: 45px; background: white; border-radius: 30px; box-shadow: 0 25px 50px rgba(0,0,0,0.4); }
                .contact-title { text-align: center; color: ${colors.bgDark}; font-weight: 800; margin-bottom: 30px; font-size: 2.2rem; }
                .form-input { width: 100%; padding: 15px; margin-bottom: 18px; border: 1px solid #eee; border-radius: 12px; background: #f8fafa; font-size: 16px; }
                .submit-btn { width: 100%; padding: 16px; background: ${colors.accent}; border: none; border-radius: 35px; font-weight: bold; cursor: pointer; font-size: 1.1rem; }

                @media (max-width: 768px) {
                    .nav-links { gap: 12px; }
                    .nav-links a { font-size: 9px; }
                    .brand-text { font-size: 1.1rem; }
                    .section-title { font-size: 1.3rem; }
                }

                .scroll-custom::-webkit-scrollbar { height: 5px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: ${colors.accent}; border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;