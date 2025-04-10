import Container from "../container"
import Link from "next/link"
import { CiMail } from "react-icons/ci"
const Footer = () =>{
    return(
        <footer className="bg-[#000] text-[#fff]">
            <div className={`footer-inner`}>
                <Container>
                    <div className={`footer-content-cont  py-[100px] max-xs:py-[50px]`}>
                            <div className="footer-links-cont text-center">
                                <h2 className="mb-[20px] text-[70px] max-sm:text-[15px] sm:text-[20px] lg:text-[30px]">Interested in working together?</h2>
                                <CiMail className="text-[80px] mx-[auto] text-[#F2B6B4] mb-[20px]"/>
                                <p className="max-sm:text-[13px] sm:text-[18px] leading-[2]">Reach out to me; <Link className="underline" href="mailto: emmanueleyo25@gmail.com">emmanueleyo25@gmail.com.</Link> Let's create magic for your business!</p>
                            </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
export default Footer