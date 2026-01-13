import React from 'react'

const Services4 = ({ data }) => {
    return (
        <div className="section-spacing pt-0">
            <div className="container" data-cues="fadeIn">
                {data.map((service, index) => (
                    <>
                        <hr className="hr-diagonal" />
                        <div key={index} className="py-4 py-lg-5 px-lg-4 px-xl-5 border-dark" data-hover-img={service.image}>
                            <div className="d-flex">
                                <div className="pe-4 pe-xl-5 icon-3xl">
                                    <i className={service.classIcon}></i>
                                </div>
                                <div>
                                    <div className="h1 display-2 font-family-tertiary">{service.title}</div>
                                    <ul className="list-inline-dot">
                                        {service.listItems.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <hr className="hr-diagonal" />
            </div>
        </div>
    )
}

export default Services4