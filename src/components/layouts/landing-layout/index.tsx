import { JSX } from "react"
import { Navbar, Footer } from "@shared";

interface PropTypes {
    children: JSX.Element | React.ReactNode;
    title?: string,
    url?: string,
    image?: string,
    themeColour?: string,
    description?: string,
    showNavBar?: boolean,
    showFooter?: boolean,
    navColor?: string
}
const LandingLayout = ({ 
    children,
    title,
    url,
    image,
    themeColour = "",
    description,
    showNavBar = true,
    showFooter = true,
    navColor = ""
 }: PropTypes) => {
    return (
        // <html lang="en">
            // <body>
            <div>
            {showNavBar === true && <Navbar color={navColor}/>}
                <main>{children}</main>
            {showFooter === true && <Footer/>}
            </div>
            // </body>
        // </html>
)
}
export default LandingLayout;