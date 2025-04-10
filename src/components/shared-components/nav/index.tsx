import Link from "next/link"
import Container from "../container"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { relative } from "path";

interface NavbarProps {
    color: string; // Accept a color prop
}
const Navbar: React.FC<NavbarProps> = ({ color }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full">
      <div className={`${color !== "" ? `bg-[${color}]` : "bg-transparent"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-[30px] font-bold">
            <Link href="/">Emmanuel Eyo</Link>
          </div>

          {/* Desktop Nav */}
          <ul className=" hidden h-[0] opacity-[0]  md:block overflow-y-hidden gap-10 text-lg font-medium">
            <li className="mb-[30px]"><Link href="/case-study">Case Study</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
                <li><Link className="block w-full px-4 py-3 bg-[#fff] hover:bg-white/30" href="/case-study" onClick={() => setIsOpen(false)}>Case Study</Link></li>
                <li><Link className="block w-full px-4 py-2 bg-[#fff] hover:bg-white/30" href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    )
}
export default Navbar