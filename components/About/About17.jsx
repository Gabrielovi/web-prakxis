import Image from 'next/image'
import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";


const About17 = ({ data }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {/* About */}
            <div className="section-spacing">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <h1 className="display-6 fw-normal mb-0">{data.title}</h1>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="row g-4 mt-3">
                        {data.facts.map((fact, index) => (
                            <div key={index} className="col-12 col-md-6 col-xl-3">
                                <div className={`bg-gradient-${fact.gradient} bg-opacity-10 border-radius-1 p-4 backdrop-filter-blur`}>
                                    <div className="h2 display-4 fw-light text-dark"><span className="counter">{fact.value}</span>{fact.suffix}</div>
                                    <div className="text-end">
                                        <div className="sm-heading text-dark">{fact.label}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="section-spacing pt-0">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-6">
                            <div className="lightbox-video border-radius-1">
                                <Image src={data.image1.src} alt={data.image1.alt} loading="lazy" />
                                <button className="glightbox lightbox-play-btn" onClick={() => setOpen(true)}>
                                    <i className="bi bi-play-fill"></i>
                                </button>
                                <Lightbox
                                    plugins={[Video]}
                                    open={open}
                                    close={() => setOpen(false)}
                                    slides={[
                                        {
                                            type: "video",
                                            width: 1280,
                                            height: 720,
                                            sources: [
                                                {
                                                    src: data.videoSrc,
                                                    type: "video/mp4",
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <Image className="border-radius-1 mt-md-4" src={data.image2.src} alt={data.image2.alt} loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About17