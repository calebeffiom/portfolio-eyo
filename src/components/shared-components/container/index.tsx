import { JSX } from "react";
interface PropTypes{
    children: JSX.Element | React.ReactNode;
}
const Container = ({children} :PropTypes) =>{
    return(
        <section className="w-[85%] max-md:w-[90%] mx-auto">
            {children}
        </section>
    )
}
export default Container