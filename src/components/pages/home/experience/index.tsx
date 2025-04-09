"use client";
import { Container } from "@shared"
import { motion } from "framer-motion"
const Experience = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-[#FECF5A] py-16 md:py-24">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
                        <h2 className="text-[60px] md:text-6xl text-gray-900 mb-6">
                            Crafting Digital Stories<br className="hidden md:block" /> That Resonate
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '80px' }}
                            className="h-1 bg-gray-900 mt-4 mx-auto origin-center"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Text Content */}
                        <div className="space-y-8 md:space-y-12">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Start off the screen to the left
                                    whileInView={{ opacity: 1, x: 0 }} // Move to its original position
                                    transition={{
                                        type: 'spring', // Smooth movement
                                        stiffness: 100, // Optional: Adjust the spring stiffness for a bounce effect
                                        damping: 25, // Optional: Adjust the damping for smoothness
                                    }}
                                >
                                    <p className="text-lg md:text-xl leading-relaxed text-gray-900">
                                        With over <span className="font-semibold">20 years of combined experience</span>,
                                        I believe every great venture starts with a spark of imagination. Whether you're launching
                                        a startup, transforming a passion project, or sharing creative work with the world,
                                        your digital narrative needs to captivate and connect.
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
                                        <p className="text-lg italic text-gray-900">
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
                                <span className="font-display text-gray-900">Caleb Effiom</span>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-3xl lg:rounded-[40px] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                                <img
                                    src="/img/profile.jpg"
                                    alt="Caleb Effiom"
                                    className="w-full h-auto aspect-[3/4] object-cover"
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