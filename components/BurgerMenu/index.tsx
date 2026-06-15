'use client'
import { useState, useEffect } from "react"
import styles from "./burgermenu.module.scss"
import Link from "next/link"

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const NavbarItems: { label: string; href: string }[] = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Career", href: "#" },
    { label: "Blog", href: "#" },
    { label: "xSchool", href: "#" },
  ]

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <button
        className={styles.burgerBtn}
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <span>Menu</span>
      </button>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`${styles.menuPanel} ${menuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.menuHeader}>
          <img src="svg/wemark_header_logo.svg" alt="wemark_logo" className={styles.menuLogo} />
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className={styles.menuNav}>
          {NavbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={styles.menuLink}
              style={{ animationDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.menuFooter}>
          <Link href="#" className={styles.letsTalk} onClick={() => setMenuOpen(false)}>
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu