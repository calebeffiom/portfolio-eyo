"use client"
import { Container } from "@shared"
import { motion } from "framer-motion"
import { FaQuoteRight } from "react-icons/fa"
import { FaQuoteLeft } from "react-icons/fa6"
// import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
const Testimonials = () => {
    const testimonials = [
        {
            content: "Eyo demonstrates exceptional grit. He consistently delivers under pressure and approaches every challenge with focus and determination. You can always count on him to get things done.",
            author: "Josephine Inika – COO, Iko Africa",
        },
        {
            content: "Emmanuel is remarkably innovative. He has a unique ability to turn simple tools and ideas into high-impact growth strategies. His creativity drives real results.",
            author: "Annie White – Founder, V Vitamins",
        },
        {
            content: "Emmanuel operates with a strong sense of ownership. He treats every project with the care and commitment of a founder, and it shows in both his ideas and execution.",
            author: "Francis N. – CMO, Course Incubator",
        }
    ]
    return (
        <section>
            <div className="bg-[#FECF5A] py-[50px] max-xs:py-[50px] lg:py-[100px]">
                <Container>

                    <div>
                        <div className="w-[100%] leading-tight mb-[80px] max-lg:mb-[40px] lg:mb-[80px] ">
                            <h2 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-[60px] mb-[18px] max-sm:text-start max-sm:text-[1.3rem] max-sm:mb-1 sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[60px]">Testimonials </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                className="h-1 bg-[#000] mt-4 origin-left"
                            />

                            {/* </motion.div> */}
                            {/* <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"/> */}
                        </div>
                        <section className="section-content-cont">
                            <div className="section-content-flex flex justify-between">
                                

                                <div className="section-content w-[100%] max-sm:w-[100%]">

                                    {/* Carousel Container */}
                                    <div className="relative">
                                        <div className="grid grid-cols-3 h-[fit-content] gap-3 lg:gap-8 xl:gap-12 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 max-sm:grid-cols-1">
                                            {testimonials.map((testimony, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="w-[auto] mx-[auto]"
                                                >
                                                    <div
                                                        key={index}
                                                        className="p-6 h-[100%] mx-[auto] bg-white rounded-[30px] shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center max-md:w-[80%] max-md:p-8 "
                                                    >
                                                        <div className="mb-6"><FaQuoteLeft className="text-3xl text-gray-800"/></div>
                                                        <p className="text-gray-700 mb-[20px] max-sm:text-[12px] sm:text-[11px] md:text-[13px] lg:text-[13px] xl:text-[15px]">{testimony.content}</p>
                                                        <h3 className="text-[15px] text-gray-800 font-bold mb-6 lg:text-[18px] xl:text-xl ">{testimony.author}</h3>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>


                                    
                                </div>
                            </div>
                           
                        </section>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default Testimonials;