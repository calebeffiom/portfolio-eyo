import Link from "next/link"
import Container from "../container"

interface NavbarProps {
    color: string; // Accept a color prop
}
const Navbar: React.FC<NavbarProps> = ({ color }) => {
    return (
        <nav>
            <div className={color != "" ? `bg-[${color}]`:`bg-[transparent]`}>
                <Container>
                    <div className={`nav-content-cont flex justify-between items-center py-[3vw]`}>
                        <div className={`logo-cont`}>
                            <Link href={"/"}>
                            <h2 className="text-[30px]">Emmanuel Eyo</h2>
                            </Link>
                        </div>
                        <div className={`nav-cont`}>
                            <ul className={`nav-list flex gap-[80px]`}>
                                <li><Link href={"/case-study"}>Case Study</Link></li>
                                <li><Link href={"/contact"}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </nav>
    )
}
export default Navbar