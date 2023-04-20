import * as React from "react"
import { Link } from "gatsby"

import "../scss/layout/main-navigation.scss"

const Header = () => (
  <header>
    <div className="container">
      <a href="#">Logo </a>

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

export default Header
