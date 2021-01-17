import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import Swiper from "react-id-swiper"

import "swiper/css/swiper.css"
import "./Carousel.css"

export const Carousel = ({ images }) => {
  const swiperParams = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...swiperParams}>
      {images.map(image => {
        return (
          <div key={`slide_${image.id}`}>
            <Img
              fluid={image.localFile.childImageSharp.fluid}
              alt={image.title}
            />
            { image.description && ( 
              <p>{image.description}</p>
            )}
          </div>
        )
      })}
    </Swiper>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
