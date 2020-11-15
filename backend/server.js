const express = require("express")
const products = require("./data/products")
const app = express()
const port = 5000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/product/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id)
  res.json(product)
})

// // app.listen(5000, console.log("server runs on 5000"))
