import { Cursor, Features2, Footer3, HeaderFullscreenMenu2, Hero4, Portfolio2, Pricing2, ScrollToTop, Services3, SlidingText3, Testimonial4 } from '@/components';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexInterior() {
    const themeData = mainData.interior;

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
                {/* Hero */}
                <Hero4 data={heroData.interior} />

                {/* Sliding */}
                <SlidingText3 data={slidingData.interior} />

                {/* Features */}
                <Features2 data={featuresData.interior} />

                {/* Services */}
                <Services3 data={servicesData.interior} />

                {/* Portfolio */}
                <Portfolio2 data={portfolioData.interior} />

                {/* Pricing */}
                <Pricing2 data={pricingData.interior} />

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
