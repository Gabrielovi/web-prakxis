import React from 'react';
import Head from 'next/head';

const IndexPrakxisTranslucido = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        // Fondo traslúcido para el efecto cristal
        bgGlass: 'rgba(20, 22, 26, 0.65)', 
        textTitle: '#FFFFFF', 
        textBody: '#D1D5DB',  
        accent: '#00F2FF',    
        border: 'rgba(255, 255, 255, 0.1)'     
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosVimeo = ["1156706575", "1156706044"];

    return (
        <div style={{ 
            backgroundColor: colors.bgMain, 
            backgroundImage: 'url("/images/dark-black-cement-wall-background.jpg")', 
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white', 
            minHeight: '100vh', 
            fontFamily: 'Inter, system-ui, sans-serif',
            scrollBehavior: 'smooth'
        }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>

            <nav style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.8)', backdropFilter: 'blur(15px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" className="btn-nav-contacto">CONTACTO</a>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <section style={{ padding: '120px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', fontWeight: '900', color: 'white', margin: 0 }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', opacity: 0.9 }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIÓN PRENSA TRASLÚCIDA */}
                <section id="prensa" style={{ padding: '40px 0' }}>
                    <h2 className="section-title">Prensa</h2>
                    <div className="glass-container">
                        <div className="grid-responsive">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="glass-card">
                                    <div className="img-wrapper">
                                        <img src={nota.img} alt={nota.titulo} />
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: '800' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1.1rem', color: 'white', marginTop: '10px' }}>{nota.titulo}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECCIÓN DISEÑO TRASLÚCIDA */}
                <section id="diseno" style={{ padding: '40px 0' }}>
                    <h2 className="section-title">Diseño</h2>
                    <div className="glass-container">
                        <div style={{ padding: '30px', textAlign: 'center' }}>
                            <h3 style={{ color: 'white', marginBottom: '10px' }}>Portafolio PRAKXIS 2026</h3>
                            <p style={{ color: colors.textBody, fontSize: '14px', marginBottom: '20px' }}>Archivo: 30dic.pdf</p>
                            <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-accent-pro">Visualizar Portafolio</a>
                        </div>
                        <div className="iframe-wrapper">
                            <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="600px" style={{ border: 'none' }}></iframe>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL TRASLÚCIDA */}
                <section id="audiovisual" style={{ padding: '40px 0' }}>
                    <h2 className="section-title">Audiovisual</h2>
                    <div className="glass-container">
                        <div className="grid-responsive">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-glass">
                                    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '80px 0 120px 0' }}>
                    <div className="glass-container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '30px' }}>Conectemos</h2>
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required className="glass-input" />
                            <input type="email" name="email" placeholder="Email" required className="glass-input" />
                            <textarea name="message" placeholder="Mensaje" rows="5" required className="glass-input"></textarea>
                            <button type="submit" className="btn-submit-pro">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-link { color: ${colors.textBody}; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
                .btn-nav-contacto { background: ${colors.accent}; color: black; padding: 7px 15px; borderRadius: 4px; fontWeight: bold; text-decoration: none; fontSize: 11px; }
                
                .section-title { font-size: 2rem; color: #FFFFFF; margin-bottom: 30px; font-weight: 900; border-left: 6px solid ${colors.accent}; padding-left: 20px; }
                
                /* EL CONTENEDOR TRASLÚCIDO */
                .glass-container { 
                    background: ${colors.bgGlass}; 
                    border-radius: 20px; 
                    border: 1px solid rgba(255, 255, 255, 0.1); 
                    backdrop-filter: blur(12px); 
                    -webkit-backdrop-filter: blur(12px);
                    overflow: hidden;
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }

                .grid-responsive { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1px; background: rgba(255,255,255,0.05); }
                
                .glass-card { background: rgba(0,0,0,0.2); text-decoration: none; transition: 0.3s; }
                .glass-card:hover { background: rgba(255,255,255,0.05); }
                .img-wrapper { height: 200px; overflow: hidden; }
                .img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
                .glass-card:hover img { transform: scale(1.05); }

                .video-glass { aspect-ratio: 16/9; background: black; }
                
                .btn-accent-pro { background: ${colors.accent}; color: black; padding: 12px 25px; border-radius: 8px; fontWeight: 800; text-decoration: none; display: inline-block; transition: 0.3s; }
                .btn-accent-pro:hover { box-shadow: 0 0 20px ${colors.accent}; transform: translateY(-2px); }

                .glass-input { padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: white; outline: none; }
                .glass-input:focus { border-color: ${colors.accent}; }
                
                .btn-submit-pro { background: ${colors.accent}; color: black; padding: 18px; border-radius: 10px; border: none; font-weight: 900; cursor: pointer; transition: 0.3s; }
                .btn-submit-pro:hover { background: white; }

                @media (max-width: 768px) {
                    .iframe-wrapper { display: none; }
                    .section-title { font-size: 1.6rem; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisTranslucido;