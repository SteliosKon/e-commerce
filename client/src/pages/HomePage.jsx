import React, { Fragment, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

//  Actions
import { listProducts } from "../actions/productActions"

// Components
import Product from "../components/content/Product.jsx"
import Loader from "../components/common/Loader"
import Message from "../components/common/Message"

const HomePage = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={"This is an error"} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col
              style={{ display: "flex", justifyContent: "center" }}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              key={product._id}
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  )
}

export default HomePage
