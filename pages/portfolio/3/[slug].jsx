import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import Lightbox from 'yet-another-react-lightbox'
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { BackgroundVerticalLines, Cursor, Footer6, HeaderCenter2, ScrollToTop, SimilarProjects } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { footerData } from '@/components/Footer/FooterData';

const PagePortfolioSingle3 = ({ project }) => {
    const [imageOpen, setImageOpen] = useState(false);
    const [videoOpen, setVideoOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setImageOpen(true);
    };

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-iceblue');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-iceblue');
        };
    }, []);
    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.description} />
                <meta name="keywords" content={project.keywords} />
            </Head>

            {/* Header */}
            <HeaderCenter2 data={headerData.mediaAgency} dark />

            <main>
                {/* Project Title */}
                <div className="px-3 px-md-4 px-xxl-5">
                    <div className="bg-image parallax" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                        <div className="section-spacing-xl bg-black-40">
                            <div className="container pb-5 pt-lg-4 pt-xl-5">
                                <div className="row">
                                    <div className="col-12 col-lg-10 offset-lg-1">
                                        <h1 className="display-3 fw-medium text-center uppercase">{project.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 start-0 w-100 text-lg-center">
                                <div className="row g-0">
                                    <div className="col-6 col-lg-3">
                                        <div className="px-4 pb-4">
                                            <span className="d-block sm-heading text-white">Services</span>
                                            <span>{project.services.map(service => service.name).join(', ')}</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="px-4 pb-4">
                                            <span className="d-block sm-heading text-white">Client</span>
                                            <span>{project.client}</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="px-4 pb-4">
                                            <span className="d-block sm-heading text-white">Duration</span>
                                            <span>{project.duration}</span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-3">
                                        <div className="px-4 pb-4">
                                            <span className="d-block sm-heading text-white">Project Link</span>
                                            <a className="link-hover-line" href={project.projectLink.url}>{project.projectLink.title}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project details */}
                <div className="section-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                {/* Content */}
                                <div dangerouslySetInnerHTML={{ __html: project.content }} />

                                {/* Lightbox Images */}
                                <div className="row g-3 mt-3">
                                    {project.media.map((image, index) => (
                                        <div key={index} className="col-12 col-md-6">
                                            <div className="img-link-box">
                                                <a className="glightbox" onClick={() => handleImageClick(index)}>
                                                    <Image src={image.image} alt={image.alt} width={515} height={321} loading="lazy" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Lightbox for Images */}
                                <Lightbox
                                    open={imageOpen}
                                    onClose={() => setImageOpen(false)}
                                    startIndex={currentIndex}
                                    slides={project.media.map(image => ({ src: image.image.src, title: image.alt }))}
                                />

                                {/* Content 2 */}
                                <div dangerouslySetInnerHTML={{ __html: project.content2 }} />

                                {/* Lightbox Video */}
                                <div className="lightbox-video mt-4 mt-lg-5">
                                    <Image src={project.videoImage} alt="Video Thumbnail" width={1046} height={415} />
                                    <button className="glightbox lightbox-play-btn" onClick={() => setVideoOpen(true)}>
                                        <i className="bi bi-play"></i>
                                    </button>
                                    <Lightbox
                                        plugins={[Video]}
                                        open={videoOpen}
                                        onClose={() => setVideoOpen(false)}
                                        slides={[
                                            {
                                                type: "video",
                                                width: 1280,
                                                height: 720,
                                                sources: [
                                                    {
                                                        src: project.videoSrc,
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
                </div>

                {/* Hr diagonal */}
                <hr className="hr-diagonal" />

                {/* Similar Posts */}
                <SimilarProjects />

                {/* Footer */}
                <Footer6 data={footerData.portfolio} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />

            {/* Background Vertical lines */}
            <BackgroundVerticalLines />
        </>
    )
}

export async function getStaticPaths() {
    const sections = [
        portfolioData.creativeAgency.projects,
        portfolioData.interior.projects,
        portfolioData.portfolioFullWidth.projects,
        portfolioData.portfolioGrid.projects,
        portfolioData.portfolioHorizontal.projects,
        portfolioData.portfolioVertical.projects,
        portfolioData.mediaAgencyPortfolio.projects,
    ];

    const paths = sections.flatMap((projects) =>
        projects.map((project) => ({ params: { slug: project.slug } }))
    );

    return {
        paths,
        fallback: false,
    };
}


export async function getStaticProps({ params }) {
    const slug = params.slug;

    // Search for the Portfolio project with the matching slug in the creativeAgency section
    const creativeAgencyProjects = portfolioData.creativeAgency.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the interior section
    const interiorProjects = portfolioData.interior.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the portfolioFullWidth section
    const portfolioFullWidthProjects = portfolioData.portfolioFullWidth.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the portfolioGrid section
    const portfolioGridProjects = portfolioData.portfolioGrid.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the portfolioHorizontal section
    const portfolioHorizontalProjects = portfolioData.portfolioHorizontal.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the portfolioVertical section
    const portfolioVerticalProjects = portfolioData.portfolioVertical.projects.find((project) => project.slug === slug);
    // Search for the Portfolio project with the matching slug in the mediaAgencyPortfolio section
    const mediaAgencyPortfolioProjects = portfolioData.mediaAgencyPortfolio.projects.find((project) => project.slug === slug);

    // Check if the project is found in either section
    if (!creativeAgencyProjects && !interiorProjects && !portfolioFullWidthProjects && !portfolioGridProjects && !portfolioHorizontalProjects && !portfolioVerticalProjects && !mediaAgencyPortfolioProjects) {
        return {
            notFound: true,
        };
    }

    // Return the appropriate project based on the section
    const project = creativeAgencyProjects || interiorProjects || portfolioFullWidthProjects || portfolioGridProjects || portfolioHorizontalProjects || portfolioVerticalProjects || mediaAgencyPortfolioProjects;

    return {
        props: {
            project,
        },
    };
}

export default PagePortfolioSingle3