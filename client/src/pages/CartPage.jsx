import React, { useEffect } from "react"
import { Col, Row, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

// CSS
import "./cartpage.scss"

// Components
import Message from "../components/common/Message"

// Actions
import { addToCart, removeFromCart } from "../actions/cartActions"

const Cartpage = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = history.search ? Number(history.search.split("=")[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty))
  }, [dispatch, productId, qty])

  // Functions
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping")
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Row>
      <Col md={8}>
        <h3>SHOPPING CART</h3>
        {cartItems.length === 0 ? (
          <Message>
            No items in the cart <Link to="/"> Keep Shopping</Link>
          </Message>
        ) : (
          <Card>
            <ListGroup varaint="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2} className="center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col md={4} className="center">
                      <Link to={`/product/${item.product}`}> {item.name}</Link>
                    </Col>
                    <Col md={2} className="center">
                      ${item.price}
                    </Col>
                    <Col md={2} className="center">
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((num) => (
                          <option key={num + 1} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2} className="center">
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        )}
      </Col>
      <Col md={4} className="mt-5">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal (
                <b>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</b>)
                items of total
                <b>
                  {" "}
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </b>
              </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                variant="primary"
                className="btn btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default Cartpage
