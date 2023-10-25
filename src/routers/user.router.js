import { Router } from "express"
import * as userController from "../controllers/user.controller.js"

const router = Router()

router.get("/addCart", userController.addCartToUser)
router.get("/addproduct", userController.addproductToCart)

export default router



