import NavbarStyles from "./navbar.module.scss"
import Image from "next/image"
import Link from "next/link"


const Navbar = () => {

  const NavbarItems: {label: string; href: string}[] =[
    {label: "About", href: "/about"},
    {label: "Services", href: "/services"},
    {label: "Case Studies", href: "/case-studies"},
    {label: "Career", href: "/career"},
    {label: "Blog", href: "/blog"},
    {label: "Xschool", href: "/xschool"},
  ]

  return (
    <div className={`${NavbarStyles.navbar} ${"container"}`}>
        <div className={NavbarStyles.logo}>
            <img src="svg/wemark_header_logo.svg" alt="wemark logo"/>
        </div>
        <div className={NavbarStyles.navbarItems}>
            {NavbarItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    {item.label}
                </Link>
            ))}
        </div>
        <div className={NavbarStyles.contact}>
            <Link href="/contact">Let's Talk</Link>
        </div>
        <div className={NavbarStyles.menuLabel}>
        <span >Menu</span>
        </div>
    </div>
  )
}

export default Navbar
