import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GenericBanner from "../components/GenericBanner"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <GenericBanner title="404: Not Found" />

    <div className="detail-text">
      <div className="container ">
        <div className="content">
          <p>You just hit a route that doesn&#39;t exist... the sadness."</p>
          <Link to="/"> Back to home</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
