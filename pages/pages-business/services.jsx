import { About8, CallToAction4, Cursor, Footer1, HeaderNavLeft3, Process1, ScrollToTop, Services6 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { callToActionData } from '@/components/CalltoAction/CallToActionData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React from 'react'

export default function PageBusinessServices() {
    const themeData = mainData.pageBusinessServices;

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
                <About8 data={aboutData.businessServices} />

                {/* Services */}
                <Services6 data={servicesData.businessServices} />

                {/* Call to Action */}
                <CallToAction4 data={callToActionData.businessServices} />

                {/* Process */}
                <Process1 data={processData.business} />

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
