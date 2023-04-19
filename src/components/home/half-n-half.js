import * as React from "react"
import { Link } from "gatsby"
import "../../scss/home/half-n-half.scss"
import { StaticImage } from "gatsby-plugin-image"

const HalfNHalf = () => (
  <div className="half-n-half">
    <div className="container">
      {/* item start  */}
      <div className="item">
        <div className="img-part">
          <StaticImage
            src="../../images/sample-img-1.svg"
            loading="eager"
            className="banner-bg"
            formats={["svg", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="text-part">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      {/* item end  */}

      {/* item start  */}
      <div className="item">
        <div className="img-part">
          <StaticImage
            src="../../images/sample-img-1.svg"
            loading="eager"
            className="banner-bg"
            formats={["svg", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="text-part">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      {/* item end  */}
      {/* item start  */}
      <div className="item">
        <div className="img-part">
          <StaticImage
            src="../../images/sample-img-1.svg"
            loading="eager"
            className="banner-bg"
            formats={["svg", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="text-part">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      {/* item end  */}
      {/* item start  */}
      <div className="item">
        <div className="img-part">
          <StaticImage
            src="../../images/sample-img-1.svg"
            loading="eager"
            className="banner-bg"
            formats={["svg", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="text-part">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      {/* item end  */}
    </div>
  </div>
)

export default HalfNHalf
