"use client"
import { Container } from "@shared"
import { useState } from "react";
const Metiers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/img/metiers2.gif',
        '/img/metiers1.webp',
        '/img/metiers3.webp'
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
        <section>
            <div className="pt-[50px] pb-[100px] text-start  bg-[#F2B7B4] ">
                <Container>
                    <div className="bg-[#fff] shadow-lg w-[70%] max-md:w-[100%] md:w-[100%] lg:w-[90%] xl:w-[70% mx-[auto] rounded-[30px] p-[30px]">
                        <div className="relative w-[fit-content] mx-auto h-[600px] max-sm:h-[250px] sm:h-[250px] md:h-[350px] lg:h-[600px] mb-[50px] overflow-hidden rounded-[30px]">
                            {/* Slides container */}
                            <div
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full relative h-[600px] max-sm:h-[250px] sm:h-[250px] md:h-[350px] lg:h-[600px]"
                                    >
                                        <img
                                            src={slide}
                                            className="w-full h-full max-sm:h-[250px] sm:h-[250px] md:h-[350px] lg:h-[600px] object-contain shadow-lg rounded-[30px]"
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mb-[30px]"><h2 className="text-[30px] max-sm:text-[15px] sm:text-[20px] lg:text-[30px]">Métiers Bien-Être
                                Turning underperforming online courses into a 6-figure sales engine.</h2></div>

                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px] max-sm:text-[15px] sm:text-[20px]">Overview :</h2></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Client :</span><span>Métiers Bien-Être</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Industry :</span><span>Wellness Education (French-speaking markets)</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Role :</span><span>Growth Marketing Consultant </span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Revenue Milestone :</span><span> £225,000 in course sales</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Channels :</span><span> Paid Ads (Meta + Google), Webflow, Creative Strategy, CRO</span></p></div>
                            </div>

                            <div className="mb-[30px] hidden">
                                <div><h2 className="text-[20px] mb-[10px] sm:text-[13px] md:text-[18px]">The Mission:</h2></div>
                                <div className="mb-[30px]">
                                    <p className="font-light sm:text-[13px] md:text-[18px]">Métiers Bien-Être had a strong product, professional wellness certification courses but poor conversion rates. Despite heavy ad spend across Facebook and Instagram, the purchase rate remained disappointingly low. The issue? A scattered user experience, misaligned messaging, and zero funnel clarity. They weren’t short on traffic — they were short on strategy and structure.</p>
                                </div>
                                <div>
                                    <h2 className="text-[20px] mb-[10px] sm:text-[13px] md:text-[18px]">My Approach :</h2>

                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 1 : Rebuilt the Funnel Foundation</span>
                                        The first move was bold but necessary: we ditched the bloated, confusing website and created a clean, conversion-optimized landing page using Webflow.
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li>Simplicity in copy for fast comprehension</li>
                                            <li> Vibrant, niche-aligned branding to command attention</li>
                                            <li>A strong promotional mission, always front and center</li>
                                        </ul>
                                        This set the tone for a more focused, friction-free customer journey.
                                    </p>



                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 2 : Full-Funnel Paid Ad Strategy</span>
                                        We completely restructured the ad strategy, focusing on CBO (Campaign Budget Optimization) and dynamic creative testing across Instagram and Facebook.
                                        Key tactics included:
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li>Targeted cold traffic in France, Belgium, and Switzerland with value-based ads</li>
                                            <li>Retargeted warm viewers (video views, static ad engagers) with testimonials and product proof</li>
                                            <li>High-converting custom creatives pushed through both Meta and Google Ads once we locked in the best-performing audiences</li>
                                        </ul>
                                        We continuously optimized for Cost Per Click (CPC) and Cost Per Acquisition (CPA), using data feedback loops to refine visuals, hooks, and placements.
                                    </p>


                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Results</span>
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li>£225,000+ in course sales from a previously underperforming funnel</li>
                                            <li>Significantly improved purchase rate and ad ROI</li>
                                            <li>Paid ad cost-efficiency across cold and warm audiences</li>
                                            <li>A once-heavy ad spend turned into a high-performing, sustainable sales engine</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>


                            <div className="w-[fit-content] mx-[auto] shadow-lg bg-[#000] text-[#fff] rounded-[20px] shadow-lg"><button className="text-[20px py-[15px] px-[35px] cursor-pointer">See More</button></div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Metiers