import * as React from "react"
import { useEffect, useState } from "react"

import { Link } from "gatsby"

import "../scss/layout/main-navigation.scss"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <Link href="/">
          <img src="../logo.svg" alt="logo" />
        </Link>

        <ul className="menu-list">
          <li>
            <a href="#">Skylark Capital</a>
          </li>
          <li>
            <a href="#">Mobile Enterprise</a>
          </li>
          <li>
            <a href="#">Mobile Footprint</a>
          </li>
          <li>
            <a href="#">Big Data</a>
          </li>
          <li>
            <a href="#">Audio Visual</a>
          </li>
          <li>
            <a className="btn btn-primary" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
