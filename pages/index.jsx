import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Necesario para cargar p5 solo en el cliente
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

// Importación dinámica de p5 para evitar errores de servidor
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const IndexBusiness = () => {
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const colors = {
        bg: '#0B0C10',
        bgSecondary: '#1F2833',
        text: '#C5C6C7',
        accent: '#66FCF1', // Cian Neón
        accentMuted: '#45A29E'
    };

    // --- LÓGICA DEL EFECTO PLEXUS ---
    let particles = [];
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, 400).parent(canvasParentRef);
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: p5.random(p5.width),
                y: p5.random(p5.height),
                vx: p5.random(-0.5, 0.5),
                vy: p5.random(-0.5, 0.5)
            });
        }
    };

    const draw = (p5) => {
        p5.background(11, 12, 16); // Color #0B0C10
        
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > p5.width) p.vx *= -1;
            if (p.y < 0 || p.y > p5.height) p.vy *= -1;

            p5.noStroke();
            p5.fill(102, 252, 241, 150); // Accent color
            p5.circle(p.x, p.y, 3);

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const d = p5.dist(p.x, p.y, p2.x, p2.y);
                if (d < 120) {
                    p5.stroke(102, 252, 241, p5.map(d, 0, 120, 100, 0));
                    p5.line(p.x, p.y, p2.x, p2.y);
                }
            }
        });
    };
    // --------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonText('Enviando...');
        const formData = new FormData(e.target);
        formData.append("access_key", "1c056454-ecb4-4447-ae36-84c91c6cf4bf"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'success', text: '¡CONEXIÓN EXITOSA!' });
                e.target.reset();
            } else {
                setSubmitButtonText('Enviar mensaje');
                setStatusMessage({ type: 'error', text: 'Error al enviar.' });
            }
        } catch (error) {
            setSubmitButtonText('Enviar mensaje');
            setStatusMessage({ type: 'error', text: 'Error de red.' });
        }
    };

    return (
        <div className="main-page-wrapper" style={{ backgroundColor: colors.bg, color: colors.text }}>
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Inicio', href: '/' },
                    { text: 'Prensa', href: '#prensa' },
                    { text: 'Audiovisual', href: '#audiovisual' },
                    { text: 'Conexiones', href: '#diseno' },
                    { text: 'Contacto', href: '#contact' }
                ]
            }} />
            
            <main>
                <Hero1 data={heroData.business} />

                {/* SECCIÓN PRENSA */}
                <section id="prensa" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="fw-bold display-5" style={{ color: colors.accent }}>Narrativa de Datos</h2>
                                <p className="lead">Investigación periodística con rigor científico y estética digital.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="ratio ratio-16x9 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.accentMuted}` }}>
                                    <iframe src="https://www.youtube.com/embed/VX789WILzkQ" title="Guardianes" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECCIÓN PLEXUS (CIENCIA GENERATIVA) */}
                <section id="diseno" style={{ backgroundColor: colors.bg }}>
                    <div className="container-fluid p-0" style={{ position: 'relative', height: '400px' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, textAlign: 'center', pointerEvents: 'none' }}>
                            <h2 className="display-4 fw-bold" style={{ color: colors.accent, textShadow: '0 0 20px rgba(102, 252, 241, 0.5)' }}>Ciencia Conectada</h2>
                            <p className="lead">Visualización generativa en tiempo real.</p>
                        </div>
                        <Sketch setup={setup} draw={draw} />
                    </div>
                </section>

                {/* CONTACTO */}
                <section id="contact" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 p-5 shadow-lg" style={{ backgroundColor: colors.bgSecondary, borderRadius: '20px', border: `1px solid ${colors.accent}` }}>
                                <form onSubmit={handleSubmit}>
                                    <h3 className="text-center mb-4" style={{ color: colors.accent }}>Inicia la Conversación</h3>
                                    <input type="text" name="name" className="form-control mb-3 custom-input" placeholder="Nombre" required />
                                    <input type="email" name="email" className="form-control mb-3 custom-input" placeholder="Email" required />
                                    <textarea name="message" className="form-control mb-4 custom-input" placeholder="¿Qué conectamos hoy?" required rows="4"></textarea>
                                    <button type="submit" className="btn w-100 py-3" style={{ backgroundColor: colors.accent, color: colors.bg, fontWeight: 'bold', borderRadius: '30px' }}>
                                        {submitButtonText}
                                    </button>
                                    {statusMessage.text && <div className="text-center mt-3" style={{ color: colors.accent }}>{statusMessage.text}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .custom-input { background-color: #0B0C10 !important; border: 1px solid #45A29E !important; color: #C5C6C7 !important; }
                .custom-input:focus { border-color: #66FCF1 !important; box-shadow: 0 0 10px rgba(102, 252, 241, 0.2) !important; }
            `}</style>
        </div>
    );
};

export default IndexBusiness;