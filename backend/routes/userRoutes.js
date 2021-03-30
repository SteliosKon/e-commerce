import express from "express"

// Controllers
import { authUser, getUserProfile } from "../controllers/userController.js"

const router = express.Router()

router.post("/login", authUser)
router.route("/profile").get(getUserProfile)

export default router
