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
            // Ruta local + una imagen de internet de respaldo (por si no has subido la local)
            img: "/images/prensa/ufro_salud.jpg",
            fallback: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
        },
        {
            titulo: "Nuevo libro 'Del despojo surge la esperanza'",
            url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233",
            medio: "Araucanía Noticias",
            img: "/images/prensa/libro_despojo.jpg",
            fallback: "https://images.unsplash.com/photo-1452423668729-43a98052d3ee?auto=format&fit=crop&w=800&q=80"
        }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"];

    return (
        <div style={{ backgroundColor: colors.bgLight, color: colors.textDark, minHeight: '100vh', fontFamily: 'sans-serif' }}>
            
            {/* CABECERA NEGRA */}
            <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.bgDark, position: 'sticky', top: 0, zIndex: 1000 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/images/logo/logo_01.png" alt="Prakxis" style={{ height: '35px', filter: 'brightness(0) invert(1)' }} />
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: '2px' }}>PRAKXIS</span>
                </div>
                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: colors.textLight, textDecoration: 'none', fontSize: '14px' }}>Prensa</a>
                    <a href="#diseno" style={{ color: colors.textLight, textDecoration: 'none', fontSize: '14px' }}>Diseño</a>
                    <a href="#audiovisual" style={{ color: colors.textLight, textDecoration: 'none', fontSize: '14px' }}>Audiovisual</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: colors.bgDark, padding: '8px 20px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Conectemos</a>
                </div>
            </nav>

            <main>
                <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                    <h1 style={{ fontSize: '3.5rem', color: colors.accent, fontWeight: 'bold' }}>Ciencia que conecta</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.8, marginTop: '10px' }}>Narrativas visuales con rigor científico.</p>
                </section>

                <section id="prensa" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.bgDark, marginBottom: '40px', fontSize: '1.8rem', borderLeft: `5px solid ${colors.accent}`, paddingLeft: '15px' }}>Reportajes de Prensa</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" rel="noopener noreferrer" className="card-nota" style={{ backgroundColor: 'white', borderRadius: '15px', textDecoration: 'none', overflow: 'hidden', border: `1px solid ${colors.border}`, display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <div style={{ height: '200px', backgroundColor: '#eee' }}>
                                    <img 
                                        src={nota.img} 
                                        alt={nota.titulo} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                        onError={(e) => { e.target.src = nota.fallback; }} // Si no encuentra la local, usa la web
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <small style={{ color: colors.neon, fontWeight: 'bold', textTransform: 'uppercase' }}>{nota.medio}</small>
                                    <h3 style={{ color: colors.textDark, marginTop: '10px', fontSize: '1.1rem', lineHeight: '1.4' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ESPACIO DISEÑO */}
                <section id="diseno" style={{ padding: '80px 20px', backgroundColor: colors.bgSec }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ color: colors.bgDark, marginBottom: '20px' }}>Diseño y Visualización</h2>
                        <div style={{ height: '300px', backgroundColor: 'white', borderRadius: '20px', border: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.border }}>
                             [ Galería de Portafolio ]
                        </div>
                    </div>
                </section>

                {/* ESPACIO AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ color: colors.bgDark, marginBottom: '40px', fontSize: '1.8rem' }}>Producción Audiovisual</h2>
                    <div style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }} className="scroll-custom">
                        {videosAudiovisual.map(id => (
                            <div key={id} style={{ minWidth: '85%', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.border}` }}>
                                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} src={`https://www.youtube.com/embed/${id}`} allowFullScreen></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" style={{ padding: '100px 20px', backgroundColor: colors.bgDark }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', borderRadius: '30px', border: `1px solid ${colors.accent}`, backgroundColor: 'white' }}>
                        <h3 style={{ color: colors.bgDark, textAlign: 'center', marginBottom: '30px', fontWeight: 'bold', fontSize: '2rem' }}>Conectemos</h3>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                            <input type="text" name="name" placeholder="Nombre" required style={inputStyle} />
                            <input type="email" name="email" placeholder="Email" required style={inputStyle} />
                            <textarea name="message" placeholder="¿Cómo podemos colaborar?" rows="4" required style={inputStyle}></textarea>
                            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: colors.accent, color: colors.bgDark, border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', backgroundColor: colors.bgDark, color: 'white' }}>
                <p style={{ fontSize: '12px', opacity: 0.5 }}>© 2026 PRAKXIS - Science for Everyone</p>
            </footer>

            <style jsx>{`
                .scroll-custom::-webkit-scrollbar { height: 6px; }
                .scroll-custom::-webkit-scrollbar-thumb { background: #66FCF1; border-radius: 10px; }
                .card-nota:hover { transform: translateY(-5px); transition: 0.3s ease; }
            `}</style>
        </div>
    );
};

const inputStyle = {
    width: '100%', padding: '15px', marginBottom: '20px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', color: '#333', borderRadius: '12px', outline: 'none'
};

export default IndexBusiness;