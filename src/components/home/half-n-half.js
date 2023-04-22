import * as React from "react"
import { Link } from "gatsby"
import "../../scss/home/half-n-half.scss"
import { StaticImage } from "gatsby-plugin-image"

const HalfNHalf = () => {
  const items = [1, 2, 3]
  return (
    <div className="half-n-half">
      <div className="container">
        {items.map(function (i) {
          return (
            <div className="item" key={i}>
              <div className="img-part">
                <img src="../../sample-img-1.svg" />
              </div>
              <div className="text-part">
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                  nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                  pretium, ligula sollicitudin laoreet viverra, tortor libero
                  sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                  Ut justo. Suspendisse potenti.
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HalfNHalf
