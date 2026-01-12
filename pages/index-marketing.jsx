import { About3, About4, Clients4, Cursor, Features3, Footer3, HeaderCenter, Hero5, Pricing3, ScrollToTop, SlidingText4, Testimonial5 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { pricingData } from '@/components/Pricing/PricingData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexMarketing() {
    const themeData = mainData.marketing;

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
                {/* Hero */}
                <Hero5 data={heroData.marketing} />

                {/* Features */}
                <Features3 data={featuresData.marketing} />

                {/* About 1 */}
                <About3 data={aboutData.marketing} />

                {/* Testimonial & Clients */}
                <div className="section-spacing-sm bg-dark">
                    <div className="container">
                        {/* Testimonial */}
                        <Testimonial5 data={testimonialData.marketing} className="pb-0" />

                        {/* Clients */}
                        <Clients4 data={clientsData.marketing} />
                    </div>
                </div>

                {/* About 2 */}
                <About4 data={aboutData.marketing2} />

                {/* Sliding */}
                <SlidingText4 data={slidingData.marketing} />

                {/* Pricing */}
                <Pricing3 data={pricingData.marketing} />

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
