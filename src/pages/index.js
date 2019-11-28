import React from "react"
import { Link, Image, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)

export default IndexPage
export const pageQuery = graphql`
  query{
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1920) {
            aspectRatio
            src
            sizes
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
    }
  }
`
