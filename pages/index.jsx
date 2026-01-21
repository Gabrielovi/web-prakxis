import React from 'react';
import Head from 'next/head';

const PrakxisFinalDark = () => {
    // Paleta de colores basada en tus capturas pero en MODO OSCURO (Negro + Amarillo)
    const colors = {
        bgDark: '#080808',      // Fondo principal negro
        bgCard: '#121212',      // Fondo de tarjetas
        textMain: '#FFFFFF',    // Texto blanco
        textMuted: '#A0A0A0',   // Texto gris secundario
        accent: '#FFFB00',      // Amarillo Neón (Protagonista)
        border: '#222222'       // Bordes sutiles
    };

    const notasPrensa = [
        { titulo: "UFRO presentó plataforma georreferenciada de salud pública", url: "https://contactosalud.cl/ufro-presento-plataforma-georreferenciada-de-salud-publica-a-municipios-e-instituciones-regionales/", medio: "Contacto Salud", img: "/images/prensa/ufro_salud.jpg" },
        { titulo: "Nuevo libro 'Del despojo surge la esperanza'", url: "https://araucanianoticias.cl/2026/nuevo-libro-del-despojo-surge-la-esperanza-releva-las-historias-de-vida-de-mujeres-sindicalistas-de-la-araucana/0113298233", medio: "Araucanía Noticias", img: "/images/prensa/libro_despojo.jpg" }
    ];

    const videosAudiovisual = ["VX789WILzkQ", "byLR2SCeWo8"]; // Los IDs de tus videos

    const documentos = [
        { tipo: "Documento", titulo: "Ingmar Bergman", link: "/docs/INGMAR_BERGMAN.pdf" },
        { tipo: "Manifiesto", titulo: "El arte de los ruidos - Luigi Russolo", link: "/docs/Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
    ];

    return (
        <div style={{ backgroundColor: colors.bgDark, color: colors.textMain, minHeight: '100vh', fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>
            <Head>
                <title>PRAKXIS | Ciencia que conecta</title>
                <meta name="description" content="Narrativas visuales con rigor científico." />
            </Head>

            {/* NAVBAR (Basada en tu captura 3) */}
            <nav style={{ backgroundColor: 'rgba(8,8,8,0.9)', backdropFilter: 'blur(10px)', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 1000, borderBottom: `1px solid ${colors.border}` }}>
                <span style={{ fontWeight: '900', fontSize: '1.4rem', letterSpacing: '2px', color: colors.accent }}>PRAKXIS</span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <a href="#prensa" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', textTransform: 'uppercase' }}>Prensa</a>
                    <a href="#diseno" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', textTransform: 'uppercase' }}>Diseño</a>
                    <a href="#audiovisual" style={{ color: 'white', textDecoration: 'none', fontSize: '12px', textTransform: 'uppercase' }}>Audiovisual</a>
                    <a href="#contact" style={{ backgroundColor: colors.accent, color: 'black', padding: '6px 15px', borderRadius: '20px', fontWeight: 'bold', textDecoration: 'none', fontSize: '12px' }}>CONTACTO</a>
                </div>
            </nav>

            <main>
                {/* HERO SECTION */}
                <section style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px' }}>Ciencia que <span style={{ color: colors.accent }}>conecta</span></h1>
                    <p style={{ color: colors.textMuted, fontSize: '1.2rem' }}>Narrativas visuales con rigor científico.</p>
                </section>

                {/* SECCIÓN PRENSA (Tal cual la foto) */}
                <section id="prensa" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1rem', borderLeft: `4px solid ${colors.accent}`, paddingLeft: '15px', marginBottom: '30px', textTransform: 'uppercase' }}>Reportajes de Prensa</h2>
                    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
                        {notasPrensa.map((nota, i) => (
                            <a key={i} href={nota.url} target="_blank" style={{ minWidth: '350px', backgroundColor: colors.bgCard, borderRadius: '12px', textDecoration: 'none', overflow: 'hidden', border: `1px solid ${colors.border}` }}>
                                <img src={nota.img} alt={nota.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover' }} onError={(e) => e.target.src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"} />
                                <div style={{ padding: '20px' }}>
                                    <small style={{ color: colors.accent, fontWeight: 'bold' }}>{nota.medio}</small>
                                    <h3 style={{ color: 'white', fontSize: '1.1rem', marginTop: '10px' }}>{nota.titulo}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SECCIÓN DISEÑO */}
                <section id="diseno" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#0F0F0F' }}>
                    <h2 style={{ fontSize: '1rem', marginBottom: '40px' }}>DISEÑO Y VISUALIZACIÓN</h2>
                    <div style={{ border: `1px dashed ${colors.border}`, padding: '60px', borderRadius: '20px', color: colors.textMuted }}>
                        PORTAFOLIO EN DESARROLLO
                    </div>
                </section>

                {/* SECCIÓN AUDIOVISUAL */}
                <section id="audiovisual" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1rem', borderLeft: `4px solid ${colors.accent}`, paddingLeft: '15px', marginBottom: '30px' }}>PRODUCCIÓN AUDIOVISUAL</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        {videosAudiovisual.map(id => (
                            <div key={id} style={{ backgroundColor: colors.bgCard, padding: '10px', borderRadius: '10px', border: `1px solid ${colors.border}` }}>
                                <iframe width="100%" height="250" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allowFullScreen style={{ borderRadius: '8px' }}></iframe>
                            </div>
                        ))}
                    </div>
                </section>

                {/* REPOSITORIO */}
                <section id="repositorio" style={{ padding: '80px 20px', backgroundColor: '#0F0F0F' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '1rem', marginBottom: '30px' }}>REPOSITORIO</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                            {documentos.map((doc, i) => (
                                <a key={i} href={doc.link} download style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: colors.bgDark, padding: '20px', borderRadius: '12px', border: `1px solid ${colors.border}`, textDecoration: 'none', color: 'white' }}>
                                    <span style={{ fontSize: '24px' }}>📄</span>
                                    <div>
                                        <small style={{ color: colors.accent, fontWeight: 'bold' }}>{doc.tipo}</small>
                                        <p style={{ margin: 0 }}>{doc.titulo}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer style={{ padding: '40px', textAlign: 'center', borderTop: `1px solid ${colors.border}`, color: colors.textMuted, fontSize: '10px' }}>
                © 2026 PRAKXIS | CIENCIA & NARRATIVAS
            </footer>

            <style jsx>{`
                a { transition: all 0.3s ease; }
                a:hover { transform: translateY(-5px); border-color: ${colors.accent} !important; }
            `}</style>
        </div>
    );
};

export default PrakxisFinalDark;