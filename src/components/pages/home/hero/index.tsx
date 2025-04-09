import { Container } from "@shared"
import Link from "next/link"
const HomeHero = () => {
    return (
        <header>
            <div className="header-inner pb-[50px] max-sm:pb-[20px] bg-gradient-to-b from-[#F2B7B4] to-[#FECF5A] pt-[200px] max-xs:pt-[50px] xs:pt-[50px] md:pt-[100px]">
                <Container>
                    <section className="hero-content-cont">
                        <div className="hero-headingText-cont w-[75%] max-xs:w-[95%] sm:w-[85%] md:w-[75%]  mb-[60px] max-sm:mb-[30px] sm:mb-[30px]">
                            <h2 className="text-[3.5rem] leading-tight max-sm:text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem]">Hi, I’m Emmanuel Eyo, a Growth Strategist, Revenue Hacker & Your Next Competitive Advantage.</h2>
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