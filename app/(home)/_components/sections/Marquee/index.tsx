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
         <div className={MarqueeStyles.marqueeRow}>
      <Marquee speed={40} autoFill pauseOnHover>
        {items.map((item, index) => (
          <div className={MarqueeStyles.Wrapper} key={index}>
            <span className={MarqueeStyles.item}>
              {item}
            </span>
            <span className={MarqueeStyles.star}>
              <img src="/svg/star.svg" alt="star" />
            </span>
          </div>
        ))}
      </Marquee>
      </div>
       <div className={MarqueeStyles.marqueeRow}>
      <Marquee speed={40} autoFill pauseOnHover direction="right">
        {items.map((item, index) => (
          <div className={MarqueeStyles.Wrapper} key={index}>
            <span className={MarqueeStyles.item} >
              {item}
            </span>
            <span className={MarqueeStyles.star}>
              <img src="/svg/star.svg" alt="star" />
            </span>
          </div>
        ))}
      </Marquee>
      </div>
    </div>
    
  )
}

export default MarqueeSection