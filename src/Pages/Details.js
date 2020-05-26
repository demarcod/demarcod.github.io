import React from 'react'
import Portfolio from '../portfolio'
import { Link } from 'react-router-dom'

const Details = (props) => {
  const detail = Portfolio.get(
    props.match.params.name
  )
  if (!detail) {
    return <div>Sorry, but the project was not found</div>
  }
  return (
    <div>
      <h1>{detail.name}</h1>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default Details
