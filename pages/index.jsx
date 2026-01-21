import React from 'react';
import Head from 'next/head';

const IndexPrakxisUltraPremium = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgGlass: 'rgba(10, 11, 13, 0.35)', // MUCHO MÁS TRASLÚCIDO
        textTitle: '#FFFFFF', 
        textBody: '#D1D5DB',  
        accent: '#00F2FF',    // CALIPSO
        borderGlass: 'rgba(255, 255, 255, 0.12)',
        borderAccent: 'rgba(0, 242, 255, 0.5)' // BORDE CALIPSO SUTIL
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
            <nav style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.borderGlass}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.7)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" className="btn-nav-calipso">CONTACTO</a>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                <section style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', fontWeight: '900', color: 'white', margin: 0, letterSpacing: '-2px' }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', fontWeight: '300' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIONES UNIFICADAS TRASLÚCIDAS */}
                {[
                    { id: 'prensa', title: 'Prensa', content: (
                        <div className="grid-2">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" className="card-glass-item">
                                    <img src={nota.img} alt={nota.titulo} />
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1.1rem', color: 'white', marginTop: '8px' }}>{nota.titulo}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )},
                    { id: 'diseno', title: 'Diseño', content: (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <h3 style={{ color: 'white', marginBottom: '20px' }}>Portafolio Editorial 2026</h3>
                            <div className="iframe-container">
                                <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="500px" style={{ border: 'none', borderRadius: '8px' }}></iframe>
                            </div>
                            <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-full-calipso" style={{ marginTop: '25px' }}>Ver en Pantalla Completa</a>
                        </div>
                    )},
                    { id: 'audiovisual', title: 'Audiovisual', content: (
                        <div className="grid-2">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-glass-wrapper">
                                    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                </div>
                            ))}
                        </div>
                    )}
                ].map(section => (
                    <section key={section.id} id={section.id} style={{ padding: '50px 0' }}>
                        <h2 className="section-title">{section.title}</h2>
                        <div className="main-glass-container">
                            {section.content}
                        </div>
                    </section>
                ))}

                {/* SECCIÓN CONTACTO (Según tu imagen) */}
                <section id="contact" style={{ padding: '80px 0 150px 0' }}>
                    <div className="main-glass-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '50px 30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                            <div style={{ width: '4px', height: '35px', backgroundColor: colors.accent }}></div>
                            <h2 style={{ fontSize: '2.2rem', color: 'white', margin: 0 }}>Conectemos</h2>
                        </div>
                        
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            
                            <input type="text" name="name" placeholder="Tu Nombre" required className="calipso-input" />
                            <input type="email" name="email" placeholder="Tu Email" required className="calipso-input" />
                            <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="5" required className="calipso-input"></textarea>
                            
                            <button type="submit" className="btn-submit-final">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-link { color: ${colors.textBody}; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
                .btn-nav-calipso { background: ${colors.accent}; color: black; padding: 7px 15px; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 11px; }
                
                .section-title { font-size: 2rem; color: white; margin-bottom: 25px; font-weight: 800; border-left: 5px solid ${colors.accent}; padding-left: 15px; }

                /* CONTENEDOR MAESTRO TRASLÚCIDO */
                .main-glass-container { 
                    background: ${colors.bgGlass}; 
                    border-radius: 12px; 
                    border: 1px solid ${colors.borderGlass}; 
                    backdrop-filter: blur(8px);
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }

                .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1px; background: ${colors.borderGlass}; }
                
                .card-glass-item { background: rgba(0,0,0,0.2); text-decoration: none; transition: 0.3s; }
                .card-glass-item:hover { background: rgba(255,255,255,0.03); }
                .card-glass-item img { width: 100%; height: 220px; object-fit: cover; opacity: 0.8; transition: 0.5s; }
                .card-glass-item:hover img { opacity: 1; }

                .video-glass-wrapper { aspect-ratio: 16/9; background: #000; }

                /* INPUTS CON TEXTO CALIPSO */
                .calipso-input { 
                    padding: 16px; 
                    border-radius: 8px; 
                    border: 1px solid ${colors.accent}; 
                    background: rgba(0,0,0,0.3); 
                    color: white; 
                    outline: none; 
                    font-size: 15px;
                }
                .calipso-input::placeholder { 
                    color: ${colors.accent}; 
                    opacity: 0.8;
                }

                .btn-submit-final { 
                    background: ${colors.accent}; 
                    color: black; 
                    padding: 18px; 
                    border-radius: 8px; 
                    border: none; 
                    font-weight: 900; 
                    cursor: pointer; 
                    font-size: 14px; 
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    transition: 0.3s;
                }
                .btn-submit-final:hover { background: white; transform: scale(1.02); }

                .btn-full-calipso { 
                    background: ${colors.accent}; 
                    color: black; 
                    padding: 12px 30px; 
                    border-radius: 6px; 
                    font-weight: 800; 
                    text-decoration: none; 
                    display: inline-block; 
                }

                @media (max-width: 768px) {
                    .iframe-container { display: none; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisUltraPremium;