import React from "react"
import { Link } from "gatsby"

function ListLink(props) {
  return (
    <Link className="list-link" to={props.to}>{props.label}</Link>
  )
}

export default ListLink
