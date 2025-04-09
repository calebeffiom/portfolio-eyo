"use client"
import { Container } from "@shared"
import { useState } from "react";
const Vitamins = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/img/vitamins2.png',
        '/img/vitamins1.png',
        '/img/vitamins3.png',
        '/img/vitamins4.png'

    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (

        <section>
            <div className="pt-[50px] pb-[100px] text-start  bg-gradient-to-b from-[#F2B7B4] to-[#FECF5A] ">
                <Container>
                    <div className="bg-[#fff] shadow-lg w-[70%] mx-[auto] rounded-[30px] p-[30px]">
                        <div className="relative w-[fit-content] mx-auto h-[600px] mb-[50px] overflow-hidden rounded-[30px]">
                            {/* Slides container */}
                            <div
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full relative h-[600px]"
                                    >
                                        <img
                                            src={slide}
                                            className="w-full h-full object-contain shadow-lg rounded-[30px]"
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
                            <div className="mb-[30px]"><h2 className="text-[30px]">V Vitamins Scaling a Women’s wellness brand to $2M+ in revenue</h2></div>
                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px]">Overview :</h2></div>
                                <div><p><span className="mr-[15px] font-normal">Industry :</span><span>Women’s Wellness | Intimate Health</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Role :</span><span>Growth Marketing Manager</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Milestone :</span><span>$2M+ in 24 months</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Primary Channels :</span><span>Organic Social, Email, Funnels, Digital Products</span></p></div>
                            </div>

                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px]">The Challenge :</h2></div>
                                <div className="mb-[30px]">
                                    <p className="font-light">V Vitamins was one of the most demanding and rewarding growth roles I’ve ever taken on.
                                        As a male marketer in the women’s intimate wellness space, I had to navigate the complexity of marketing vaginal suppositories in a way that was both authentic and respectful. The challenge wasn’t just visibility, it was earning trust in a sensitive, underserved market.
                                        This wasn’t a space for gimmicks. It demanded real storytelling, emotional intelligence, and relentless customer-first thinking.</p>
                                </div>
                                <div className="hidden">
                                    <h2 className="text-[20px] mb-[10px]">My Approach :</h2>

                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 1 : Storytelling That Spoke to Pain Points</span>
                                        We led with vulnerability and truth. By amplifying the founder’s personal journey — her health challenges, emotional lows, and real transformation — we created content that resonated deeply.
                                        We made space for taboo topics, encouraged community conversation, and built a brand voice rooted in empathy, not hype.
                                        A single founder story post on Instagram drove over 10,000 profile visits in 48 hours and significantly boosted conversions.(Include image of that IG post here.)</p>


                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 2 : Testimonial-Led Growth</span>Word-of-mouth was critical. Instead of forcing overly polished branding, we leaned into DMs, product reviews, and voice-note testimonials from real women.
                                        These authentic snippets became organic posts that fueled a loop of trust → purchase → share → repeat.</p>

                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 3 : Free Digital Products = High-Converting Funnels</span>
                                        We launched free, zero-cost digital products (simple but beautifully designed in Canva) as opt-in incentives, guides on vaginal care, detox routines, cycle syncing, and more.
                                        The effect was immediate:
                                        <ul className="list-disc leading-[2] mt-[10px]">
                                            <li>Email list grew exponentially </li>
                                            <li>Leads came in warm, educated, and ready to buy</li>
                                            <li>Many customers converted within the first 3-email touchpoints</li>
                                        </ul>
                                    </p>


                                    <p className="font-light"><span className="font-normal text-[18px] block mb-[7px]">Step 4 : Email Marketing = Consistent Revenue Engine</span>
                                        We didn’t just build an email list, we turned it into a powerful revenue stream.
                                        Through strategic flows (welcome, education, upsell, post-purchase, and win-back), we turned subscribers into loyal customers.
                                        This channel alone drove over $25,000/month in revenue.That’s without paid boosts just value-based content, optimized offers, and behavior-triggered flows.</p>
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
export default Vitamins