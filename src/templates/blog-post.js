import React from "react"
import { Link, graphql } from "gatsby"
import { FacebookProvider, Comments } from 'react-facebook';


import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

// var MathJax = require("mathjax-node");

class BlogPostTemplate extends React.Component {
    componetDidMount = function(){
      this.props.url_for_facebook_comments = window.location.href;
    }

    render =  function(){
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
      return (
      <Layout location={this.props.location} title={siteTitle}>


        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="prev">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      <h1
        className = 'text'
        >{post.frontmatter.title}</h1>
        <p
        className = 'text'
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <div className='text' dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {next && (
              <Link to={next.fields.slug} rel="prev">
                ← {next.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="next">
                {previous.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      <FacebookProvider appId="610647152789300">
        <Comments href={this.props.url_for_facebook_comments} width="630"/>
      </FacebookProvider>


      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
