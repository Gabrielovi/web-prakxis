import { CallToAction7, Cursor, Footer3, HeaderFullscreenMenu2, ScrollToTop, Services10, SlidingText3, Testimonial4 } from '@/components';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageInteriorServices() {
    const themeData = mainData.pageInteriorServices;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu2 data={headerData.interior} />

            <main>
                {/* Title */}
                <div className="bg-image parallax" style={{ backgroundImage: `url(/images/bg.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundPosition: 'center 0px' }}>
                    <div className="section-spacing-xl bg-black-40">
                        <div className="container text-center">
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">What We Do</h1>
                        </div>
                    </div>
                </div>

                {/* Sliding */}
                <SlidingText3 data={slidingData.interior} />

                {/* Services */}
                <Services10 data={servicesData.interiorServices} />

                {/* Call to Action */}
                <CallToAction7 data={callToActionData.interiorServices} />

                {/* Testimonial */}
                <Testimonial4 data={testimonialData.interior} />

                {/* Footer */}
                <Footer3 data={footerData.interior} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
