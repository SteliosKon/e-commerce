import React, { Fragment, useEffect } from "react"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"

//  Actions
import { productDetails } from "../actions/productActions"

// Components
import Rating from "../components/content/Rating.jsx"
import Loader from "../components/common/Loader"
import Message from "../components/common/Message"

const Productpage = ({ match }) => {
  const dispatch = useDispatch()
  const productDetailsState = useSelector((state) => state.productDetails)
  const { product, loading, error } = productDetailsState

  // Get single product info
  useEffect(() => {
    dispatch(productDetails(match))
  }, [dispatch, match])

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Fragment>
          <LinkContainer to="/">
            <button className="btn btn-light my-3 ">Go back</button>
          </LinkContainer>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating data={product} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <h2>{product.price}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span>{product.description}</span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col> Price : </Col>
                      <Col>{product.price} </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col> Status : </Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      ADD TO CART
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Productpage
