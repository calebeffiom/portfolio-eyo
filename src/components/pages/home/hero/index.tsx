import { Container } from "@shared"
import Link from "next/link"
const HomeHero = () => {
    return (
        <header>
            <div className="header-inner pb-[50px] max-sm:pb-[20px] bg-gradient-to-b from-[#F2B6B4] to-[#FECF5A] pt-[200px] max-md:pt-[50px] md:pt-[150px] lg:pt-[200px]">
                <Container>
                    <section className="hero-content-cont">
                        <div className="hero-headingText-cont w-[100%] mb-[60px] max-sm:mb-[30px] sm:mb-[30px]">
                            <h2 className="text-[3.5rem] leading-tight max-sm:text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Hi, I'm Emmanuel Eyo, a Growth<br className="max-xs:hidden"/>Strategist, Revenue Hacker &<br className="max-xs:hidden"/>Your Next Competitive<br className="max-xs:hidden"/>Advantage.</h2>
                        </div>
                        <div className="hero-image-cont w-[100%] h-[740px] max-sm:h-[300px] sm:h-[350px] md:h-[450px] xl:h-[740px]">
                            <img src="/img/work2.jpg" className="block w-[100%] h-[100%] object-cover rounded-[40px]" alt="" />
                        </div>
                    </section>
                </Container>
            </div>
        </header>
    )
}
export default HomeHero;
