import React from 'react';
import Head from 'next/head';

const IndexPrakxisFinal = () => {
    const colors = {
        bgMain: '#0A0B0D',    
        bgGlass: 'rgba(255, 255, 255, 0.01)', 
        textTitle: '#FFFFFF', 
        textBody: '#E5E7EB',  
        accent: '#00F2FF',    
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
                <section style={{ padding: '100px 0 60px 0', textAlign: 'center' }}>
                    <h1 className="hero-title">Ciencia que <span style={{ color: colors.accent }}>conecta</span></h1>
                    <p style={{ color: colors.textBody, marginTop: '20px', fontSize: '1.2rem', fontWeight: '300' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIONES TRASLÚCIDAS */}
                {[
                    { id: 'prensa', title: 'Prensa', content: (
                        <div className="glass-grid">
                            {notasPrensa.map((nota, i) => (
                                <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="glass-item">
                                    <div className="img-container"><img src={nota.img} alt={nota.titulo} /></div>
                                    <div style={{ padding: '20px' }}>
                                        <small style={{ color: colors.accent, fontWeight: '800' }}>{nota.medio}</small>
                                        <h3 style={{ fontSize: '1rem', color: 'white', marginTop: '10px', lineHeight: '1.4' }}>{nota.titulo}</h3>
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
                            <h2 className="section-title-text">{section.title}</h2>
                        </div>
                        <div className="glass-panel-ultra">{section.content}</div>
                    </section>
                ))}

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

            {/* BOTÓN WHATSAPP */}
            <a href="https://wa.me/56932465215" target="_blank" rel="noopener noreferrer" className="wsp-float">
                <div className="wsp-tooltip">¿Tienes una pregunta?</div>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.135 1.389 4.793 1.391 5.421 0 9.833-4.412 9.833-9.832 0-2.628-1.023-5.097-2.88-6.956-1.857-1.859-4.325-2.883-6.953-2.883-5.422 0-9.835 4.412-9.835 9.832-.001 1.742.454 3.441 1.316 4.931l-1.011 3.693 3.73-1.005zm11.547-7.912c-.301-.151-1.781-.878-2.057-.978-.275-.1-.476-.151-.675.151-.199.302-.77.978-.944 1.179-.175.199-.349.226-.651.076-.301-.151-1.274-.47-2.426-1.5-.896-.799-1.5-1.787-1.675-2.089-.175-.301-.019-.465.131-.615.136-.135.301-.352.451-.527.151-.176.201-.302.302-.503.1-.199.05-.376-.025-.526-.075-.151-.675-1.631-.925-2.235-.243-.594-.49-.513-.675-.522-.174-.008-.374-.01-.574-.01s-.525.076-.8.377c-.275.301-1.05 1.029-1.05 2.511 0 1.481 1.075 2.912 1.225 3.112.15.201 2.115 3.23 5.123 4.527.714.309 1.272.494 1.707.633.718.227 1.37.194 1.887.118.576-.085 1.781-.728 2.031-1.43.25-.704.25-1.307.175-1.43-.075-.124-.275-.199-.575-.351z" />
                </svg>
            </a>

            <style jsx>{`
                .hero-title { font-size: clamp(1.8rem, 7vw, 4.2rem); font-weight: 900; color: white; margin: 0; white-space: nowrap; }
                .nav-desktop { display: flex; gap: 20px; }
                .nav-link { color: #CCC; text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 1px; }
                .btn-contacto-top { background: ${colors.accent}; color: black; padding: 8px 16px; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 11px; }
                .section-title-text { font-size: 1.4rem; color: white; margin: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
                .glass-panel-ultra { background: ${colors.bgGlass}; border-radius: 12px; border: 1px solid ${colors.borderGlass}; backdrop-filter: blur(8px); overflow: hidden; }
                .glass-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1px; background: ${colors.borderGlass}; }
                .glass-item { background: rgba(0,0,0,0.1); text-decoration: none; color: white; transition: 0.3s; }
                .img-container { height: 220px; overflow: hidden; }
                .img-container img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 0.5s; }
                .glass-item:hover img { opacity: 1; transform: scale(1.03); }
                .video-glass-box { aspect-ratio: 16/9; background: #000; }