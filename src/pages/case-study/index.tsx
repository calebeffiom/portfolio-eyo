import { LandingLayout } from "@layouts";
import CaseStudyPage from "../pages/case-study";
import { NextPage } from "next";
const CaseStudy: NextPage =()=>{
    return(
        <LandingLayout
            navColor="#fff"
        >
            <CaseStudyPage/>
        </LandingLayout>
    )
}
export default CaseStudy