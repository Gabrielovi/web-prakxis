import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Faq1 = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = index => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const accordionItems = document.querySelectorAll('.accordion li');
        accordionItems.forEach(item => {
            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    }, [activeIndex]);

    return (
        <div className="section-spacing pt-0">
            <div className="container">
                <div className="bg-gray p-4 p-lg-5 border-radius-1" data-cue="slideInUp">
                    <div className="row custom-row align-items-center">
                        <div className="col-12 col-lg-6 order-lg-2 custom-col">
                            <h2 className="display-6 fw-medium">{data.title}</h2>
                            <Link href={data.button.href} className="button button-lg button-rounded button-gradient-1 button-hover-slide mt-3">
                                <span data-text={data.button.text}>{data.button.text}</span>
                            </Link>
                        </div>
                        <div className="col-12 col-lg-6 order-lg-1 custom-col">
                            <ul className="accordion style-2">
                                {data.faq.map((faq, index) => (
                                    <li key={index} className={activeIndex === index ? 'active' : ''}>
                                        <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                                            <h5>{faq.question}</h5>
                                            <div className="accordion-toggle">
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="accordion-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq1;
