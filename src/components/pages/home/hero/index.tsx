import { Container } from "@shared"
import Link from "next/link"
const HomeHero = () => {
    return (
        <header>
            <div className="header-inner pb-[50px] bg-gradient-to-b from-[#F2B7B4] to-[#FECF5A] pt-[200px]">
                <Container>
                    <section className="hero-content-cont mb-[100px]">
                        <div className="hero-headingText-cont w-[75%] mb-[60px]">
                            <h2 className="text-[3.5rem] leading-tight">Hi, I’m Emmanuel Eyo, a Growth Strategist, Revenue Hacker & Your Next Competitive Advantage.</h2>
                        </div>
                        <div className="hero-image-cont w-[100%] h-[730px]">
                            <img src="/img/work2.jpg" className="block w-[100%] h-[100%] object-cover rounded-[40px]" alt="" />
                        </div>
                    </section>
                </Container>
            </div>
        </header>
    )
}
export default HomeHero;