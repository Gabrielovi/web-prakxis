import Image from 'next/image'
import React from 'react'

const About9 = ({ data }) => {
    return (
        <>
            {/* About */}
            <div className="section-spacing">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-12 col-lg-6">
                            <h2 className="display-5 fw-medium">{data.title.first} <span className="text-highlight-gradient-2">{data.title.highlight}</span> {data.title.last}</h2>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="row g-4 mt-1">
                        {data.facts.map((fact, index) => (
                            <div key={index} className="col-12 col-sm-6 col-lg-3">
                                <h2 className="display-3 font-family-poppins fw-semi-bold stroke-text mb-0">{fact.counter}</h2>
                                <p>{fact.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="section-spacing pt-0">
				<div className="container">
					<div className="row g-4">
						<div className="col-12 col-md-4">
							<Image className="border-radius mt-md-4" src={data.image1.src} alt={data.image1.alt} loading="lazy" />
						</div>
						<div className="col-12 col-md-4">
							<Image className="border-radius" src={data.image2.src} alt={data.image2.alt} loading="lazy" />
						</div>
						<div className="col-12 col-md-4">
							<Image className="border-radius mt-md-4" src={data.image3.src} alt={data.image3.alt} loading="lazy" />
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default About9