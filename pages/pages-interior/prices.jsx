import { Cursor, Footer3, HeaderFullscreenMenu2, Pricing2, ScrollToTop, Testimonial4 } from '@/components';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { pricingData } from '@/components/Pricing/PricingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageInteriorPrice() {
    const themeData = mainData.pageInteriorPrice;

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
                            <h1 className="display-2 fw-semi-bold uppercase mb-0">Pricing Plans</h1>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <Pricing2 data={pricingData.interior} hideTitle />

                {/* Testimonial */}
                <Testimonial4 data={testimonialData.interior} className="pt-0" />

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
