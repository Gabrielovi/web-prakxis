import Favicon from '@/public/images/favicon.png';

const defaultMetaData = {
    title: '',
    description: '',
    keywords: '',
};

const themes = {
    business: { title: 'Business', description: '', keywords: '' },
    corporate: { title: 'Corporate', description: '', keywords: '' },
    creativeAgency: { title: 'Creative Agency', description: '', keywords: '' },
    interior: { title: 'Interior', description: '', keywords: '' },
    marketing: { title: 'Marketing', description: '', keywords: '' },
    mediaAgency: { title: 'Media Agency', description: '', keywords: '' },
    portfolioFullWidth: { title: 'Portfolio Fullwidth', description: '', keywords: '' },
    portfolioGrid: { title: 'Portfolio Grid', description: '', keywords: '' },
    portfolioHorizontal: { title: 'Portfolio Horizontal', description: '', keywords: '' },
    portfolioVertical: { title: 'Portfolio Vertical', description: '', keywords: '' },
    startup: { title: 'Startup', description: '', keywords: '' },
    pageBusinessAbout: { title: 'About - Business', description: '', keywords: '' },
    pageBusinessClients: { title: 'Clients - Business', description: '', keywords: '' },
    pageBusinessContact: { title: 'Contact - Business', description: '', keywords: '' },
    pageBusinessServices: { title: 'Services - Business', description: '', keywords: '' },
    pageCorporateAbout: { title: 'About - Corporate', description: '', keywords: '' },
    pageCorporateClients: { title: 'Clients - Corporate', description: '', keywords: '' },
    pageCorporateContact: { title: 'Contact - Corporate', description: '', keywords: '' },
    pageCorporateServices: { title: 'Services - Corporate', description: '', keywords: '' },
    pageCreativeAgencyAbout: { title: 'About - Creative Agency', description: '', keywords: '' },
    pageCreativeAgencyClients: { title: 'Clients - Creative Agency', description: '', keywords: '' },
    pageCreativeAgencyContact: { title: 'Contact - Creative Agency', description: '', keywords: '' },
    pageCreativeAgencyServices: { title: 'Services - Creative Agency', description: '', keywords: '' },
    pageCreativeAgencyPrice: { title: 'Price - Creative Agency', description: '', keywords: '' },
    pageInteriorAbout: { title: 'About - Interior', description: '', keywords: '' },
    pageInteriorClients: { title: 'Clients - Interior', description: '', keywords: '' },
    pageInteriorContact: { title: 'Contact - Interior', description: '', keywords: '' },
    pageInteriorPrice: { title: 'Price - Interior', description: '', keywords: '' },
    pageInteriorServices: { title: 'Services - Interior', description: '', keywords: '' },
    pageMarketingAbout: { title: 'About - Marketing', description: '', keywords: '' },
    pageMarketingContact: { title: 'Contact - Marketing', description: '', keywords: '' },
    pageMarketingPrice: { title: 'Price - Marketing', description: '', keywords: '' },
    pageMarketingServices: { title: 'Services - Marketing', description: '', keywords: '' },
    pageMediaAgencyAbout: { title: 'About - Media Agency', description: '', keywords: '' },
    pageMediaAgencyContact: { title: 'Contact - Media Agency', description: '', keywords: '' },
    pageMediaAgencyPortfolio: { title: 'Portfolio - Media Agency', description: '', keywords: '' },
    pageMediaAgencyPrice: { title: 'Price - Media Agency', description: '', keywords: '' },
    pageMediaAgencyServices: { title: 'Services - Media Agency', description: '', keywords: '' },
    pageStartupAbout: { title: 'About - Startup', description: '', keywords: '' },
    pageStartupContact: { title: 'Contact - Startup', description: '', keywords: '' },
    pageStartupServices: { title: 'Services - Startup', description: '', keywords: '' },
    pagePortfolioList: { title: 'Portfolio List', description: '', keywords: '' },
    pageBlogList: { title: 'Blog List', description: '', keywords: '' },
};

export const mainData = {
    websiteTitle: 'Nuur',
    description: 'Multipurpose HTML5 Template',
    keywords: 'nuur, multipurpose, template',
    favicon: Favicon,
    ...Object.fromEntries(
        Object.entries(themes).map(([key, value]) => [
            key,
            { ...defaultMetaData, ...value },
        ])
    ),
};