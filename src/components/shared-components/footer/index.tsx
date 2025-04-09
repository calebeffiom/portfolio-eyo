import Container from "../container"
import Link from "next/link"
const Footer = () =>{
    return(
        <footer className="bg-[#000] text-[#fff]">
            <div className={`footer-inner`}>
                <Container>
                    <div className={`footer-content-cont flex  justify-between py-[100px]`}>

                        <div className="footer-writeup-cont w-[40%]"> 
                            <div className="footer-writeup-heading mb-[20px] w-[40%] leading-tight">
                                <h1 className="text-[60px]">Agaro Collective</h1>
                            </div>
                            <div className="footer-writeup-paragraph leading-tight">
                                <p>Agaro Collective is an independent strategy and design consultancy based in New York, NY. We’ve helped hundreds of clients realize their online potential. We are thrilled to have the opportunity to help you reach yours. </p>
                            </div>
                        </div>




                        <div className="footer-other-info flex w-[40%] justify-between">
                            <div className="footer-links-cont">
                                <ul className="flex flex-col gap-4 decoration-underline">
                                <li ><Link href={"/about"}><p className="underline text-[#F2B7B4]"> About</p></Link></li>
                                <li ><Link href={"#"}><p className="underline text-[#F2B7B4]"> Case Study</p></Link></li>
                                <li ><Link href={"/services"}><p className="underline text-[#F2B7B4]"> Services</p></Link></li>
                                <li ><Link href={"/contact"}><p className="underline text-[#F2B7B4]"> Contact</p></Link></li>
                                </ul>
                            </div>

                            <div className="footer-personal-cont">
                                <div className="footer-contact mb-[20px]">
                                    <p>email@example.com</p>
                                    <p>(555) 555-5555</p>
                                </div>
                                <div className="footer-address">
                                    <p>123 Demo Street</p>
                                    <p>New York, NY 12345</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}
export default Footer