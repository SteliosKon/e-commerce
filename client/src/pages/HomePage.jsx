import React, { Fragment } from "react"
import products from "../products"

const HomePage = () => {
  return (
    <Fragment>
      {products.map((item) => (
        <div>{item.name}</div>
      ))}
    </Fragment>
  )
}

export default HomePage
