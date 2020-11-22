import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import CartPage from "./pages/CartPage.jsx"

function App() {
  return (
    <Fragment>
      <Router>
        <Header className="py-3" />
        <main>
          <Container>
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
