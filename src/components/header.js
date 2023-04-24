import * as React from "react"
import { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

import "../scss/layout/header.scss"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const results = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            pageName
            slug
            nanner {
              nanner
            }
          }
        }
      }
    }
  `)

  const pageItems = results.allContentfulPage.edges

  const menuItems = pageItems.map(item => {
    return {
      link: `/${item.node.slug}`,
      title: `${item.node.pageName}`,
    }
  })
  // const menuItems = []

  let body = {}

  const moveToContact = e => {
    e.preventDefault()
    if (typeof document !== "undefined") {
      const element = document.getElementById("footer")
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (typeof document !== "undefined") {
    body = document.getElementsByTagName("html")[0]
  }
  const toggleMenuVisibility = e => {
    e.preventDefault()
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    function handleScroll() {
      if (typeof document !== "undefined") {
        if (window.pageYOffset > 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    if (isMenuOpen) {
      if (typeof document !== "undefined") {
        body.classList.add("mobile-menu-opened")
      }
    } else {
      if (typeof document !== "undefined") {
        body.classList.remove("mobile-menu-opened")
      }
    }
    if (typeof document !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      if (typeof document !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [isMenuOpen])

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <Link className="site-link" to="/">
          <img src="../logo.svg" alt="logo" />
        </Link>
        <div className="menu-wrapper">
          <ul className="menu-list">
            {menuItems.map(function (item) {
              return (
                <li key={item.title}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              )
            })}
            <li>
              <a className="btn btn-primary" href="#" onClick={moveToContact}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="only-mobile">
          <button
            className="mobile-menu-toggler"
            onClick={e => {
              toggleMenuVisibility(e)
            }}
          >
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="cross"
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              className="hamburger"
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
