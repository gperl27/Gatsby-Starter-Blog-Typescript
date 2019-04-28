/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { ComponentProps, forwardRef, Ref } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
)

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <Content>
      <Avatar
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: "50%" }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Content>
  )
}
