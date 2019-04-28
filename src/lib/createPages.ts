import path from "path"
import { GatsbyCreatePages } from "../types"

interface Post {
  node: {
    fields: {
      slug: string
    }
  }
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (allMarkdown.errors) {
    throw allMarkdown.errors
  }

  // Create blog posts pages.
  const posts = allMarkdown.data.allMarkdownRemark.edges

  posts.forEach((post: Post, index: number) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug,
      },
    })
  })

  return null
}
