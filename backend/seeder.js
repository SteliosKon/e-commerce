import mongoose from "mongoose"
import dotenv from "dotenv"
import products from "./data/products.js"
import users from "./data/users.js"
import User from "./models/user.js"
import Product from "./models/product.js"
import Order from "./models/order.js"
import connectDb from "./config/db.js"

dotenv.config()

connectDb()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)
    // get admin id
    const admin = createdUsers[0]._id
    // place admin id in product schema
    const sampleProducts = products.map((item) => {
      return { ...item, user: admin }
    })

    await Product.insertMany(sampleProducts)

    console.log("data has imported ")
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log("data has destroyed ")
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

if (process.argv[2] === "-d") {
  destroyData()
} else {
  importData()
}
