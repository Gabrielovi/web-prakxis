import { About12,  About17, BackgroundVerticalLines, Clients4, Cursor, Footer3, HeaderNavLeft2, ScrollToTop, Team6 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageStartupAbout() {
    const themeData = mainData.pageStartupAbout;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-gray');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-gray');
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
            <HeaderNavLeft2 data={headerData.startup} />

            <main>
                {/* Title */}
                <div className="px-3 px-md-4 px-xxl-5">
                    <div className="bg-image parallax" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                        <div className="section-spacing-xl bg-gradient-5 bg-opacity-60">
                            <div className="container text-center">
                                <div className="row g-4">
                                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                        <h1 className="display-3 fw-semi-bold uppercase text-center mb-0">About Us</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About */}
                <About17 data={aboutData.startupAbout} />

                {/* About 2 */}
                <About12 data={aboutData.startupAbout2} className="py-0" gradient5 />

                {/* Clients */}
                <div className="section-spacing-sm pb-0">
                    <div className="container">
                        <Clients4 data={clientsData.startup} />
                    </div>
                </div>

                {/* Team */}
                <Team6 data={teamData.startupAbout} />

                {/* Footer */}
                <Footer3 data={footerData.startup} dark />
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
