import React from 'react'

const Facts1 = ({ data }) => {
    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-12 col-md-6 col-xl-3">
                        <div className="pe-xl-2">
                            {data.skills.slice(0, 2).map((item, index) => (
                                <div key={index} className={`progress-box progress-gradient-1 ${index > 0 ? 'mt-4' : ''}`}>
                                    <h5>{item.title}</h5>
                                    <div className="animated-progress">
                                        <div data-progress={item.progress} className="progress-show" style={{ width: item.progress + '%'}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {data.achievements.map((item, index) => (
                        <div className="col-12 col-md-6 col-xl-3" key={index} data-cue="slideInUp">
                            <div className={`${index % 2 !== 0 ? 'bg-gradient-1' : 'bg-gradient-2'} bg-opacity-10 border-radius-1 p-4`}>
                                <div className="h2 display-4 font-family-tertiary fw-normal fst-italic text-dark-30"><span className="counter">{item.number}</span></div>
                                <div className="text-end">
                                    <div className="sm-heading h6 text-dark mb-0">{item.text}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Facts1