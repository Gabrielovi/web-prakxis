import { About11, BackgroundVerticalLines, CallToAction6, Cursor, Footer1, HeaderFullscreenMenu1, Process1, ScrollToTop, Services9, Testimonial3 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageCreativeAgencyServices() {
    const themeData = mainData.pageCreativeAgencyServices;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu1 data={headerData.creativeAgency} className="header-dark" />

            <main>
                {/* About */}
                <About11 data={aboutData.creativeAgencyServices} />

                {/* Services */}
                <Services9 data={servicesData.creativeAgencyServices} />

                {/* Process */}
                <Process1 data={processData.creativeAgencyServices} className="pt-0" tertiary />

                {/* Call to Action */}
                <CallToAction6 data={callToActionData.creativeAgencyServices} />

                {/* Testimonial */}
                <Testimonial3 data={testimonialData.creativeAgency} className="pt-0" />


                {/* Footer */}
                <Footer1 data={footerData.corporate} />
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
