import React, { Fragment } from "react"
import { Container } from "react-bootstrap"

import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import HomePage from "./pages/HomePage.jsx"

function App() {
  return (
    <Fragment>
      <Header className="py-3" />
      <main>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </Fragment>
  )
}

export default App
