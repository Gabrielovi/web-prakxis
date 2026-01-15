import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero1 from '../components/Hero/Hero1';
import { heroData } from '../components/Hero/HeroData';
import HeaderTransparentLight from '../components/Header/HeaderTransparentLight';

// CARGA SEGURA: Esto evita el error de "client-side exception"
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const IndexBusiness = () => {
    const [mounted, setMounted] = useState(false);
    const [submitButtonText, setSubmitButtonText] = useState('Enviar mensaje');

    // Colores de tu nueva paleta
    const colors = {
        bg: '#0B0C10',
        bgSec: '#1F2833',
        text: '#C5C6C7',
        neon: '#66FCF1',
        muted: '#45A29E'
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    // --- LÓGICA PLEXUS REFORZADA ---
    let particles = [];
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth, 450).parent(canvasParentRef);
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: p5.random(p5.width),
                y: p5.random(p5.height),
                vx: p5.random(-0.6, 0.6),
                vy: p5.random(-0.6, 0.6)
            });
        }
    };

    const draw = (p5) => {
        p5.background(11, 12, 16); // #0B0C10
        particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > p5.width) p.vx *= -1;
            if (p.y < 0 || p.y > p5.height) p.vy *= -1;

            p5.noStroke();
            p5.fill(102, 252, 241, 180); // #66FCF1
            p5.circle(p.x, p.y, 3);

            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let d = p5.dist(p.x, p.y, p2.x, p2.y);
                if (d < 110) {
                    p5.stroke(102, 252, 241, p5.map(d, 0, 110, 150, 0));
                    p5.line(p.x, p.y, p2.x, p2.y);
                }
            }
        });
    };

    return (
        <div style={{ backgroundColor: colors.bg, color: colors.text, minHeight: '100vh' }}>
            <HeaderTransparentLight data={{
                menuItems: [
                    { text: 'Prensa', href: '#prensa' },
                    { text: 'Audiovisual', href: '#audiovisual' },
                    { text: 'Conexiones', href: '#diseno' },
                    { text: 'Contacto', href: '#contact' }
                ]
            }} />
            
            <main>
                <Hero1 data={heroData.business} />

                {/* SECCIÓN PLEXUS INTERACTIVA */}
                <section id="diseno" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
                    <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
                        <h2 className="display-4 fw-bold" style={{ color: colors.neon }}>Ciencia Generativa</h2>
                        <p className="lead" style={{ color: colors.text }}>Conectando datos, personas y conocimiento.</p>
                    </div>
                    {mounted && (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1, opacity: 0.6 }}>
                            <Sketch setup={setup} draw={draw} />
                        </div>
                    )}
                </section>

                {/* CONTENIDO (VIDEOS) */}
                <section id="prensa" style={{ padding: '80px 0', backgroundColor: colors.bgSec }}>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="ratio ratio-16x9 rounded-4 shadow-lg border border-secondary overflow-hidden">
                                    <iframe src="https://www.youtube.com/embed/VX789WILzkQ" title="Video 1" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ratio ratio-16x9 rounded-4 shadow-lg border border-secondary overflow-hidden">
                                    <iframe src="https://www.youtube.com/embed/byLR2SCeWo8" title="Video 2" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FORMULARIO ESTILO CYBERPUNK */}
                <section id="contact" style={{ padding: '100px 0' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 p-5 rounded-5" style={{ backgroundColor: colors.bgSec, border: `1px solid ${colors.neon}` }}>
                                <form action="https://api.web3forms.com/submit" method="POST">
                                    <input type="hidden" name="access_key" value="1c056454-ecb4-4447-ae36-84c91c6cf4bf" />
                                    <h3 className="text-center mb-4" style={{ color: colors.neon }}>Contáctanos</h3>
                                    <input type="text" name="name" className="form-control mb-3 cyberpunk-input" placeholder="Nombre" required />
                                    <input type="email" name="email" className="form-control mb-3 cyberpunk-input" placeholder="Email" required />
                                    <textarea name="message" className="form-control mb-4 cyberpunk-input" placeholder="Tu mensaje" rows="4" required></textarea>
                                    <button type="submit" className="btn w-100 fw-bold py-3" style={{ backgroundColor: colors.neon, color: colors.bg, borderRadius: '50px' }}>
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
                .cyberpunk-input {
                    background: #0B0C10 !important;
                    border: 1px solid #45A29E !important;
                    color: #C5C6C7 !important;
                }
                .cyberpunk-input:focus {
                    border-color: #66FCF1 !important;
                    box-shadow: 0 0 15px rgba(102, 252, 241, 0.3) !important;
                }
            `}</style>
        </div>
    );
};

export default IndexBusiness;