import React, { Fragment } from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy; eshop</Col>
          <Col className="text-center py-3">Column3</Col>
          <Col className="text-center py-3">Column3</Col>
          <Col className="text-center py-3">Column4</Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Footer
