import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DetailText from "../components/DetailText"
import GenericBanner from "../components/GenericBanner"

const GenericPage = () => (
  <Layout>
    <GenericBanner />
    <DetailText />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default GenericPage
