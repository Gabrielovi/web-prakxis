import React from 'react';
import Head from 'next/head';

const PrakxisBlackAndYellow = () => {
  const theme = {
    bg: '#080808',
    card: '#121212',
    text: '#E5E5E5',
    muted: '#777777',
    accent: '#FFFB00', // Amarillo vibrante
    border: '#222222'
  };

  const docs = [
    { id: 1, name: "Ingmar Bergman - El Silencio", file: "INGMAR_BERGMAN.pdf" },
    { id: 2, name: "Manifiesto Futurista - El Arte de los Ruidos", file: "Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
  ];

  const videos = [
    { id: 1, title: "Registro Audiovisual I", url: "https://www.youtube.com/embed/9X5zX_5R_6k" },
    { id: 2, title: "Registro Audiovisual II", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" } // Reemplazar por tus IDs reales si estos eran de prueba
  ];

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Head>
        <title>PRAKXIS | Ciencia que Conecta</title>
      </Head>

      <nav style={{ 
        borderBottom: `1px solid ${theme.border}`, padding: '20px 40px', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, 
        backgroundColor: 'rgba(8, 8, 8, 0.9)', backdropFilter: 'blur(10px)', zIndex: 100 
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', letterSpacing: '3px', color: theme.accent }}>PRAKXIS</div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase' }}>
          <a href="#prensa" className="nav-link">Prensa</a>
          <a href="#audiovisual" className="nav-link">Audiovisual</a>
          <a href="#repositorio" className="nav-link">Repositorio</a>
        </div>
      </nav>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        
        <section style={{ marginBottom: '100px' }}>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', color: '#FFF' }}>
            Ciencia que <span style={{ color: theme.accent }}>Conecta</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: theme.muted, maxWidth: '600px' }}>
            Comunicación técnica y digital. Transformamos la complejidad científica en experiencias visuales.
          </p>
        </section>

        {/* AUDIOVISUAL */}
        <section id="audiovisual" style={{ marginBottom: '100px' }}>
          <h2 style={{ color: theme.accent, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '30px' }}>/ REGISTRO AUDIOVISUAL</h2>
          <div className="video-grid">
            {videos.map(video => (
              <div key={video.id} className="video-container">
                <iframe 
                  width="100%" height="315" 
                  src={video.url} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <p style={{ marginTop: '15px', fontSize: '0.9rem', color: theme.accent, fontWeight: 'bold' }}>{video.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRENSA */}
        <section id="prensa" style={{ marginBottom: '100px' }}>
          <h2 style={{ color: theme.accent, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '30px' }}>/ PRENSA</h2>
          <div className="grid">
            <div className="card">
              <h3 style={{ color: 'white' }}>Entrevista Diario Regional</h3>
              <p style={{ color: theme.muted }}>Análisis sobre la comunicación de las ciencias en el sur de Chile.</p>
              <span style={{ color: theme.accent, fontSize: '0.8rem' }}>LEER ARTÍCULO →</span>
            </div>
          </div>
        </section>

        {/* REPOSITORIO */}
        <section id="repositorio">
          <h2 style={{ color: theme.accent, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '30px' }}>/ REPOSITORIO</h2>
          <div className="grid">
            {docs.map(doc => (
              <a key={doc.id} href={`/docs/${doc.file}`} target="_blank" className="card link-card">
                <span style={{ fontSize: '0.7rem', color: theme.accent }}>[ DOCUMENTO ]</span>
                <div style={{ fontSize: '1.1rem', marginTop: '10px', color: 'white' }}>{doc.name}</div>
                <div style={{ marginTop: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: theme.accent }}>DESCARGAR →</div>
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '60px', borderTop: `1px solid ${theme.border}`, color: theme.muted, fontSize: '0.8rem' }}>
        PRAKXIS SPA — 2026 — <span style={{ color: theme.accent }}>CONTENIDO TÉCNICO</span>
      </footer>

      <style jsx>{`
        .nav-link { color: white; text-decoration: none; transition: 0.3s; }
        .nav-link:hover { color: ${theme.accent}; }
        .grid, .video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .card { 
          background: ${theme.card}; border: 1px solid ${theme.border}; 
          padding: 30px; text-decoration: none; transition: 0.4s;
        }
        .link-card:hover { border-color: ${theme.accent}; transform: scale(1.02); }
        .video-container { background: ${theme.card}; padding: 15px; border: 1px solid ${theme.border}; }
      `}</style>
    </div>
  );
};

export default PrakxisBlackAndYellow;