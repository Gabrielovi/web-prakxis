import { BackgroundVerticalLines, Contact2, Cursor, Footer3, HeaderNavLeft2, Map, ScrollToTop } from '@/components';
import { contactData } from '@/components/Contact/ContactData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
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
                                        <h1 className="display-3 fw-semi-bold uppercase text-center mb-0">Contact Us</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <Contact2 data={contactData.startup} gradient5 />

                {/* Map */}
                <div className="section-spacing pt-0">
                    <div className="container">
                        <Map />
                    </div>
                </div>

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
