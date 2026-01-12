import { Cursor, Features1, Footer3, HeaderCenter2, Pricing4, ScrollToTop, Testimonial5 } from '@/components';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { pricingData } from '@/components/Pricing/PricingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageMediaAgencyPrice() {
    const themeData = mainData.pageMediaAgencyPrice;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-iceblue');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-iceblue');
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
            <HeaderCenter2 data={headerData.mediaAgency} />

            <main>
                {/* Pricing */}
                <div className="section-spacing-sm pb-0 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
                                <h1 className="display-3 fw-semi-bold uppercase">Pricing Plans</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Pricing4 data={pricingData.mediaAgency} />

                {/* Features */}
                <Features1 data={featuresData.mediaAgency} className="pt-0" />

                {/* Testimonial */}
                <Testimonial5 data={testimonialData.mediaAgency} className="pt-0" dark />

                {/* Footer */}
                <Footer3 data={footerData.mediaAgency} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
