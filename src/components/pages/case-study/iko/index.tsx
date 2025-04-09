"use client"
import { Container } from "@shared"
import { useState } from "react";
const Iko = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/img/iko3.png',
        '/img/iko2.webp',
        '/img/iko1.webp'
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    return (
        <section>
            <div className="pt-[50px] pb-[100px] text-start bg-[#FECF5A] ">
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
                            <div className="mb-[30px]"><h2 className="text-[30px]">Iko Africa
                            Building a 30,000+ member literary community from the ground up with zero ad spend.</h2></div>

                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px]">Overview :</h2></div>
                                <div><p><span className="mr-[15px] font-normal">Project :</span><span>Iko Africa</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Industry :</span><span>Digital Publishing / Creative Community</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Role :</span><span>Founder & Growth Strategist</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Milestone :</span><span>30,000+ engaged community members</span></p></div>
                                <div><p><span className="mr-[15px] font-normal">Primary Channels :</span><span>Organic Social, Email, Community Marketing</span></p></div>
                            </div>

                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px]">The Mission:</h2></div>
                                <div className="mb-[30px]">
                                    <p className="font-light">Iko Africa is more than just a project, it’s personal. I built it to create a space where African writers, poets, and storytellers could connect, be celebrated, and grow.
                                    In a world that often sidelines African voices, Iko Africa set out to change that and we did it without spending a single dollar on marketing.</p>
                                </div>
                                <div className="hidden">
                                    <h2 className="text-[20px] mb-[10px]">My Approach :</h2>

                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 1 : Organic Social — Fully Leveraged</span>
                                    We harnessed the full potential of Instagram, Twitter, Facebook, LinkedIn, and TikTok, all with an organic-first mindset.Rather than chasing virality, our focus was content richness, community resonance, and real engagement.
                                    We posted:
                                        <ul className="list-disc leading-[2] my-[10px]">
                                            <li>Culturally-rooted literary prompts</li>
                                            <li> Bite-sized writing tips</li>
                                            <li>Storytelling competitions</li>
                                            <li>Storytelling competitions</li>
                                            <li>User-generated content and features</li>
                                            <li>Community shoutouts and behind-the-scenes stories</li>
                                        </ul>
                                        Each platform had its own rhythm, but the voice stayed consistent, inspiring, inclusive, and distinctly African.
                                    </p>
                                    


                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 2 : Building a Movement, Not Just a Page</span>
                                    We weren’t just growing a follower count. We were fostering a movement of creatives.We encouraged participation through: 
                                        <ul className="list-disc leading-[2] my-[10px]">
                                            <li> Writing contests and poetry challenges</li>
                                            <li>Creative classes and digital workshops</li>
                                            <li>Weekly community questions and storytelling themes</li>
                                        </ul>
                                        This helped shift the audience from passive consumers to active contributors.
                                    </p>

                                    
                                    <p className="font-light mb-[30px]"><span className="font-normal text-[18px] block mb-[7px]">Step 3 : Nurturing via Email</span>
                                    Behind the scenes, our email strategy quietly carried the weight of retention and relationship-building.We used email to:
                                        <ul className="list-disc leading-[2] my-[10px]">
                                            <li>Share valuable writing resources</li>
                                            <li>Announce community features and winners</li>
                                            <li>Offer encouragement, opportunities, and upcoming initiatives</li>
                                        </ul>
                                        Open rates remained strong because people felt seen, not sold to.
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
export default Iko;