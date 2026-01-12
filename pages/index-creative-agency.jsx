import { BackgroundVerticalLines, Clients3, Cursor, Features1, Footer3, HeaderFullscreenMenu1, Hero3, Portfolio1, Pricing1, ScrollToTop, Services2, SlidingText2, Team1, Testimonial3 } from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { teamData } from '@/components/Team/TeamData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function IndexCreativeAgency() {
    const themeData = mainData.creativeAgency;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderFullscreenMenu1 data={headerData.creativeAgency} className="header-white transparent-dark" />

            <main>
                {/* Hero */}
                <Hero3 data={heroData.creativeAgency} />

                {/* Progress bars / Services section */}
                <Services2 data={servicesData.creativeAgency} />

                {/* Clients */}
                <Clients3 data={clientsData.creativeAgency} className="bg-dark" />

                {/* Portfolio */}
                <Portfolio1 data={portfolioData.creativeAgency} />

                {/* Sliding Text */}
                <SlidingText2 data={slidingData.creativeAgency} />

                {/* Pricing */}
                <Pricing1 data={pricingData.creativeAgency} />

                {/* Features */}
                <Features1 data={featuresData.creativeAgency} />

                {/* Team */}
                <Team1 data={teamData.creativeAgency} />

                {/* Testimonial */}
                <Testimonial3 data={testimonialData.creativeAgency} className="pt-0" />

                {/* Footer */}
                <Footer3 data={footerData.creativeAgency} />
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
