import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  console.log(data.allMarkdownRemark.edges) || <Layout>
    <SEO title="Page two" />
    <h1>Война и мир(в основном война)</h1>
    <Link to="/">Go back to the homepage</Link>
    <ul>
      {data.allMarkdownRemark.edges.map(item => (
        <li key={item.node.frontmatter.path}><Link to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link></li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
query HomePageQuery {
    allMarkdownRemark(sort: {fields: frontmatter___path}) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`

export default SecondPage
