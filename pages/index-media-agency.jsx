import { Clients4, Cursor, Features1, Footer3, HeaderCenter2, Hero6, Portfolio3, Pricing4, ScrollToTop, Services4, Testimonial5 } from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function IndexMediaAgency() {
    const themeData = mainData.mediaAgency;

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
                {/* Hero */}
                <Hero6 data={heroData.mediaAgency} />

                {/* Testimonial */}
                <Testimonial5 data={testimonialData.mediaAgency} className="pb-0" dark />

                {/* Clients */}
                <div className="section-spacing-sm">
                    <div className="container">
                        <Clients4 data={clientsData.mediaAgency} />
                    </div>
                </div>

                {/* Services */}
                <Services4 data={servicesData.mediaAgency} />

                {/* Portfolio */}
                <Portfolio3 data={portfolioData.mediaAgency} />

                {/* Features */}
                <Features1 data={featuresData.mediaAgency} />

                {/* Pricing */}
                <Pricing4 data={pricingData.mediaAgency} />

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
