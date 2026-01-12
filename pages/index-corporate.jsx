import { About2, Blog2, CallToAction2, Clients2, Cursor, Footer2, HeaderNavLeft, Hero2, HrDiagonal, Process2, ScrollToTop, Services1, Testimonial2 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { blogData } from '@/components/Blog/BlogData';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function IndexCorporate() {
    const themeData = mainData.corporate;

    useEffect(() => {
        // Add class to the body tag
        document.body.classList.add('bg-gray');

        // Cleanup function to remove the class on component unmount
        return () => {
            document.body.classList.remove('bg-gray');
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
            <HeaderNavLeft data={headerData.corporate} />

            <main>
                {/* Hero */}
                <Hero2 data={heroData.corporate} />

                {/* Clients */}
                <Clients2 data={clientsData.corporate} />

                {/* Hr Diagonal */}
                <HrDiagonal />

                {/* About */}
                <About2 data={aboutData.corporate} />

                {/* Testimonial */}
                <Testimonial2 data={testimonialData.corporate} />

                {/* Services */}
                <Services1 data={servicesData.corporate} />

                {/* Call to Action */}
                <CallToAction2 data={callToActionData.corporate} />

                {/* Process */}
                <Process2 data={processData.corporate} />

                {/* Hr Diagonal */}
                <HrDiagonal />

                {/* Blog */}
                <Blog2 data={blogData.corporate} />

                {/* Footer */}
                <Footer2 data={footerData.corporate} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
