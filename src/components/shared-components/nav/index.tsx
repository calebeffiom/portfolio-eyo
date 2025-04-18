import Link from "next/link"
import Container from "../container"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiMail } from "react-icons/ci"
import { IoMailOpen } from "react-icons/io5";
import { RiMailCloseFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
interface NavbarProps {
    color: string; // Accept a color prop
}
const Navbar: React.FC<NavbarProps> = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMailOpen, setIsMailOpen] = useState(false)
    return (
        <nav className="w-full shadow-lg">
            <div style={{backgroundColor: `${color}`}} className={`${color !== "" ? `bg-[${color}]` : "bg-transparent"}`}>

            
            <Container>
                <div className="transition-colors duration-300">
                    <div className="w-[100%] mx-auto py-6 flex justify-between items-center">
                        {/* Logo */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-[30px] font-bold">
                            <Link href="/">Emmanuel Eyo</Link>
                        </div>

                        {/* Desktop Nav */}
                        <ul className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hidden items-center md:flex overflow-y-hidden gap-10 text-lg font-medium">
                            <li><Link href="/case-study">Case Study</Link></li>
                            <li className="bg-gray-900 rounded-[10px]">
                                <Link
                                onMouseEnter={()=>{setIsMailOpen(true)}}
                                onMouseLeave={()=>{setIsMailOpen(false)}}
                            className="block px-[30px] text-[#fff] py-[10px] shadow-lg" href="mailto: emmanueleyo25@gmail.com"><span className="flex"><p>Chat me</p> {isMailOpen === false? <IoMail className="text-[24px] ml-[10px]"/>:<IoMailOpen className="text-[24px] ml-[10px]"/>}</span></Link></li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex">
                            <button
                                className="text-2xl focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Dropdown */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 1 }}
                                animate={{ height: "auto", opacity: 1, overflowY: "hidden" }}
                                exit={{ height: 0, opacity: 1, overflowY: "hidden", }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden px-6 pb-4"
                            >
                                <ul className=" gap-4 text-lg bg-[#fff] h-[auto] ml-[auto] font-medium">
                                    <li><Link className="block w-full px-4 py-2 bg-[#fff] hover:bg-white/30" href="/about" onClick={() => setIsOpen(false)}>Contact</Link></li>
                                    <li><Link className="block w-full px-4 py-3 bg-[#fff] hover:bg-white/30" href="/case-study" onClick={() => setIsOpen(false)}><span className="flex"><p>Chat me</p> {isMailOpen === false? <IoMail className="text-[25px] ml-[10px]"/>:<IoMailOpen className="text-[24px] ml-[10px]"/>}</span></Link></li>
                                    
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
            </div>
        </nav>
    )
}
export default Navbar