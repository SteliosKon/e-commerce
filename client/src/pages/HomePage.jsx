import React, { Fragment, useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Product from "../components/content/Product.jsx"
import axios from "axios"

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products")
      setProducts(data)
    }
    fetchProducts()
  }, [])

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
