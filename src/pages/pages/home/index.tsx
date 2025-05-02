import { HomeHero, Drive, WhatWeDo, HowWeHelp, Experience, Testimonials } from "@/components/pages/home"

const HomePage = () =>{
    return(
        <div>
            {/* <HomeHero /> */}
            <Experience/>
            <Drive/>
            <HowWeHelp/>
            <WhatWeDo/>
            <Testimonials/>
        </div>
    )
}
export default HomePage