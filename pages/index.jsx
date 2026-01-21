import React from 'react';
import Head from 'next/head';

const IndexPrakxisUltraTranslucido = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        // MÁXIMA TRASLUCIDEZ: 15% de opacidad
        bgGlass: 'rgba(10, 11, 13, 0.15)', 
        textTitle: '#FFFFFF', 
        textBody: '#E5E7EB',  
        accent: '#00F2FF',    // CALIPSO
        borderGlass: 'rgba(255, 255, 255, 0.08)',
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

            {/* NAVBAR */}
            <nav style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.borderGlass}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.4)', backdropFilter: 'blur(15px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" className="btn-nav-calipso">CONTACTO</a>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <section style={{ padding: '120px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', color: 'white', margin: 0, letterSpacing: '-1px' }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', opacity: 0.8 }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIONES TRASLÚCIDAS */}
                {['prensa', 'diseno', 'audiovisual'].map(sectionId => (
                    <section key={sectionId} id={sectionId} style={{ padding: '40px 0' }}>
                        <h2 className="section-title">{sectionId.toUpperCase()}</h2>
                        <div className="glass-panel">
                            {sectionId === 'prensa' && (
                                <div className="grid-glass">
                                    {notasPrensa.map((nota, i) => (
                                        <a key={i} href={nota.url} target="_blank" className="glass-item">
                                            <img src={nota.img} alt={nota.titulo} />
                                            <div style={{ padding: '20px' }}>
                                                <small style={{ color: colors.accent, fontWeight: '800' }}>{nota.medio}</small>
                                                <h3 style={{ fontSize: '1rem', color: 'white', marginTop: '10px' }}>{nota.titulo}</h3>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                            {sectionId === 'diseno' && (
                                <div style={{ padding: '40px', textAlign: 'center' }}>
                                    <div className="iframe-wrapper">
                                        <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="550px" style={{ border: 'none' }}></iframe>
                                    </div>
                                    <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-calipso-outline">ABRIR PORTAFOLIO</a>
                                </div>
                            )}
                            {sectionId === 'audiovisual' && (
                                <div className="grid-glass">
                                    {videosVimeo.map(id => (
                                        <div key={id} style={{ aspectPosition: '16/9', background: '#000' }}>
                                            <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* CONTACTO - DISEÑO DE TU IMAGEN */}
                <section id="contact" style={{ padding: '80px 0 150px 0' }}>
                    <div className="glass-panel" style={{ maxWidth: '650px', margin: '0 auto', padding: '60px 40px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '50px' }}>
                            <div style={{ width: '4px', height: '35px', backgroundColor: colors.accent }}></div>
                            <h2 style={{ fontSize: '2.5rem', color: 'white', margin: 0, fontWeight: '800' }}>Conectemos</h2>
                        </div>
                        
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            
                            <div className="input-group">
                                <input type="text" name="name" placeholder="Tu Nombre" required className="calipso-field" />
                            </div>
                            <div className="input-group">
                                <input type="email" name="email" placeholder="Tu Email" required className="calipso-field" />
                            </div>
                            <div className="input-group">
                                <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="4" required className="calipso-field"></textarea>
                            </div>
                            
                            <button type="submit" className="btn-final-submit">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-link { color: #BBB; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
                .btn-nav-calipso { background: ${colors.accent}; color: black; padding: 7px 15px; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 11px; }
                
                .section-title { font-size: 1.5rem; color: white; margin-bottom: 20px; font-weight: 800; opacity: 0.9; }

                /* EL PANEL DE CRISTAL ULTRA TRASLÚCIDO */
                .glass-panel { 
                    background: ${colors.bgGlass}; 
                    border-radius: 12px; 
                    border: 1px solid ${colors.borderGlass}; 
                    backdrop-filter: blur(5px);
                    overflow: hidden;
                }

                .grid-glass { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1px; background: ${colors.borderGlass}; }
                
                .glass-item { background: rgba(0,0,0,0.1); text-decoration: none; transition: 0.3s; }
                .glass-item img { width: 100%; height: 220px; object-fit: cover; opacity: 0.7; transition: 0.4s; }
                .glass-item:hover img { opacity: 1; }

                .iframe-wrapper { border-radius: 8px; overflow: hidden; background: rgba(0,0,0,0.4); margin-bottom: 25px; }

                /* INPUTS CALIPSO */
                .calipso-field { 
                    width: 100%;
                    padding: 16px; 
                    border-radius: 8px; 
                    border: 1px solid ${colors.accent}; 
                    background: transparent; 
                    color: white; 
                    outline: none; 
                    font-size: 16px;
                    box-sizing: border-box;
                }
                .calipso-field::placeholder { 
                    color: ${colors.accent}; 
                    opacity: 0.9;
                    font-weight: 500;
                }

                .btn-final-submit { 
                    background: ${colors.accent}; 
                    color: black; 
                    padding: 20px; 
                    border-radius: 8px; 
                    border: none; 
                    font-weight: 900; 
                    cursor: pointer; 
                    font-size: 15px; 
                    letter-spacing: 1px;
                }

                .btn-calipso-outline {
                    border: 2px solid ${colors.accent};
                    color: ${colors.accent};
                    padding: 12px 30px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 800;
                    display: inline-block;
                }

                @media (max-width: 768px) {
                    .iframe-wrapper { display: none; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisUltraTranslucido;