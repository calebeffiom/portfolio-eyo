"use client";
import { Container } from "@shared"
import Link from "next/link"
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import {
    FiPenTool, FiTrendingUp, FiBarChart2, FiSearch,
    FiBook, FiHash, FiEdit, FiFilter, FiPocket, FiUsers,
    FiRepeat, FiSettings, FiChevronLeft, FiChevronRight
} from "react-icons/fi";
const Drive = () => {

    const servicesArr = [
        {
            heading: "Visual Design",
            paragraph:
                "If your brand looks scattered or forgettable, you’re losing trust — I design visuals that feel cohesive, credible, and scroll-stopping.",
            icon: <FiPenTool className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Digital Advertising",
            paragraph:
                "Bleeding money on ads that don’t convert? I find the sweet spot between creative and targeting to make every dollar count.",
            icon: <FiTrendingUp className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Data & Analytics",
            paragraph:
                "You don’t need more data — you need better decisions. I turn metrics into actionable growth moves you can trust.",
            icon: <FiBarChart2 className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "SEO Optimization",
            paragraph:
                "You’re invisible on Google? I fix that. I build search strategies that bring in high-intent traffic month after month.",
            icon: <FiSearch className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Research",
            paragraph:
                "You can’t grow if you don’t know your market — I dig deep to uncover the insights that guide smarter, profit-driven decisions.",
            icon: <FiBook className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Branding",
            paragraph:
                "A weak brand confuses people; a strong one converts them. I help businesses build identities that connect and compel.",
            icon: <FiHash className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Content Marketing",
            paragraph:
                "Your content shouldn’t just sound good — it should convert. I create strategic content that attracts, engages, and sells.",
            icon: <FiEdit className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Funnels",
            paragraph:
                "If people are dropping off, your funnel’s broken. I optimize the entire buyer journey so more leads say yes.",
            icon: <FiFilter className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Go-To-Market (GTM) Strategy",
            paragraph:
                "Launching without a plan is gambling. I build GTM strategies that give your product the traction it deserves from day one.",
            icon: <FiPocket className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Partnerships & Collaborations",
            paragraph:
                "You don’t have to grow alone. I help brands form smart, aligned partnerships that amplify reach and accelerate results.",
            icon: <FiUsers className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Customer Retention",
            paragraph:
                "Acquisition is just the beginning. I develop retention strategies that keep customers engaged, loyal, and coming back for more.",
            icon: <FiRepeat className="text-6xl text-gray-800 animate-pulse" />,
        },
        {
            heading: "Marketing Automation",
            paragraph:
                "Manual marketing doesn’t scale. I implement automation systems that save time, reduce errors, and drive consistent results.",
            icon: <FiSettings className="text-6xl text-gray-800 animate-pulse" />,
        },
    ];




    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3); // Show 3 items at a time

    const [width, setWidth] = useState(0); // Start with an empty state

  useEffect(() => {
    // Check if the window object is available (client-side only)
    if (typeof window !== 'undefined') {
      // Set the initial screen width on mount
      setWidth(window.innerWidth);

      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount

  // Update itemsPerView based on screen size
  useEffect(() => {
    if (width <= 1024) {
      setItemsPerView(2);
      if(width <= 460){
        setItemsPerView(1); // Default to 3 when larger than 1024px
      } // Change itemsPerView to 2 when screen size is 1024px or smaller
    }else{
        setItemsPerView(3)
    }
  }, [width]);
    const visibleServices = servicesArr.slice(currentIndex, currentIndex + itemsPerView);

    const next = () => {

        setCurrentIndex(prev => Math.min(prev + itemsPerView, servicesArr.length - itemsPerView));
    };

    const prev = () => {
        setCurrentIndex(prev => Math.max(prev - itemsPerView, 0));
    };

    return (
        <section>
            <div className="py-[100px] max-xs:py-[50px] xs:py-[50px] lg:py-[100px] bg-gradient-to-b from-[#FECF5A] to-[#F2B7B4]">
                <Container>
                    <div>
                        <div className="w-[100%] text-center leading-tight mb-[80px] max-lg:mb-[40px]">
                            <h2 className="text-[60px] mb-[18px] max-sm:text-start max-sm:text-[1.3rem] max-sm:mb-1 sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[60px]">What do I offer you? </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                className="h-1 bg-gray-900 mt-4 mx-auto origin-center max-sm:mx-[0]"
                            />

                            {/* </motion.div> */}
                            {/* <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"/> */}
                        </div>
                        <section className="section-content-cont">
                            <div className="section-content-flex flex justify-between">
                                <div className="section-image-cont w-[12%] max-sm:hidden">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Start off the screen to the left
                                        whileInView={{ opacity: 1, x: 0 }} // Move to its original position
                                        transition={{
                                            type: 'spring', // Smooth movement
                                            stiffness: 100, // Optional: Adjust the spring stiffness for a bounce effect
                                            damping: 25, // Optional: Adjust the damping for smoothness
                                        }}
                                    >
                                        <img src="/img/arrow.png" alt="Arrow" />
                                    </motion.div>


                                </div>
                                <div className="section-content w-[70%] max-sm:w-[100%]">
                                    <div className="section-content-heading mb-[50px]">
                                    <motion.div
                                        initial={{ opacity: 0, x: 0 }} // Start off the screen to the left
                                        whileInView={{ opacity: 1, x: 0 }} // Move to its original position
                                        transition={{
                                            type: 'spring', // Smooth movement
                                            stiffness: 100, // Optional: Adjust the spring stiffness for a bounce effect
                                            damping: 25, // Optional: Adjust the damping for smoothness
                                        }}
                                    >
                                        <h2 className="text-[40px] mb-[70px] leading-tight max-sm:text-start max-sm:text-[17px] max-sm:mb-1 sm:text-[18px] md:text-[20px] lg:text-[30px] xl:text-[40px]">
                                            Make it stand out. It all begins with an idea. Here are just a few of the services I provide for your business.
                                        </h2>
                                    </motion.div>
                                    </div>

                                    {/* Carousel Container */}
                                    <div className="relative">
                                        <div className={`grid grid-cols-2 grid-rows-1 h-[fit-content] max-xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-12`}>
                                            {visibleServices.map((service, index) => (
                                                <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                              >
                                                <div
                                                    key={index}
                                                    className="p-6 bg-white rounded-[30px] shadow-md transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
                                                >
                                                    <div className="mb-6">{service.icon}</div>
                                                    <h3 className="text-xl lg:text-[18px] xl:text-xl font-bold mb-6">{service.heading}</h3>
                                                    <p className="text-gray-700 max-sm:text-[12px] sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[15px]">{service.paragraph}</p>
                                                </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Carousel Controls */}
                                        <div className="flex justify-center gap-4 mt-8">
                                            <button
                                                onClick={prev}
                                                disabled={currentIndex === 0}
                                                className="p-3 rounded-full bg-white/80 hover:bg-white disabled:opacity-30 shadow-lg transition-all"
                                            >
                                                <FiChevronLeft className="w-6 h-6 text-gray-900" />
                                            </button>
                                            <button
                                                onClick={next}
                                                disabled={currentIndex >= servicesArr.length - itemsPerView}
                                                className="p-3 rounded-full bg-white/80 hover:bg-white disabled:opacity-30 shadow-lg transition-all"
                                            >
                                                <FiChevronRight className="w-6 h-6 text-gray-900" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Container>
            </div>
        </section>
    );
};


export default Drive