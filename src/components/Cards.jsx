import PropTypes from "prop-types"
import React from "react"
import Card from "./Card"

const Cards = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {items.map(item => (
            <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
