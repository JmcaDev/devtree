import { Request, Response} from "express"
import User from "../models/User"

export class Handlers {
    static createAccount = async (req: Request, res: Response) => {

        const {email} = req.body

        const userExist = await User.findOne({email})
        
        if(userExist){
            const error = new Error("El usuario ya esta registrado")
            res.status(409).json({error: error.message})
            return
        }
        const user = new User(req.body)
        await user.save()
    
        res.json({msg: "Registro creado correctamente"})
    }
}
