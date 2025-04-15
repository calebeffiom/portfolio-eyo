import { Container } from "@shared"
import Link from "next/link"
const HomeHero = () => {
    return (
        <header>
            <div className="header-inner pb-[50px] max-sm:pb-[20px] bg-[#a8c7d9] pt-[200px] max-md:pt-[50px] md:pt-[150px] lg:pt-[200px]">
                <Container>
                    <section className="hero-content-cont">
                        <div className="hero-headingText-cont w-[100%] mb-[60px] max-sm:mb-[30px] sm:mb-[30px]">
                            <h2 className="text-[3.5rem] leading-tight max-sm:text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem]">We are a small but migthy<br className="max-xs:hidden"/> collection of  thinkers<br className="max-xs:hidden"/>  dreamers and creatives</h2>
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