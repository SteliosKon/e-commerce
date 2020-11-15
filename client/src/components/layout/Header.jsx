import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Logo from "../../assets/mini-logo.jpg"
import "./header.scss"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt="Logo"
                src={Logo}
                className="header-image d-inline-block align-top"
              />
              <span> e-shop </span>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="nav">
            <LinkContainer to="/cart">
              <Nav.Link>
                Cart
                <i className="fas fa-shopping-cart ml-2"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>
                Sign in
                <i className="fas fa-user ml-2"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
