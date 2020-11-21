import React from "react"
import Spinner from "react-bootstrap/Spinner"

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="secondary"
      style={{
        width: "100px",
        height: "100px",
        display: "block",
        margin: "auto",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default Loader
