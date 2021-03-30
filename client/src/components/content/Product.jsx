import React, { Fragment } from "react"
// import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "./Rating.jsx"
import "./product.scss"

import CustomCard from "../common/CustomCard/CustomCard"

const Product = ({ product }) => {
  let { image, name, price, _id } = product
  return (
    <Fragment>
      <CustomCard product={product} />
      {/* <Card className="product my-3 p-3 rounded">
        <Link to={`/product/${_id}`}>
          <Card.Img src={image} variant="top"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${_id}`}>
            <Card.Title as="div">
              <strong>{name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              <Rating data={product} />
            </div>
          </Card.Text>
          <Card.Text as="h3">${price}</Card.Text>
        </Card.Body>
      </Card> */}
    </Fragment>
  )
}

export default Product
