import React, { Fragment } from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import Homepage from "./pages/Homepage.jsx"
import Productpage from "./pages/Productpage.jsx"

function App() {
  return (
    <Fragment>
      <Router>
        <Header className="py-3" />
        <main>
          <Container>
            <Route path="/" component={Homepage} exact />
            <Route path="/product/:id" component={Productpage} />
          </Container>
        </main>
        <Footer />
      </Router>
    </Fragment>
  )
}

export default App
