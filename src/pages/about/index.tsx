import { NextPage } from "next";
import AboutPage from "../pages/about";
import { LandingLayout } from "@layouts";
const About: NextPage = () => {
    return (
      <LandingLayout
        navColor="#ffff"
      >
        <AboutPage/>
      </LandingLayout>
    );
  }
  export default About
  