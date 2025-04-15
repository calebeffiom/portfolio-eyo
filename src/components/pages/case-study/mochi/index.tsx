"use client"
import { useState } from "react"
import {Container} from "@shared"
const Mochi = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/img/mochi1.png',
        // '/img/mochi.png',
    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
    const [isShow, setIsShow] = useState(false)
    const [changeText, setChangeText] = useState("More")

    const seeMore=(text: string)=>{
        if(text === "More"){
            setChangeText("Less")
            setIsShow(true)
        }
        else{
            setChangeText("More")
            setIsShow(false)
        }
        return text;
    }
    return(
        <section>
            <div className="pt-[50px] pb-[100px] text-start  bg-gradient-to-b from-[#2c66c3] to-[#a8c7d9]">
                <Container>
                <div className="bg-[#fff] shadow-lg w-[70%] max-md:w-[100%] md:w-[100%] lg:w-[90%] xl:w-[70%] mx-[auto] rounded-[30px] p-[30px]">
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
                                            className="w-full h-full  sm:h-[250px] md:h-[350px] lg:h-[600px] object-contain shadow-lg rounded-[30px]"
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
                            <div className="mb-[30px]"><h2 className="text-[30px] max-sm:text-[15px] sm:text-[20px] lg:text-[30px]">Mochi Label
                            From revenue roadblocks to $600K+ in 12 months. Scaling an influencer agency with lean, focused strategy.</h2></div>

                            <div className="mb-[30px]">
                                <div><h2 className="text-[20px] mb-[10px] max-sm:text-[15px] sm:text-[20px]">Overview :</h2></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Client :</span><span>Mochi Label</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Industry :</span><span>Influencer Marketing & Talent Management</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Role :</span><span>Growth Consultant</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Revenue Impact :</span><span>From stagnant to $600,000+ in annual revenue</span></p></div>
                                <div><p className="max-sm:text-[13px] sm:text-[18px]"><span className="mr-[15px] font-normal max-sm:text-[15px] sm:text-[18px]">Focus Area :</span><span>Offer Clarity, Funnel Optimization, Revenue Strategy, Sales Enablement, Systems</span></p></div>
                            </div>

                            <div className={isShow === false ? "hidden" : "block mb-[30px]"}>
                                <div><h2 className="text-[20px] mb-[10px] sm:text-[13px] md:text-[18px]">The Challenge :</h2></div>
                                <div className="mb-[30px]">
                                    <p className="font-light max-sm:text-[13px] sm:text-[13px] md:text-[18px]">Mochi Label had the talent, the audience, and the network but revenue growth was flatlining.
                                    Despite managing a roster of quality influencers and producing strong campaign results, the agency lacked clear positioning, scalable offers, and predictable revenue systems. They were operating off referrals and one-off deals with no growth engine in place.</p>
                                </div>
                                <div className="">
                                    <h2 className="text-[20px] mb-[10px] max-sm:text-[15px] sm:text-[20px]">My Approach :</h2>

                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 1 : Offer Restructuring for Scalability</span>
                                    We took a hard look at their service model and streamlined it. The new structure included:
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li>Tiered service packages</li>
                                            <li> Clear deliverables and pricing</li>
                                            <li>Retainers and recurring revenue options</li>
                                        </ul>
                                        This made it easier to close deals, upsell, and maintain predictable cash flow.
                                    </p>
                                    


                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 2 : Built a Revenue-Focused Funnel</span>
                                    We created a basic but powerful funnel:
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li> Lead magnets tailored to brands looking for influencer partnerships</li>
                                            <li>A structured email flow that educated and pitched</li>
                                            <li>Optimized landing pages that highlighted case studies and talent success</li>
                                        </ul>
                                        
                                    </p>

                                    
                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 3 : Revamped Positioning & Sales Materials</span>
                                    We repositioned Mochi Label not just as an influencer agency, but as a growth partner for brands. This change in language and presentation gave the team more leverage during sales conversations.
                                    </p>


                                    <p className="font-light mb-[30px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]"><span className="font-normal text-[18px] block mb-[7px]">Step 4 : Operational Systems & Tools</span>
                                    We introduced streamlined tools and automations to reduce friction in:
                                        <ul className="list-disc leading-[2] my-[10px] max-sm:text-[13px] sm:text-[13px] md:text-[18px]">
                                            <li>Client onboarding</li>
                                            <li>Influencer communication</li>
                                            <li>Proposal creation and invoicing</li>
                                        </ul>
                                        Less time spent on admin = more time focused on growth
                                    </p>
                                </div>
                            </div>


                            <div className="w-[fit-content] mx-[auto] shadow-lg bg-[#000] text-[#fff] rounded-[20px] shadow-lg"><button className="text-[20px py-[15px] px-[35px] cursor-pointer" onClick={()=>{seeMore(changeText)}}>See {changeText}</button></div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Mochi