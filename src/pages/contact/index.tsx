import { LandingLayout } from "@layouts";
import ContactPage from "../pages/contact"
import { NextPage } from "next";
// import "../styles/globals.css"
const Contact: NextPage = () => {
  return (
    <LandingLayout
      navColor="#F2B7B4"
    >
      <ContactPage/>
    </LandingLayout>
  );
}
export default Contact
