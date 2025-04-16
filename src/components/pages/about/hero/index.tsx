import {Container} from "@shared"
import Link from "next/link"
const AboutHero = () =>{
    return(
        <header>
            <div className="header-inner pb-[50px] pt-[200px] bg-gradient-to-b from-[#a8c7d9] to-[#2c66c3]">
                <Container>
                    <section className="hero-content-cont mb-[100px]">
                        <div className="hero-headingText-cont w-[75%] mb-[60px]">
                            <h2 className="text-[4rem] leading-tight">We are a small but mighty collection of thinkers, dreamers, and creatives.</h2>
                        </div>
                        <div className="hero-image-cont w-[100%] h-[730px]">
                            <img src="/img/image-asset4.jpeg" className="block w-[100%] h-[100%] object-cover rounded-[70px]" alt="" />
                        </div>
                    </section>



                    <section className="section-content-cont text-[#fff]">
                        <div className="section-content-flex flex justify-between">
                            <div className="section-image-cont w-[12%]">
                                <img src="/img/white-arrow.png" alt="" />
                            </div>
                            <div className="section-content w-[70%]">
                                <div className="section-content-heading mb-[50px]">
                                    <h2 className="text-[40px] leading-tight">Our story started like many of yours with an idea and a big dream.</h2>
                                    <h2 className="text-[40px] mt-[20px] leading-tight">We wanted to turn our passion into something real, something that could grow, scale, and make an</h2>
                                </div>

                                <div className="section-content-paragraph flex gap-[80px]">
                                    <div>
                                        <p>Don’t worry about sounding professional. Sounds like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.</p>
                                    </div>
                                    <div>
                                        <p className="mb-[70px]">Don’t worry about sounding professional. Sounds like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        </header>
    )
}
export default AboutHero