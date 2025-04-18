import { LandingLayout } from "@layouts";
import CaseStudyPage from "../pages/case-study";
import { NextPage } from "next";
const CaseStudy: NextPage =()=>{
    return(
        <LandingLayout
            navColor="#F2B6B4"
        >
            <CaseStudyPage/>
        </LandingLayout>
    )
}
export default CaseStudy