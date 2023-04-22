import * as React from "react"
import { Link } from "gatsby"
import "../../scss/home/banner-home.scss"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => (
  <div className="banner-home">
    <img src="../banner-home-bg.svg" className="banner-bg desktop" />
    <img src="../banner-home-bg-mobile.svg" className="banner-bg mobile" />

    <div className="top">
      <div className="content">
        <img src="../home-ufo.svg" alt="" className="ufo-home-bg" />
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>
    </div>
    <div className="bottom">
      <div className="content">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
        </p>
      </div>
    </div>
  </div>
)

export default Banner
