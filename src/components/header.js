import * as React from "react"
import { useEffect, useState } from "react"

import { Link } from "gatsby"

import "../scss/layout/header.scss"

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
        <Link className="site-link" href="/">
          <img src="../logo.svg" alt="logo" />
        </Link>
        <div className="menu-wrapper">
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
        <div className="only-mobile">
          <button className="mobile-menu-toggler">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.34375 6.44531H22.6562C23.0877 6.44531 23.4375 6.09556 23.4375 5.66406V3.71094C23.4375 3.27944 23.0877 2.92969 22.6562 2.92969H2.34375C1.91226 2.92969 1.5625 3.27944 1.5625 3.71094V5.66406C1.5625 6.09556 1.91226 6.44531 2.34375 6.44531ZM2.34375 14.2578H22.6562C23.0877 14.2578 23.4375 13.9081 23.4375 13.4766V11.5234C23.4375 11.0919 23.0877 10.7422 22.6562 10.7422H2.34375C1.91226 10.7422 1.5625 11.0919 1.5625 11.5234V13.4766C1.5625 13.9081 1.91226 14.2578 2.34375 14.2578ZM2.34375 22.0703H22.6562C23.0877 22.0703 23.4375 21.7206 23.4375 21.2891V19.3359C23.4375 18.9044 23.0877 18.5547 22.6562 18.5547H2.34375C1.91226 18.5547 1.5625 18.9044 1.5625 19.3359V21.2891C1.5625 21.7206 1.91226 22.0703 2.34375 22.0703Z"
                fill="#9ACA3C"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
