import HeroStyles from "./hero.module.scss";
import Navbar from "@/components/Navbar";
import {XschoolData} from "@/lib/xschool";

interface HeroSectionProps {
  data: XschoolData;
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const lines = data.banner_title
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter(Boolean);

  return (
    <div className={HeroStyles.heroSection}>
      <img src={data.banner_image} alt="hero_image" className={HeroStyles.bannerImage} />
      <div className={HeroStyles.navbarContainer}>
        <Navbar/>
      </div>
      <div className={HeroStyles.heroTitleWrapper}>
  {lines.map((line, i) => (
    <span
      key={i}
      className={`${HeroStyles.heroTitleLine} ${HeroStyles[`line${i}`]}`}
    >
      {line}
    </span>
  ))}
</div>
    </div>
  );
};

export default HeroSection;