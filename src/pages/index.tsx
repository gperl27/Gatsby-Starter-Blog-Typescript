import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { rhythm } from "../utils/typography"

const BlogIndex = (props: { location: { pathname: string } }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={slug}>
                {title}
              </Link>
            </h3>
            <small>{frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
