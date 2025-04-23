import { Router } from "express"
import {Handlers} from "./handlers"

const router = Router()

/** Auth & Registration */
router.post("/auth/register", Handlers.createAccount)


export default router