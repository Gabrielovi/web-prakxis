import Image from 'next/image'
import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const About15 = ({ data }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {/* About */}
            <div className="section-spacing-sm">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <h1 className="display-5 fw-semi-bold uppercase mb-0">{data.title}</h1>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        {data.facts.map((fact, index) => (
                            <div className="col-12 col-sm-6 col-lg-3" key={index}>
                                <h2 className="display-4 font-family-tertiary mb-0">
                                    <span className="counter">{fact.value}</span>{fact.suffix}
                                </h2>
                                <p>{fact.label}</p>
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
                            <div className="lightbox-video">
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
                            <Image className="mt-md-4" src={data.image2.src} alt={data.image2.alt} loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About15