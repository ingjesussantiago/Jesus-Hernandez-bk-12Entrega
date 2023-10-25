import { Router} from "express"
//import  managerProducto from "../dao/mongoosedb/managerMongose/managerProductoMoogose.js"
import { __dirname } from "../../utils.js"
import session from "express-session"


const router = Router()

router.get("/realTimeProductos", (req, res) => {
    res.render("realTimeProducts")
})

router.get("/formulario",(req,res)=>{
    res.render("formularioProducto")
})

router.get("/formularioIo",(req,res)=>{
    res.render("formularioProductoIo")
})

// vista de sesiones,registro, profile

router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/registro",(req,res)=>{
    res.render("registro")
})

router.get("/profile", async (req, res) => {
    console.log({user:req.session.user});
    res.render("profile", { user: req.session.user })
})

export default router