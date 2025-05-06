"use client";
import { Container } from "@shared"
import { motion } from "framer-motion"
const Experience = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-gradient-to-b from-[#F2B6B4] to-[#FECF5A] py-16 md:py-24">
                <Container>




                    
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Text Content */}
                        <div className="space-y-8 md:space-y-12">
                            <div className="space-y-6">
                                  <h2 className="text-[50px] xl:text-[50px] lg:text-[35px] md:text-[25px] sm:text-[25px] max-sm:text-[25px]">Hi! I'm Emmanuel Eyo</h2>

                            <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Start off the screen to the left
                                    whileInView={{ opacity: 1, x: 0 }} // Move to its original position
                                    transition={{
                                        type: 'spring', // Smooth movement
                                        stiffness: 100, // Optional: Adjust the spring stiffness for a bounce effect
                                        damping: 25, // Optional: Adjust the damping for smoothness
                                    }}
                                >
                                  <p className="bg-gradient-to-r from-gray-900 mb-4 to-gray-700 bg-clip-text text-transparent text-lg max-sm:text-[13px] sm:text-[15px] md:text-[13px] lg:text-[18px] leading-relaxed text-gray-900">
                                    I'm a Growth Strategist, Revenue Hacker & Your Next Competitive Advantage.
                                    </p>
                                </motion.div>

                                <div className="pl-6 border-l-4 border-gray-900">
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }} // Start off the screen to the left
                                        whileInView={{ opacity: 1, x: 0 }} // Move to its original position
                                        transition={{
                                            type: 'spring', // Smooth movement
                                            stiffness: 100, // Optional: Adjust the spring stiffness for a bounce effect
                                            damping: 25, // Optional: Adjust the damping for smoothness
                                        }}
                                    >
                                        <p className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-lg max-sm:text-[13px] sm:text-[15px] md:text-[13px] lg:text-[18px] italic text-gray-900">
                                            "Your story isn't just content - it's the soul of your brand.
                                            If your words don't sound like they're coming from you,
                                            we still have work to do."
                                        </p>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Signature */}
                            <div className="flex items-center space-x-4">
                                <div className="h-0.5 w-12 bg-gray-900" />
                                <span className="font-display text-gray-900">Caleb</span>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative group">
                            <div className="relative overflow-hidden max-sm:h-[fit-content] max-md:h-[fit-content] rounded-3xl lg:rounded-[40px] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                                <img
                                    src="/img/portfolio-pic.jpg"
                                    alt="Caleb Effiom"
                                    className="w-full h-auto aspect-[3/4] max-md:aspect-[4/4] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FECF5A] rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Experience