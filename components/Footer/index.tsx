import Link from "next/link"
import footerStyles from "./footer.module.scss"


const Footer = () => {
  return (
    <div className={`${footerStyles.footer} ${"container"}`}>
      <div className={footerStyles.footerContent}>
    <div className={footerStyles.footerColumn}>
        <span>Sitemap</span>
        <ul>
            <li>Case Studies</li>
            <li>Services</li>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>News</li>
            <li>Vacancies</li>
        </ul>
    </div>
    <div className={footerStyles.footerColumn}>
        <span>Follow Us On</span>
        <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
        </ul>
    </div>
    <div className={footerStyles.footerColumn}>
        <span>Office</span>
        <ul>
            <li>Alibeyov Gardashlari 27,</li>
            <li>Sabail, Sabah Residence</li>
        </ul>
    </div>
    <div className={footerStyles.footerColumn}>
        <div className={footerStyles.partershipWrapper}>
            <span>For Partnerships</span>
        <ul>
            <li>partnership@wemark.az</li>
            <li>+994 51 555 55 55</li>
        </ul>
        </div>
        <div className={footerStyles.languageMobile}>
    <img src="svg/globe-01.svg" alt="lang_icon" />
    <div className={footerStyles.switch}>
    <span>AZERBAIJANi</span>
    <div className={footerStyles.divide}/>
    <span>ENGLISH</span>
    </div>
  </div>
    </div>
    <div className={footerStyles.arrowUp}>
      <img src="svg/Vector_4.svg" alt="arrow_up" />
    </div>
</div>
      <div className={footerStyles.divider}/>
      <div className={footerStyles.footerLogo}>
        <img src="svg/wemark_header_logo.svg" alt="wemark logo" width={876} height={139}/>
      </div>
     <div className={footerStyles.bottomWrapper}>
  <div className={footerStyles.bottomInfo}>
    <span>Copyright © 2024 Wemark</span>
    <Link href="#">Terms & Privacy</Link>
    <button className={footerStyles.button}>BACK TO TOP <img src="svg/Vector_4.svg" alt="arrow_up" /></button>
  </div>

  <div className={footerStyles.languageDesktop}>
    <img src="svg/globe-01.svg" alt="lang_icon" />
    Azərbaycan dili
  </div>
</div>
    </div>
  )
}

export default Footer
