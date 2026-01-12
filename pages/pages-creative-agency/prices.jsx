import { BackgroundVerticalLines, Cursor, Faq1, Footer1, HeaderFullscreenMenu1, Pricing5, ScrollToTop, Testimonial3 } from '@/components';
import { faqData } from '@/components/Faq/FaqData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { pricingData } from '@/components/Pricing/PricingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageCreativeAgencyPrice() {
    const themeData = mainData.pageCreativeAgencyPrice;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu1 data={headerData.creativeAgency} />

            <main>
                {/* Pricing */}
                <Pricing5 data={pricingData.creativeAgencyPrices} />

                {/* Testimonial */}
                <Testimonial3 data={testimonialData.creativeAgency} />

                {/* FAQ */}
                <Faq1 data={faqData.creativeAgency} />

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
