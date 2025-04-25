import { Request, Response} from "express"
import { validationResult } from "express-validator"
import slug from "slug"
import User from "../models/User"
import { hashPassword } from "../utils/auth"

export class Handlers {
    static createAccount = async (req: Request, res: Response) => {

        //Manejar Errores
        let errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({errors: errors.array()})
            return
        }

        const {email, password} = req.body

        const userExist = await User.findOne({email})
        if(userExist){
            const error = new Error("El correo ya fue utilizado")
            res.status(409).json({error: error.message})
            return
        }

        const handle = slug(req.body.handle, "")

        const handleExist = await User.findOne({handle})
        if(handleExist){
            const error = new Error("Nombre de usuario no disponible")
            res.status(409).json({error: error.message})
            return
        }

        const user = new User(req.body)
        user.password = await hashPassword(password)
        user.handle = handle
        await user.save()

        res.status(201).json({msg: "Usuario creado Correctamente"})
    }
}
