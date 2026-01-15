const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonText('Enviando...');
    setStatusMessage({ type: '', text: '' });

    // Validación básica
    const formData = new FormData(form.current);
    const fromName = formData.get('from_name');
    const email = formData.get('reply_to');
    const message = formData.get('message');

    if (!fromName || !email || !message) {
        setSubmitButtonText('Enviar mensaje');
        setStatusMessage({ 
            type: 'error', 
            text: 'Por favor, completa todos los campos' 
        });
        return;
    }

    // Enviamos el formulario
    emailjs.sendForm(
        'service_f4cmbfs', 
        'template_o2v2x2p', 
        form.current, 
        'C78_XN9Y_f_t_8-t9'
    )
    .then((result) => {
        console.log('Email enviado:', result.text);
        setSubmitButtonText('Enviar mensaje');
        setStatusMessage({ 
            type: 'success', 
            text: '¡Mensaje enviado con éxito! Te responderemos pronto.' 
        });
        form.current.reset();
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
            setStatusMessage({ type: '', text: '' });
        }, 5000);
    })
    .catch((error) => {
        console.error("Error completo:", error);
        setSubmitButtonText('Enviar mensaje');
        setStatusMessage({ 
            type: 'error', 
            text: error.text || 'Error al enviar. Por favor, intenta nuevamente.' 
        });
    });
};