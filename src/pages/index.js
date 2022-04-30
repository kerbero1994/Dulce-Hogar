import * as React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"

const home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
      </Helmet>
      <Seo title="Home" />
      <Hero />
    </Layout>
  )
}

export default home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
