import { About8, CallToAction5, Cursor, Footer1, HeaderNavLeft, Process2, ScrollToTop, Services7 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageCorporateServices() {
    const themeData = mainData.pageCorporateClients;

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
            <HeaderNavLeft data={headerData.corporate} />

            <main>
                {/* Title */}
                <div className="px-3 px-md-4 px-xxl-5">
                    <div className="bg-image parallax border-radius-2" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                        <div className="section-spacing-xl bg-black-40">
                            <div className="container text-center">
                                <div className="row g-4">
                                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                                        <h1 className="display-3 fw-medium text-center mb-0">Services</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About */}
                <About8 data={aboutData.corporateServices} gradient2 />

                {/* Services */}
                <Services7 data={servicesData.corporateServices} />

                {/* Call to Action */}
                <CallToAction5 data={callToActionData.corporateServices} />

                {/* Process */}
                <Process2 data={processData.corporate} />

                {/* Footer */}
                <Footer1 data={footerData.corporate} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
