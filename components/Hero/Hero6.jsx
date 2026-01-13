import React, { useEffect } from 'react';
import Image from 'next/image';
import { Lightbox } from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const Hero6 = ({ data }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="section-spacing-sm pb-0">
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-xl-8">
                        <h1 className="display-1 fw-semi-bold uppercase">{data.title}</h1>
                    </div>
                    <div className="col-12 col-xl-4 text-xl-end">
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-xl-12">
                                <h2 className="display-5 font-family-tertiary mb-0">{data.text1.number}</h2>
                                <p>{data.text1.text}</p>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-12">
                                <h2 className="display-5 font-family-tertiary mb-0"><span className="counter">{data.text2.number}</span></h2>
                                <p>{data.text2.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="lightbox-video img-mask-1">
                        <Image src={data.image.src} alt={data.image.alt} loading="lazy" />
                        <button className="glightbox lightbox-play-btn" onClick={() => setOpen(true)}>
                            <i className="bi bi-play"></i>
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
            </div>
        </div>
    );
};

export default Hero6;
