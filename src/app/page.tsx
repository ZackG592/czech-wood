import AboutSection from "@/sections/aboutSection/AboutSection";
import AdvantagesSection from "@/sections/advantagesSection/AdvantagesSection";
import AskQuestionSection from "@/sections/askQuestionSection/AskQuestionSection";
import OpenSection from "@/sections/openSection/OpenSection";
import OurWorkSection from "@/sections/ourWorkSection/OurWorkSection";
import WoodWeUseSection from "@/sections/woodWeUseSection/woodWeUseSection";


export default function Home() {
  return (
    <div>
        <OpenSection/>
        <WoodWeUseSection/>
        <OurWorkSection/>
        <AdvantagesSection/>
        <AboutSection/>
        <AskQuestionSection/>
    </div>
  );
}
