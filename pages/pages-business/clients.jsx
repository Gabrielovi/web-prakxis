import { CallToAction3, Clients6, Cursor, Footer1, HeaderNavLeft3, ScrollToTop, Testimonial6 } from '@/components';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageBusinessClients() {
    const themeData = mainData.pageBusinessClients;

    return (
        <>
            <Head>
                <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
                <meta name="description" content={themeData.description} />
                <meta name="keywords" content={themeData.keywords} />
            </Head>

            {/* Header */}
            <HeaderNavLeft3 data={headerData.business} className="header-dark" />

            <main>
                {/* About */}
                <Clients6 data={clientsData.businessClients} />

                {/* Call to Action */}
                <CallToAction3 data={callToActionData.businessClients} />

                {/* Testimonial */}
                <Testimonial6 data={testimonialData.businessClients} />

                {/* Footer */}
                <Footer1 data={footerData.business} />
            </main>

            {/* Cursors */}
            <Cursor />

            {/* Scroll to Top */}
            <ScrollToTop />
        </>
    )
}
