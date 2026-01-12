import { Cursor, Faq1, Footer3, HeaderCenter, Pricing6, ScrollToTop, Testimonial3 } from '@/components';
import { faqData } from '@/components/Faq/FaqData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { pricingData } from '@/components/Pricing/PricingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageMarketingPrice() {
    const themeData = mainData.pageMarketingPrice;

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
                {/* Title */}
                <div className="section-spacing-lg bg-gradient-1 bg-opacity-10">
                    <div className="container pt-4">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                                <h2 className="display-3 fw-normal text-dark mb-3">Competitive Pricing</h2>
                                <p className="text-dark-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <Pricing6 data={pricingData.marketingPrices} />

                {/* Testimonial */}
                <Testimonial3 data={testimonialData.marketingPrices} />

                {/* FAQ */}
                <Faq1 data={faqData.marketingPrices} />

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
