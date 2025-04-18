"use client"
import { Container } from "@shared"
import { motion, AnimatePresence } from 'framer-motion';
const WhatWeDo = () => {
    const logos = [
        "https://www.ikoafrica.com/images/logo.svg",
        "https://emmanuel-eyo-portfolio.vercel.app/ci-gray.png",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDINz7Bxswk_HbKx1hgsN_Wbo9I6lssj9_Rlub8xCB82paHYyA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBXmMdRwkKpHzcggjJr8eDFi7yZxx0l22ew&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp--Eud5fi91lKzDhjMwA9aQr4-m6T-VlTSA&s",
        "https://yt3.googleusercontent.com/ytc/AIdro_kGEw7aJGOYyUa3cWEj_QHCgfNmodI9eQxJhV83L1fP2Q=s900-c-k-c0x00ffffff-no-rj"


    ]
    return (
        <section>
            <div className="bg-gradient-to-b from-[#F2B6B4] to-[#FECF5A] py-[50px] max-xs:py-[50px] lg:py-[100px]">
                <Container>
                    <div>
                        <div className="text-center">
                            <h2 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-5xl max-sm:text-start max-sm:text-[1.3rem] max-sm:mb-1 sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[60px]">Businesses I’ve worked with </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                className="h-1 bg-[#000] mx-[auto] mt-4 origin-left mb-[50px]  max-sm:mx-[0]"
                            />

                        </div>
                        <div className="w-full overflow-x-auto overflow-y-hidden">
                            <div className="flex min-w-max gap-6 px-6 py-4">
                                {logos.map((logo, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex-shrink-0 p-10 rounded-full bg-white shadow-lg"
                                    >
                                        <img src={logo} className="w-[120px] h-[100px] max-sm:w-[80px] max-sm:h-[80px] object-contain" alt="" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>


                    </div>
                </Container>
            </div >
        </section >
    )
}
export default WhatWeDo