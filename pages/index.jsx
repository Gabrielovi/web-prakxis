import React from 'react';
import Head from 'next/head';

const IndexPrakxisUltraGlass = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgGlass: 'rgba(255, 255, 255, 0.01)', // TRASLUCIDEZ AL 1%
        textTitle: '#FFFFFF', 
        textBody: '#E5E7EB',  
        accent: '#00F2FF',    // Calipso Prakxis
        borderGlass: 'rgba(255, 255, 255, 0.1)',
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
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>

            {/* NAVBAR CON TODOS LOS BOTONES */}
            <nav style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.borderGlass}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.85)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '1px', color: colors.accent, fontSize: '1.1rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div className="nav-desktop">
                        <a href="#prensa" className="nav-link">PRENSA</a>
                        <a href="#diseno" className="nav-link">DISEÑO</a>
                        <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    </div>
                    <a href="#contact" className="btn-contacto-top">CONTACTO</a>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                
                {/* HERO: TÍTULO UNA LÍNEA + BAJADA */}
                <section style={{ padding: '100px 0 60px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 7vw, 4.2rem)', fontWeight: '900', color: 'white', margin: 0, whiteSpace: 'nowrap' }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', fontWeight: '300', letterSpacing: '0.5px' }}>
                        Narrativas visuales con rigor científico.
                    </p>
                </section>

                {/* SECCIONES TRASLÚCIDAS UNIFICADAS */}
                {[
                    { id: 'prensa', title: 'Prensa', content: (
                        <div className="glass-grid">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="glass-item">
                                    <div className="img-container">
                                        <img src={nota.img} alt={nota.titulo} />
                                    </div>
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: '800', textTransform: 'uppercase' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1rem', color: 'white', marginTop: '10px', lineHeight: '1.4', fontWeight: '600' }}>{nota.titulo}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )},
                    { id: 'diseno', title: 'Diseño', content: (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <div className="pdf-frame">
                                <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="550px" style={{ border: 'none', background: 'transparent' }}></iframe>
                            </div>
                            <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-mobile-only">VER PORTAFOLIO PDF</a>
                        </div>
                    )},
                    { id: 'audiovisual', title: 'Audiovisual', content: (
                        <div className="glass-grid">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-glass-box">
                                    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                </div>
                            ))}
                        </div>
                    )}
                ].map(section => (
                    <section key={section.id} id={section.id} style={{ padding: '40px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
                            <div style={{ width: '4px', height: '22px', backgroundColor: colors.accent }}></div>
                            <h2 style={{ fontSize: '1.4rem', color: 'white', margin: 0, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{section.title}</h2>
                        </div>
                        <div className="glass-panel-ultra">
                            {section.content}
                        </div>
                    </section>
                ))}

                {/* CONTACTO: ESTILO REFERENCIA SOLICITADA */}
                <section id="contact" style={{ padding: '80px 0 150px 0' }}>
                    <div className="glass-panel-ultra" style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 40px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', margin: 0, fontWeight: '900' }}>Conectemos</h2>
                            <div style={{ width: '60px', height: '4px', backgroundColor: colors.accent, margin: '20px auto' }}></div>
                        </div>
                        
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Tu Nombre" required className="input-glass" />
                            <input type="email" name="email" placeholder="Tu Email" required className="input-glass" />
                            <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="5" required className="input-glass"></textarea>
                            <button type="submit" className="btn-submit-prakxis">ENVIAR MENSAJE</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-desktop { display: flex; gap: 20px; }
                .nav-link { color: #CCC; text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 1px; transition: 0.3s; }
                .nav-link:hover { color: ${colors.accent}; }
                .btn-contacto-top { background: ${colors.accent}; color: black; padding: 8px 16px; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 11px; }

                /* PANEL DE CRISTAL AL 1% */
                .glass-panel-ultra { 
                    background: ${colors.bgGlass}; 
                    border-radius: 12px; 
                    border: 1px solid ${colors.borderGlass}; 
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    overflow: hidden;
                }

                .glass-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1px; background: ${colors.borderGlass}; }
                
                .glass-item { background: rgba(0,0,0,0.2); text-decoration: none; color: white; transition: 0.3s; display: block; }
                .glass-item:hover { background: rgba(255,255,255,0.03); }
                .img-container { height: 220px; overflow: hidden; }
                .img-container img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 0.5s; }
                .glass-item:hover img { opacity: 1; transform: scale(1.03); }

                .video-glass-box { aspect-ratio: 16/9; background: #000; }

                /* INPUTS CALIPSO */
                .input-glass { 
                    padding: 18px; border-radius: 8px; border: 1px solid ${colors.accent}; 
                    background: transparent; color: white; font-size: 16px; outline: none; transition: 0.3s;
                }
                .input-glass:focus { background: rgba(0, 242, 255, 0.05); box-shadow: 0 0 10px rgba(0, 242, 255, 0.2); }
                .input-glass::placeholder { color: ${colors.accent}; opacity: 0.8; font-weight: 600; }

                .btn-submit-prakxis { 
                    background: ${colors.accent}; color: black; padding: 20px; border-radius: 8px; 
                    border: none; font-weight: 900; cursor: pointer; font-size: 14px; letter-spacing: 1px;
                }

                .btn-mobile-only { display: none; border: 1px solid ${colors.accent}; color: ${colors.accent}; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: 700; }

                @media (max-width: 768px) {
                    .nav-desktop { display: none; }
                    .pdf-frame { display: none; }
                    .btn-mobile-only { display: inline-block; }
                    h1 { white-space: normal !important; line-height: 1.1; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisUltraGlass;