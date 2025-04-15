import { Container } from "@shared"
const Team = () => {
    return (
        <section>
            <div className="bg-gradient-to-b from-[#FECF5A] to-[#F2B7B4] pt-[50px] pb-[100px]">
                <Container>
                    <div>
                        <div className="w-[fit-content] mx-[auto] mb-[100px]"><h2 className="text-[4rem]">Meet the team</h2></div>

                        <div className="flex justify-between gap-[25%]">

                            <div className="w-[40%]">
                                <div className="">
                                    <img src="/img/image-asset6.jpeg" className="h-[550px] w-[100%]" alt="" />
                                </div>
                                <div className="text-center mt-[40px]">
                                    <div className="mb-[10px]"><h2 className="text-[25px]">Alex Agaro</h2></div>
                                    <div><p>Co-founder, Chief Creative Officer</p></div>
                                </div>
                            </div>




                            <div className="w-[40%]">
                                <div>
                                    <img src="/img/image-asset7.jpeg" className="h-[550px] w-[100%]" alt="" />
                                </div>
                                <div className="text-center mt-[40px]">
                                    <div className="mb-[10px]"><h2 className="text-[25px]">Chase Nevins-Agaro</h2></div>
                                    <div><p>Co-founder, Chief Strategy Officer</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </section>
    )
}
export default Team