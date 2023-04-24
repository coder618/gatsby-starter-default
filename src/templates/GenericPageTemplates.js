import * as React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import DetailText from "../components/DetailText"
import GenericBanner from "../components/GenericBanner"

const GenericPageTemplates = contextData => {
  const data = contextData.pageContext.data
  console.log({ data })

  // const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout>
      <GenericBanner title={data.pageName} />
      <DetailText detail={data.nanner.nanner} />
    </Layout>
  )
}

export const Head = () => <Seo title="Using DSG" />

export default GenericPageTemplates
