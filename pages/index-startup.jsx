import { About5, About6, BackgroundVerticalLines, Blog3, Clients4, Cursor, Footer2, Footer3, HeaderFullscreenMenu5, HeaderNavLeft2, Hero8, Portfolio6, Process3, ScrollToTop, Services5, SlidingText5 } from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { blogData } from '@/components/Blog/BlogData';
import { clientsData } from '@/components/Clients/ClientsData';
import { footerData } from '@/components/Footer/FooterData';
import { headerData } from '@/components/Header/HeaderData';
import { heroData } from '@/components/Hero/HeroData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { processData } from '@/components/Process/ProcessData';
import { servicesData } from '@/components/Services/ServicesData';
import { slidingData } from '@/components/Sliding/SlidingData';
import { mainData } from '@/lib/data'
import Head from 'next/head'
import React, { useEffect } from 'react'

export default function IndexStartup() {
    const themeData = mainData.startup;

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
            <HeaderNavLeft2 data={headerData.startup} className="transparent-dark" />

            <main>
                {/* Hero */}
                <Hero8 data={heroData.startup} />

                {/* About 1 */}
                <About5 data={aboutData.startup} />

                {/* Services */}
                <Services5 data={servicesData.startup} />

                {/* Clients */}
                <div className="section-spacing-sm pb-0">
                    <div className="container">
                        <Clients4 data={clientsData.startup} />
                    </div>
                </div>

                {/* About 2 */}
                <About6 data={aboutData.startup2} />

                {/* Sliding */}
                <SlidingText5 data={slidingData.startup} />

                {/* Process */}
                <Process3 data={processData.startup} />

                {/* Blog */}
                <Blog3 data={blogData.startup} />

                {/* Footer */}
                <Footer3 data={footerData.startup} dark />
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
