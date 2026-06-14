import ImageSlider from "@/components/Slider";
import AboutStyles from "./about.module.scss"
import {XschoolData} from "@/lib/xschool";
import Link from "next/link";


interface AboutSectionProps {
    data: XschoolData;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  
  return (
    <>
    <div className={AboutStyles.aboutSection}>
      <div className={AboutStyles.aboutHeader}>
        <span>{data.about_title}</span>
        <div className={AboutStyles.link}>
          <Link href="#">Go to xSchool</Link>
        </div>
        
      </div>
      <div className={AboutStyles.aboutDescription}>
        <p>{data.about_description}</p>
      </div>
    </div>
    <div className={AboutStyles.aboutSlider}>
        <ImageSlider about_images={data.about_images} />
      </div>
    </>
  )
}

export default AboutSection
