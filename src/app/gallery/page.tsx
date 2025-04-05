import AboutSection from "@/sections/aboutSection/AboutSection";
import AskQuestionSection from "@/sections/askQuestionSection/AskQuestionSection";
import OurWorkSection from "@/sections/ourWorkSection/OurWorkSection";
import WoodWeUseSection from "@/sections/woodWeUseSection/woodWeUseSection";


export default function Page(){
    return(
        <>
            <OurWorkSection/>
            <WoodWeUseSection/>
            <AskQuestionSection/>
        </>
    )
}