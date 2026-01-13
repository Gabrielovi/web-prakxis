import React from 'react'

const HeroBusiness = ({ data }) => {
    return (
        <div className="bg-image parallax" style={{ backgroundImage: `url(${data.backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
            <div className="section-spacing-xl bg-black-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            
                            {/* TÍTULO EN UNA SOLA LÍNEA */}
                            <h1 className="display-2 fw-bold uppercase text-white mb-4">
                                {data.text1} <span className="stroke-text font-family-poppins">{data.text2}</span> {data.text3}
                            </h1>

                            {/* BAJADA DE TEXTO */}
                            {data.description && (
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10">
                                        <p className="lead text-white fw-light mb-0" style={{ fontSize: '1.6rem', opacity: '0.9', lineHeight: '1.4' }}>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBusiness