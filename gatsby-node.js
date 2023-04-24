/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const results = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            pageName
            slug
            nanner {
              nanner
            }
          }
        }
      }
    }
  `)

  const pageItems = results.data.allContentfulPage.edges

  for (let i = 0; i < pageItems.length; i++) {
    let itemData = pageItems[i].node
    let slug = itemData.slug
    createPage({
      path: `/${slug}`,
      component: require.resolve("./src/templates/GenericPageTemplates.js"),
      context: { data: itemData },
      defer: true,
    })
  }
}
