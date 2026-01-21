import React from 'react';
import Head from 'next/head';

const PrakxisBlackYellow = () => {
  // Paleta de colores "Industrial Tech"
  const theme = {
    bg: '#080808',        // Negro neutro profundo
    card: '#121212',      // Gris para tarjetas
    text: '#E5E5E5',      // Blanco humo
    muted: '#777777',     // Gris para detalles
    accent: '#FFD700',    // Amarillo Oro Eléctrico (Protagonista)
    accentLight: '#FFFB00', // Amarillo Neón para hovers
    border: '#222222'     // Bordes sutiles
  };

  const docs = [
    { id: 1, name: "Ingmar Bergman - El Silencio", file: "INGMAR_BERGMAN.pdf" },
    { id: 2, name: "Manifiesto Futurista - Luigi Russolo", file: "Russolo_Luigi_El_arte_de_los_ruidos_Manifiesto_Futurista.pdf" }
  ];

  return (
    <div style={{ backgroundColor: theme.bg, color: theme.text, minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Head>
        <title>PRAKXIS | Ciencia que Conecta</title>
      </Head>

      {/* NAVBAR */}
      <nav style={{ 
        borderBottom: `1px solid ${theme.border}`, 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(8, 8, 8, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: '900', letterSpacing: '3px', color: theme.accent }}>PRAKXIS</div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '0.85rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <a href="#prensa" className="nav-link">Prensa</a>
          <a href="#repositorio" className="nav-link">Repositorio</a>
          <a href="mailto:hola@prakxis.com" style={{ 
            color: theme.bg, 
            backgroundColor: theme.accent, 
            textDecoration: 'none', 
            padding: '8px 20px', 
            borderRadius: '2px', // Bordes rectos para look más industrial
            fontWeight: 'bold' 
          }}>Contacto</a>
        </div>
      </nav>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: '120px' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '900', 
            lineHeight: '1',
            marginBottom: '30px', 
            color: '#FFFFFF'
          }}>
            Ciencia que <span style={{ color: theme.accent }}>Conecta</span>
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: theme.accent, marginBottom: '30px' }}></div>
          <p style={{ fontSize: '1.25rem', color: theme.muted, maxWidth: '650px', lineHeight: '1.6' }}>
            Agencia de comunicación técnica y digital. Transformamos la complejidad científica en experiencias visuales de alto impacto.
          </p>
        </section>

        {/* REPOSITORIO */}
        <section id="repositorio" style={{ marginBottom: '100px' }}>
          <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', color: theme.accent, marginBottom: '40px', fontWeight: 'bold' }}>
            / Repositorio de Conocimiento
          </h2>
          <div className="grid">
            {docs.map(doc => (
              <a key={doc.id} href={`/docs/${doc.file}`} target="_blank" className="doc-card">
                <div>
                  <div style={{ fontSize: '0.7rem', color: theme.accent, marginBottom: '10px', fontWeight: 'bold' }}>[ DOCUMENTO_TÉCNICO ]</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', lineHeight: '1.3' }}>{doc.name}</div>
                </div>
                <div className="download-label">DESCARGAR PDF →</div>
              </a>
            ))}
          </div>
        </section>

        {/* PRENSA */}
        <section id="prensa">
          <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '3px', color: theme.accent, marginBottom: '40px', fontWeight: 'bold' }}>
            / Presencia en Medios
          </h2>
          <div style={{ 
            backgroundColor: theme.card, 
            padding: '50px', 
            borderRadius: '4px', 
            borderLeft: `4px solid ${theme.accent}`,
            border: `1px solid ${theme.border}` 
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Divulgación y Academia</h3>
            <p style={{ color: theme.muted, lineHeight: '1.8', fontSize: '1.1rem' }}>
              Colaboramos con instituciones para llevar el conocimiento fuera del laboratorio. 
              Nuestra metodología combina rigor académico con narrativa digital contemporánea.
            </p>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '80px 20px', borderTop: `1px solid ${theme.border}`, color: theme.muted, fontSize: '0.75rem', letterSpacing: '1px' }}>
        <span style={{ color: theme.accent }}>●</span> PRAKXIS SPA — 2026 — CHILE
      </footer>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: ${theme.accent};
        }
        .doc-card {
          background-color: ${theme.card};
          border: 1px solid ${theme.border};
          padding: 40px;
          text-decoration: none;
          color: white;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 200px;
        }
        .doc-card:hover {
          border-color: ${theme.accent};
          background-color: #1a1a1a;
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.05);
        }
        .download-label {
          margin-top: 30px;
          font-size: 0.75rem;
          color: ${theme.accent};
          font-weight: 800;
          letter-spacing: 1px;
        }
        @media (max-width: 768px) {
          h1 { font-size: 2.8rem !important; }
        }
      `}</style>
    </div>
  );
};

export default PrakxisBlackYellow;