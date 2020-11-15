import React, { Fragment } from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../components/content/Product.jsx"
import products from "../products"

const HomePage = () => {
  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default HomePage
