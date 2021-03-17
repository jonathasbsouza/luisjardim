import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Carousel from "../components/Carousel"
import Layout from "../layouts/Layout"

export default props => {
  const {
    description,
    gallery,
    name,
    summary,
    references,
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
      />
      <div className="bg-gray-0">

          <div className="flex flex-wrap">
            
            <div className="w-full self-end lg:w-1/3 p-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {name}
              </h1>
              {description && (
                <div className="my-4 text-base text-gray-700 whitespace-pre-line">
                  {description.description}
                </div>
              )}
                <div className="my-4 text-sm text-gray-700 whitespace-pre-line">
                { references && (
                  <>
                    <h5>Fonte</h5>
                    <span>{ references }</span>
                  </>
                )}
                </div>
            </div>
            <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                  style={{
                    height: "70vh",
                    backgroundColor: "#232425",
                  }}
                  imgStyle={{
                    objectPosition: "50% 50%",
                    objectFit: "contain"
                  }}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>    
          </div>

      </div>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      references
      gallery {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        description
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      url
    }
  }
`
