import express from "express"
import dotenv from "dotenv"

import connectDb from "./config/db.js"
import products from "./data/products.js"

dotenv.config()
connectDb()
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`)
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/product/:id", (req, res) => {
  const product = products.find((prod) => prod._id === req.params.id)
  res.json(product)
})

// // app.listen(5000, console.log("server runs on 5000"))
