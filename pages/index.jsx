import React from 'react';
import Head from 'next/head';

const IndexPrakxisSmartphonePro = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgGlass: 'rgba(255, 255, 255, 0.05)', // Traslucidez al 5%
        textTitle: '#FFFFFF', 
        textBody: '#E5E7EB',  
        accent: '#00F2FF',    // Calipso Prakxis
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
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            </Head>

            {/* NAVBAR OPTIMIZADA */}
            <nav style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.borderGlass}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.6)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '1px', color: colors.accent, fontSize: '1rem' }}>PRAKXIS</span>
                <a href="#contact" style={{ backgroundColor: colors.accent, color: 'black', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '10px' }}>CONTACTO</a>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 15px' }}>
                
                {/* HERO SMARTPHONE */}
                <section style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 10vw, 4.5rem)', fontWeight: '900', color: 'white', margin: 0, lineHeight: '1.1' }}>
                        Ciencia que <br/><span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                </section>

                {/* SECCIONES DINÁMICAS */}
                {[
                    { id: 'prensa', title: 'PRENSA', content: (
                        <div className="grid-mobile">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" className="glass-card">
                                    <img src={nota.img} alt={nota.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover', opacity: 0.8 }} />
                                    <div style={{ padding: '15px' }}>
                                        <small style={{ color: colors.accent, fontWeight: '800', display: 'block', marginBottom: '5px' }}>{nota.medio}</small>
                                        <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.4' }}>{nota.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )},
                    { id: 'diseno', title: 'DISEÑO', content: (
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <div className="desktop-only" style={{ marginBottom: '20px' }}>
                                <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="500px" style={{ border: 'none', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}></iframe>
                            </div>
                            <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-outline-mobile">VER PORTAFOLIO PDF</a>
                        </div>
                    )},
                    { id: 'audiovisual', title: 'AUDIOVISUAL', content: (
                        <div className="grid-mobile">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-container-mobile">
                                    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                </div>
                            ))}
                        </div>
                    )}
                ].map(section => (
                    <section key={section.id} id={section.id} style={{ padding: '30px 0' }}>
                        <h2 className="mobile-title">{section.title}</h2>
                        <div className="glass-panel-5">
                            {section.content}
                        </div>
                    </section>
                ))}

                {/* CONTACTO - OPTIMIZADO PARA PULGAR */}
                <section id="contact" style={{ padding: '40px 0 100px 0' }}>
                    <div className="glass-panel-5" style={{ padding: '40px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
                            <div style={{ width: '3px', height: '25px', backgroundColor: colors.accent }}></div>
                            <h2 style={{ fontSize: '1.5rem', color: 'white', margin: 0 }}>Conectemos</h2>
                        </div>
                        
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            
                            <input type="text" name="name" placeholder="Tu Nombre" required className="mobile-input" />
                            <input type="email" name="email" placeholder="Tu Email" required className="mobile-input" />
                            <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="4" required className="mobile-input"></textarea>
                            
                            <button type="submit" className="mobile-btn-submit">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .nav-link { display: none; }
                @media (min-width: 768px) {
                    .nav-link { display: inline; color: #BBB; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-right: 20px; }
                }

                .mobile-title { font-size: 1.2rem; color: white; margin-bottom: 15px; font-weight: 800; letter-spacing: 1px; }

                .glass-panel-5 { 
                    background: ${colors.bgGlass}; 
                    border-radius: 12px; 
                    border: 1px solid ${colors.borderGlass}; 
                    backdrop-filter: blur(4px);
                    overflow: hidden;
                }

                .grid-mobile { display: grid; grid-template-columns: 1fr; gap: 1px; background: ${colors.borderGlass}; }
                @media (min-width: 768px) { .grid-mobile { grid-template-columns: 1fr 1fr; } }

                .glass-card { background: rgba(0,0,0,0.1); text-decoration: none; color: white; transition: 0.3s; }
                
                .video-container-mobile { aspect-ratio: 16/9; background: #000; }

                .mobile-input { 
                    width: 100%;
                    padding: 14px; 
                    border-radius: 8px; 
                    border: 1px solid ${colors.accent}; 
                    background: transparent; 
                    color: white; 
                    font-size: 16px; /* Evita zoom automático en iPhone */
                    outline: none;
                    box-sizing: border-box;
                }
                .mobile-input::placeholder { color: ${colors.accent}; opacity: 0.7; }

                .mobile-btn-submit { 
                    background: ${colors.accent}; 
                    color: black; 
                    padding: 16px; 
                    border-radius: 8px; 
                    border: none; 
                    font-weight: 900; 
                    font-size: 14px;
                }

                .btn-outline-mobile {
                    display: inline-block;
                    border: 1px solid ${colors.accent};
                    color: ${colors.accent};
                    padding: 10px 20px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 13px;
                }

                @media (max-width: 768px) {
                    .desktop-only { display: none; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisSmartphonePro;