import Marquee from "react-fast-marquee"
import { XschoolData } from "@/lib/xschool";
import MarqueeStyles from "./marque.module.scss"

interface MarqueSectionProps {
    data: XschoolData
}

const MarqueeSection = ({ data }: MarqueSectionProps) => {
  const { xline1, xline2, xline3 } = data.text_slider

  const items = [xline1, xline2, xline3]

  return (
    
      <div className={MarqueeStyles.marqueeSection}>
      <Marquee speed={40} autoFill pauseOnHover>
        {items.map((item, index) => (
          <div className={MarqueeStyles.Wrapper} key={index}>
            <span className={MarqueeStyles.item}>
              {item}
            </span>
            <span className={MarqueeStyles.star}>
              ✶
            </span>
          </div>
        ))}
      </Marquee>

      <Marquee speed={40} autoFill pauseOnHover direction="right">
        {items.map((item, index) => (
          <div className={MarqueeStyles.Wrapper} key={index}>
            <span className={MarqueeStyles.item} >
              {item}
            </span>
            <span className={MarqueeStyles.star}>
              ✶
            </span>
          </div>
        ))}
      </Marquee>
    </div>
    
  )
}

export default MarqueeSection