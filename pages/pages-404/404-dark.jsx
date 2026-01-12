import { Cursor, HeaderNavLeft2, ParticlesDark } from '@/components';
import { headerData } from '@/components/Header/HeaderData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function Page404Dark() {
    const themeData = mainData.portfolioHorizontal;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-black');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-black');
        };
    }, []);

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderNavLeft2 data={headerData.startup} className="transparent-dark" />

            <main className="section-fullscreen">
                <div className="w-100 h-100 position-relative d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="row g-4 g-lg-5 align-items-center">
                                    <div className="col-12 col-lg-5 text-lg-end">
                                        <h1 className="display-1 display-xl fw-semi-bold stroke-text mb-0">404</h1>
                                    </div>
                                    <div className="col-12 col-lg-7">
                                        <h2 className="fw-light">Sorry, It appears that the page you were looking for doesn&apos;t exist or might have been moved.</h2>
                                        <a className="button button-rounded button-outline-dashed button-hover-slide mt-4" href="#"><span data-text="Go Back">Go Back</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div className="position-absolute start-0 bottom-0 w-100 pb-4">
                        <div className="container-fluid px-lg-5">
                            <div className="row">
                                <div className="col-6">
                                    <p>&copy; FlaTheme 2024</p>
                                </div>
                                <div className="col-6 text-end">
                                    <ul className="list-inline-lg">
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* BG Particles */}
                    <ParticlesDark />
                </div>
            </main>

            {/* Cursors */}
            <Cursor />
        </>
    )
}
