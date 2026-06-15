'use client'
import { useState } from "react"
import NavbarStyles from "./navbar.module.scss"
import Link from "next/link"
import BurgerMenu from "../BurgerMenu"


const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false)
  const NavbarItems: {label: string; href: string}[] =[
    {label: "About", href: "#"},
    {label: "Services", href: "#"},
    {label: "Case Studies", href: "#"},
    {label: "Career", href: "#"},
    {label: "Blog", href: "#"},
    {label: "Xschool", href: "#"},
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
            <Link href="#">Let's Talk</Link>
        </div>
        <div className={NavbarStyles.menuLabel}>
        <BurgerMenu/>
        </div>
    </div>
  )
}

export default Navbar

