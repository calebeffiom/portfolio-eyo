"use client"
import { Container } from "@shared"
import { motion, AnimatePresence } from 'framer-motion';
const WhatWeDo = () => {
    const logos=[
        "https://www.ikoafrica.com/images/logo.svg",
        "https://emmanuel-eyo-portfolio.vercel.app/ci-gray.png",
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSDINz7Bxswk_HbKx1hgsN_Wbo9I6lssj9_Rlub8xCB82paHYyA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBXmMdRwkKpHzcggjJr8eDFi7yZxx0l22ew&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp--Eud5fi91lKzDhjMwA9aQr4-m6T-VlTSA&s",
        "https://yt3.googleusercontent.com/ytc/AIdro_kGEw7aJGOYyUa3cWEj_QHCgfNmodI9eQxJhV83L1fP2Q=s900-c-k-c0x00ffffff-no-rj"
        
        
    ]
    return (
        <section>
            <div className="bg-gradient-to-b from-[#F2B7B4] to-[#FECF5A] py-[100px]">
                <Container>
                    <div>
                        <div className="text-center">
                            <h2 className="text-5xl">Businesses I’ve worked with </h2>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '80px' }}
                                className="h-1 bg-gray-900 mx-[auto] mt-4 origin-left mb-[50px]" 
                            />
                    
                    </div>
                    <div className="flex">
                        {logos.map((logo, index)=>(
                             <motion.div
                             key={index} 
                             whileHover={{scale: 1.05, transition: { duration: 0.2 } }}
                             initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ delay: index * 0.1 }}
                             className="p-[40px] mb-12 mx-auto rounded-full bg-[#fff] shadow-lg h-[fit-content]">
                                 <img src={logo} className="w-[120px] h-[100px]" alt="" />
                             </motion.div>
                        ))}
                    </div>
            </div>
        </Container>
            </div >
        </section >
    )
}
export default WhatWeDo