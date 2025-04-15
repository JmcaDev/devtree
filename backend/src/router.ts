import { Router } from "express"

const router = Router()

//Routing
router.get("/", (req, res) => {
    res.send("Index")
})

router.get("/nosotros", (req, res) => {
    res.send("Nosotros")
})

export default router