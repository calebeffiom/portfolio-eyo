import { NextPage } from "next";
import AboutPage from "../pages/about";
import { LandingLayout } from "@layouts";
const About: NextPage = () => {
    return (
      <LandingLayout
        navColor="#F2B7B4"
      >
        <AboutPage/>
      </LandingLayout>
    );
  }
  export default About
  