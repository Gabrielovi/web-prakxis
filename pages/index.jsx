import React from 'react';
import Head from 'next/head';

const IndexPrakxisTotalPro = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgCard: 'rgba(30, 33, 38, 0.75)', 
        textTitle: '#FFFFFF', // Blanco puro para máxima elegibilidad
        textBody: '#D1D5DB',  
        accent: '#00F2FF',    // Calipso Prakxis
        border: 'rgba(255, 255, 255, 0.15)'     
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
            <nav style={{ padding: '15px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${colors.border}`, position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10,11,13,0.9)', backdropFilter: 'blur(10px)' }}>
                <span style={{ fontWeight: '900', letterSpacing: '2px', color: colors.accent, fontSize: '1.2rem' }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <a href="#prensa" className="nav-link">PRENSA</a>
                    <a href="#diseno" className="nav-link">DISEÑO</a>
                    <a href="#audiovisual" className="nav-link">VIDEOS</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: '#000', padding: '7px 15px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', fontSize: '11px' }}>CONTACTO</a>
                </div>
            </nav>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                {/* HERO */}
                <section style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)', fontWeight: '900', color: 'white', lineHeight: '1.1', margin: 0 }}>
                        Ciencia que <span style={{ color: colors.accent }}>conecta</span>
                    </h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIÓN PRENSA - AHORA CON EL CONTENEDOR PRO */}
                <section id="prensa" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Prensa</h2>
                    <div className="pro-container">
                        <div className="grid-layout">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-pro">
                                    <img src={nota.img} alt={nota.titulo} />
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: 'bold', textTransform: 'uppercase' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1.1rem', color: 'white', marginTop: '10px', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECCIÓN DISEÑO */}
                <section id="diseno" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Diseño</h2>
                    <div className="pro-container">
                        <div style={{ padding: '30px', borderBottom: `1px solid ${colors.border}` }}>
                            <h3 style={{ color: 'white', margin: 0 }}>Portafolio PRAKXIS 2026</h3>
                            <p style={{ color: colors.textBody, fontSize: '14px', margin: '10px 0 20px 0' }}>Archivo: 30dic.pdf</p>
                            <a href="/docs/diseno/30dic.pdf" target="_blank" className="btn-accent">Abrir Portafolio Completo</a>
                        </div>
                        <div className="preview-frame">
                            <iframe src="/docs/diseno/30dic.pdf#toolbar=0" width="100%" height="600px" style={{ border: 'none' }}></iframe>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL - TAMBIÉN CON CONTENEDOR PRO */}
                <section id="audiovisual" style={{ padding: '60px 0' }}>
                    <h2 className="section-title">Audiovisual</h2>
                    <div className="pro-container">
                        <div className="grid-layout">
                            {videosVimeo.map(id => (
                                <div key={id} className="video-wrapper">
                                    <iframe src={`https://player.vimeo.com/video/${id}`} frameBorder="0" allowFullScreen style={{ width: '100%', height: '100%' }}></iframe>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECCIÓN CONTACTO */}
                <section id="contact" style={{ padding: '100px 0' }}>
                    <div className="pro-container" style={{ padding: '60px 20px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '40px', fontWeight: '800' }}>Conectemos</h2>
                        <form action="https://api.web3forms.com/submit" method="POST" style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Tu Nombre" required className="input-field" />
                            <input type="email" name="email" placeholder="Tu Email" required className="input-field" />
                            <textarea name="message" placeholder="¿En qué podemos ayudarte?" rows="5" required className="input-field"></textarea>
                            <button type="submit" className="btn-submit">ENVIAR</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '60px 20px', textAlign: 'center', color: colors.textBody, fontSize: '11px', opacity: 0.6 }}>
                PRAKXIS SPA © 2026 | CIENCIA & NARRATIVAS VISUALES
            </footer>

            <style jsx>{`
                .nav-link { color: ${colors.textBody}; text-decoration: none; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
                .nav-link:hover { color: ${colors.accent}; }
                
                .section-title { font-size: 2.2rem; color: ${colors.textTitle}; margin-bottom: 30px; font-weight: 900; border-left: 6px solid ${colors.accent}; padding-left: 20px; letter-spacing: -1px; }
                
                .pro-container { background: ${colors.bgCard}; border-radius: 16px; border: 1px solid ${colors.accent}; overflow: hidden; backdrop-filter: blur(12px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
                
                .grid-layout { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1px; background: ${colors.border}; }
                
                .card-pro { background: ${colors.bgMain}; text-decoration: none; transition: 0.4s; overflow: hidden; }
                .card-pro:hover { background: rgba(0, 242, 255, 0.05); }
                .card-pro img { width: 100%; height: 200px; object-fit: cover; filter: grayscale(20%); transition: 0.5s; }
                .card-pro:hover img { filter: grayscale(0%); transform: scale(1.05); }
                
                .video-wrapper { background: black; aspect-ratio: 16/9; }
                
                .btn-accent { background: ${colors.accent}; color: black; padding: 12px 25px; border-radius: 6px; font-weight: 800; text-decoration: none; display: inline-block; transition: 0.3s; }
                .btn-accent:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 242, 255, 0.4); }
                
                .input-field { padding: 16px; borderRadius: 8px; border: 1px solid ${colors.border}; backgroundColor: rgba(255,255,255,0.03); color: white; outline: none; font-family: inherit; transition: 0.3s; }
                .input-field:focus { border-color: ${colors.accent}; background: rgba(255,255,255,0.07); }
                
                .btn-submit { background: ${colors.accent}; color: black; padding: 18px; borderRadius: 8px; fontWeight: 900; border: none; cursor: pointer; transition: 0.3s; letter-spacing: 1px; }
                .btn-submit:hover { letter-spacing: 3px; background: white; }

                @media (max-width: 768px) {
                    .preview-frame { display: none; }
                    .section-title { font-size: 1.8rem; }
                }
            `}</style>
        </div>
    );
};

export default IndexPrakxisTotalPro;