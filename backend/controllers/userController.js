import asyncHandler from "express-async-handler"
import User from "../models/user.js"
import generateToken from "../utils/tokenGenerator.js"

// @desc Authenticate user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //Search for user
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    // authenticate
    res.json({
      _id: user._uid,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  //Search for user
  const user = await User.findById(req.user._id)
  res.send("success")
})

export { authUser, getUserProfile }
