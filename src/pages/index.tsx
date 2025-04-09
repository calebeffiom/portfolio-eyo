import { LandingLayout } from "@layouts";
import HomePage from "./pages/home"
import { NextPage } from "next";
// import "./styles/globals.css"
const Home: NextPage = () => {
  return (
    <LandingLayout
      navColor="#F2B7B4"
      showFooter={false}
      showNavBar={false}
    >
      <HomePage/>
    </LandingLayout>
  );
}
export default Home