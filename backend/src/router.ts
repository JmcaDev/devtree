import { Router } from "express"
const router = Router()

/** Auth & Registration */
router.post("/auth/register", (req, res) => {
    console.log(req.body)
})


export default router