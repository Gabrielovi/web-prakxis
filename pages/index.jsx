import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f4cmbfs', 'template_o2v2x2p', form.current, 'C78_XN9Y_f_t_8-t9')
      .then((result) => {
          alert("¡Mensaje enviado con éxito a Prakxis!");
      }, (error) => {
          alert("Error al enviar: " + error.text);
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Contacto Prakxis</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre</label><br/>
          <input type="text" name="name" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label><br/>
          <input type="email" name="email" required style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mensaje</label><br/>
          <textarea name="message" required style={{ width: '100%', height: '100px', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}