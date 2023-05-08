import * as React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import DetailText from "../components/DetailText"
import GenericBanner from "../components/GenericBanner"

const GenericPageTemplates = contextData => {
  const data = contextData.pageContext.data

  return (
    <Layout>
      <GenericBanner title={data.pageName} />
      <DetailText detail={data.nanner.nanner} />
    </Layout>
  )
}

export const Head = contextData => {
  // console.log("{contextData}")
  // console.log(contextData)
  let title = ""

  if ("pageContext" in contextData && "data" in contextData.pageContext) {
    const data = contextData.pageContext.data
    title = data.pageName
  }

  return <Seo title={title} />
}

export default GenericPageTemplates
