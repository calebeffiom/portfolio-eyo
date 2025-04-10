"use client";
import { Container } from "@shared"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';



const HowWeHelp = () => {
    const services = [
        {
          heading: "Social Platforms",
          items: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Twitter (X)", "YouTube", "Threads", "Pinterest"]
        },
        {
          heading: "Analytics & Reporting",
          items: ["Google Analytics (GA4)", "Meta Business Suite / Ads Manager", "Mixpanel", "Hotjar / Microsoft Clarity"]
        },
        {
          heading: "SEO Tools",
          items: ["Google Search Console", "Ahrefs", "SEMrush", "Ubersuggest"]
        },
        {
          heading: "Email Marketing",
          items: ["Klaviyo", "Mailchimp", "ActiveCampaign", "ConvertKit", "Zoho Mail"]
        },
        {
          heading: "Social Media Marketing Tools",
          items: ["Gain", "Buffer", "Hootsuite", "Agorapulse", "Plann"]
        },
        {
          heading: "Paid Ads Platforms",
          items: ["Google Ads", "Meta Ads (Facebook + Instagram)", "LinkedIn Ads", "TikTok Ads", "X Ads"]
        },
        {
          heading: "Visual Design",
          items: ["Canva", "Figma", "Adobe", "CapCut"]
        },
        {
          heading: "No-Code Development",
          items: ["Webflow", "Framer", "Carrd", "Airtable", "Squarespace", "Shopify"]
        },
        {
          heading: "Project Management",
          items: ["Asana", "Trello", "Notion", "ClickUp", "Slack", "Google Workspace", "Miro"]
        },
        {
          heading: "CRM & Customer Journey",
          items: ["HubSpot", "Pipedrive", "Salesforce"]
        },
        {
          heading: "Automations & Workflows",
          items: ["GoHighLevel (GHL) Workflows", "Zapier", "Make (Integromat)"]
        },
        {
          heading: "Businesses I've Worked With",
          items: ["Iko Africa", "Course Incubator", "V Vitamins", "Buffalo Solar", "Pix Brix", "Mochi Label"]
        }
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [itemsPerView, setItemsPerView] = useState(4)
      const [width, setWidth] = useState(0);
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
          if (width <= 760) {
            setItemsPerView(2);
            if(width <= 460){
              setItemsPerView(1); // Default to 3 when larger than 1024px
            } // Change itemsPerView to 2 when screen size is 1024px or smaller
          }else{
              setItemsPerView(4)
          }
        }, [width]);
      const visibleServices = services.slice(currentIndex, currentIndex + itemsPerView);
    
      const next = () => {
        setCurrentIndex(prev => Math.min(prev + itemsPerView, services.length - itemsPerView));
      };
    
      const prev = () => {
        setCurrentIndex(prev => Math.max(prev - itemsPerView, 0));
      };
    
      return (
        <section className="relative">
          <div className="py-20 max-md:py-10 md:py-18 bg-[#F2B7B4]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row justify-between md:gap-12">
                {/* Left Content */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-12"
                  >
                    <h2 className="text-[60px] max-sm:text-start max-sm:text-[1.3rem] max-sm:mb-1 sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[60px] bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      My Tech Stack
                    </h2>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '80px' }}
                      className="h-1 bg-gray-900 mt-4 origin-left"
                    />
                  </motion.div>
    
                  <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {visibleServices.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.heading}</h3>
                          <div className="flex flex-wrap gap-2">
                            {service.items.map((item, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex cursor-default items-center px-3 py-1.5 bg-[#fff] rounded-full"
                              >
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                                <span className="text-gray-600 text-sm">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
    
                    <div className="flex justify-center mt-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        disabled={currentIndex === 0}
                        className="p-2 mx-[10px] shadow-lg rounded-full bg-white/80 hover:bg-white/70 disabled:opacity-30"
                      >
                        <FiChevronLeft className="w-6 h-6 text-gray-700" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        disabled={currentIndex >= services.length - itemsPerView}
                        className="p-2 mx-[10px] shadow-lg rounded-full bg-white/80 hover:bg-white/70 disabled:opacity-30"
                      >
                        <FiChevronRight className="w-6 h-6 text-gray-700" />
                      </motion.button>
                    </div>
                  </div>
                </div>
    
                {/* Right Image */}
                <div className="w-[45%] max-lg:hidden relative group">
                    <div className="relative overflow-hidden max-sm:h-[fit-content] max-md:h-[fit-content] rounded-3xl rounded-3xl lg:rounded-[40px] shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <img 
                            src="/img/setup.jpeg"
                            alt="Caleb Effiom"
                            className="w-full h-auto aspect-[3/4] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#F2B7B4] rounded-full opacity-30 group-hover:opacity-50 transition-opacity"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}    
export default HowWeHelp