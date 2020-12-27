/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
      query AboutQuery {
          avatar: file(absolutePath: { regex: "/pic.png/" }) {
              childImageSharp {
                  fixed(width: 200, height: 200, quality: 95) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
          site {
              siteMetadata {
                  author {
                      name
                      summary
                  }
                  social {
                      linkedin
                  }
              }
          }
      }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="about">
      <div>
        {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="about-avatar"
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        )}
      </div>
      <div>
        {author?.name && (
          <p>
            Hi, I am <strong>{author.name}</strong>, the author of this blog. <br/>
            {author?.summary || null}
            {` `}
            <a  href={`https://www.linkedin.com/in/${social?.linkedin || ``}`}>
              You should connect with me on LinkedIn
            </a>
          </p>
        )}
        <p>
          This is my personal blog where I share my knowledge, thoughts, real world use cases and tutorials with you.<br/>
          It is supposed to be all about programming, DevOps and Machine Learning, but you might stumble on off topic posts like a falafel recipe... <br/>
        </p>
      </div>
    </div>
  )
}

export default About
