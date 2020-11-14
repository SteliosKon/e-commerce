import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from "../assets/mini-logo.jpg"
import "./header.scss"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              className="header-image d-inline-block align-top"
            />
            <span>React Bootstrap </span>
          </Navbar.Brand>
          <Nav className="nav">
            <Nav.Link>
              Cart
              <i className="fas fa-shopping-cart ml-2"></i>
            </Nav.Link>
            <Nav.Link>
              Sign in!
              <i className="fas fa-user ml-2"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
