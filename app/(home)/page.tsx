import { getXschool, XschoolData } from "@/lib/xschool";
import HeroSection from "./_components/sections/Hero";
import AboutSection from "./_components/sections/About";
import FounderSection from "./_components/sections/Founder";
import ProgramSection from "./_components/sections/Program";
import MarqueeSection from "./_components/sections/Marquee";
import FAQSection from "./_components/sections/FAQ";

export default async function Home() {
    const data: XschoolData = await getXschool();

  return (
   <div >
    <HeroSection data={data}/>
    <div className="container">
    <AboutSection data={data}/> 
    <FounderSection data={data}/>
    <ProgramSection data={data}/> 
    <MarqueeSection data={data}/>
    <FAQSection data={data}/> 
    </div>  
   </div>
  );
}
