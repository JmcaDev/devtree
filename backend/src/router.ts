import { Router } from "express"
import { body } from "express-validator"
import {Handlers} from "./handlers"
import { handleInputErrors } from "./middleware/validation"

const router = Router()

/** Auth & Registration */
router.post("/auth/register", 
    body("handle")
        .notEmpty()
        .withMessage("El handle no puede ir vacio"),
    body("name")
        .notEmpty()
        .withMessage("El nombre no puede ir vacio"),
    body("email")
        .isEmail()
        .withMessage("Email no valido"),
    body("password")
        .isLength({min: 8})
        .withMessage("El password debe ser minimo de 8 caracteres"),
        handleInputErrors,
Handlers.createAccount)

router.post("/auth/login",
    body("email")
        .isEmail()
        .withMessage("Email no valido"),
    body("password")
        .notEmpty()
        .withMessage("El password es obligatorio"),
        handleInputErrors,   
Handlers.login)

export default router