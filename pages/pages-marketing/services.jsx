import { About14,  Cursor, Footer3, HeaderCenter,  ScrollToTop, Services11, Testimonial3, Testimonial4 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageMarketingServices() {
    const themeData = mainData.pageMarketingServices;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderCenter data={headerData.marketing} />

            <main>
                {/* About 2 */}
                <About14 data={aboutData.marketingServices} />

                {/* Services */}
                <Services11 data={servicesData.marketingServices} />

                {/* Testimonial */}
                <Testimonial3 data={testimonialData.marketingPrices} className="pt-0" />

                {/* Footer */}
                <Footer3 data={footerData.marketing} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
