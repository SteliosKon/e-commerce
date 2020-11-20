import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import {
  notFound,
  errorHandler,
} from "../backend/middleware/errorMiddleware.js"

dotenv.config()
connectDb()
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Api is running!")
})

// Routes
app.use("/api/products", productRoutes)
// Middleware for error handling
app.use(notFound)
// Handling 404's
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode at port ${PORT}`)
})
