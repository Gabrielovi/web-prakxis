import { About16, Contact1, Cursor, Features1, Footer3, HeaderCenter, HeaderCenter2, Map, Portfolio7, Pricing4, ScrollToTop, Services12, Testimonial5 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { contactData } from '@/components/Contact/ContactData';
import { featuresData } from '@/components/Features/FeaturesData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function PageMediaAgencyServices() {
    const themeData = mainData.pageMediaAgencyServices;

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
                {/* About */}
                <About16 data={aboutData.mediaAgencyServices} />

                {/* Services */}
                <Services12 data={servicesData.mediaAgencyServices} />

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
