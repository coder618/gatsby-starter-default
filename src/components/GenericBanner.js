import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../scss/layout/GenericBanner.scss"

const GenericBanner = () => (
  <div className="generic-banner">
    <div className="bg">
      <img
        className="shape-1"
        src="../generic-banner-shape-1.svg"
        alt="shape-1"
      />
      <img
        className="shape-2"
        src="../generic-banner-shape-2.svg"
        alt="shape-2"
      />
    </div>

    <div className="text-part">
      <div className="container">
        <img className="ufo" src="../generic-banner-ufo.svg" alt="ufo" />
        <h1>Generic Page</h1>
      </div>
    </div>
  </div>
)

export default GenericBanner
