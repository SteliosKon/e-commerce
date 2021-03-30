import React, { Fragment } from "react"
import "./customcard.scss"
import Rating from "../../content/Rating"

function CustomCard({ product }) {
  console.log("product", product)

  let { name, description } = product
  return (
    <Fragment>
      <div className="customcard">
        <div className="customcard-container">
          <div className="photo">
            <div className="circle"></div>
            <img
              className="image"
              src={"http://localhost:3000/images/camera.png"}
              alt="product"
            ></img>
          </div>

          <div className="info">
            <h1 className="title"> {name} </h1>
            <div className="description"> {description.slice(0, 75)}</div>
          </div>

          <div className="rating">
            <Rating data={product} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CustomCard
