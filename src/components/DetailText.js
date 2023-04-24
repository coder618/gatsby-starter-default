import * as React from "react"
// import { Link } from "gatsby"
import "../scss/components/DetailText.scss"
import ReactMarkdown from "react-markdown"

const DetailText = prop => (
  <div className="detail-text">
    <div className="container ">
      <div className="content">
        <ReactMarkdown>{prop.detail}</ReactMarkdown>
      </div>
    </div>
  </div>
)

export default DetailText
