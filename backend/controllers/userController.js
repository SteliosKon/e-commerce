import asyncHandler from "express-async-handler"
//import User from "../models/user.js"

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  res.send({ email, password })
})

export { authUser }
