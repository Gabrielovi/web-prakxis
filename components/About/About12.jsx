import React from 'react'

const About12 = ({ data, className, gradient1, gradient5 }) => {
    return (
        <div className={`section-spacing ${className}`}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-12 col-lg-4">
                        <div className="circle-text rotating">
                            <svg viewBox="0 0 200 200" className="circle-svg">
                                <path
                                    id="textPath"
                                    d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                                    transform="translate(100,100)"
                                    fill="none"
                                    stroke={`${gradient1 ? 'rgba(80, 12, 127, 0.15)' : gradient5 ? 'rgba(255, 89, 136, 0.15)' : 'rgba(15, 47, 64, 0.1)'}`}
                                    strokeWidth="10"
                                ></path>
                                <text textAnchor="start">
                                    <textPath xlinkHref="#textPath" textLength="300%">
                                        {data.textPath}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        {data.features.map((feature, index) => (
                            <div key={index} className="d-flex align-items-center mt-3" data-cue="slideInRight">
                                <div className={`icon-3xl ${gradient1 ? 'text-gradient-1' : gradient5 ? 'text-gradient-5' : ''} pe-4`}>
                                    <i className="ti-check-box"></i>
                                </div>
                                <p>{feature.text}</p>
                            </div>
                        ))}
                        <div className="row g-4 mt-2">
                            {data.progressBars.map((progress, index) => (
                                <div key={index} className="col-12 col-md-6">
                                    <div className={`progress-box ${gradient1 ? 'progress-gradient-1' : gradient5 ? 'progress-gradient-5' : ''}`}>
                                        <h5>{progress.label}</h5>
                                        <div className="animated-progress">
                                            <div data-progress={progress.value} className="progress-show" style={{ width: `${progress.value}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About12